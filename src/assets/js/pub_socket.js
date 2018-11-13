import PROTOBUF from './pub_protobuf.js'

var STOCK = function(userObj){
	this.ws = '';
	this.sid = '';
	this.userObj = userObj;
	this.protoObj = new PROTOBUF(this);
}

STOCK.prototype.setSid = function(sid){
	this.sid = sid;
	this.protoObj.sid = sid;
}

STOCK.prototype.connect = function(connectUrl){
	if(connectUrl != null){
		this.ws = new WebSocket('ws://' + connectUrl);
		this.ws.binaryType = 'arraybuffer';
		this.ws.socketObj = this;
		this.ws.protoObj = this.protoObj;
		this.ws.onopen = socket_onopen;
		this.ws.onmessage = socket_onmessage;
		this.ws.onclose = socket_onclose;
		console.log('socket连接成功');
	}else{
		console.log('socket连接失败');
	}
}

STOCK.prototype.sendMsg = function(code, data){
	var build = this.protoObj.msgType2CallBack[code];
	var module = new build(data);
	var msgProto = this.protoObj.create_Proto(code, module);
	this.ws.send(msgProto);
}

function socket_onopen(enent){
	var build = this.protoObj.msgType2CallBack[this.protoObj.C_S_CONNECT];
	var module = new build({'sid': this.socketObj.sid});
	var msgProto = this.protoObj.create_Proto(this.protoObj.C_S_CONNECT, module);
	this.send(msgProto);
}

function socket_onmessage(event){
	var data = event.data;
	var dv = new DataView(data);
	var type = dv.getUint32(0, false);
	var proto = data.slice(4, data.byteLength);
	var build = this.protoObj.msgType2CallBack[type];
	var msg = build.decode(proto);
	console.log(type + msg);
	console.log(msg);

	if(this.protoObj.msgTypeCallBack.hasOwnProperty(type)){
		if(msg.hasOwnProperty('timeStamp')){
			var timeStamp = msg.timeStamp;
			if(timeStamp < 1000000000000) timeStamp *= 1000;
			var time = new Date(timeStamp);
			this.protoObj.msgTypeCallBack[type](this.protoObj, msg, time);
		}else{
			this.protoObj.msgTypeCallBack[type](this.protoObj, msg);
		}
	}
}

function socket_onclose(enent){
	var myDate = new Date();
	var showTime = `${myDate.getFullYear()}-${myDate.getMonth()}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}`;
	console.log('连接已断开');
}

export default STOCK;