var PROTOBUF = function(socketObj){
	this.sid = '';
	this.socketObj = socketObj;
	this.msgTypeCallBack = {};
	this.msgType2CallBack = {};
	this.create_codeProto();
	this.init();
}

PROTOBUF.prototype.create_codeProto = function(){
	this.C_S_CONNECT = 0x00001001;
	this.C_S_SENDMSGTOUSER = 0x00001002;
	this.S_C_CONNECT = 0x00002001;
	this.S_C_DISCONNECT = 0x00002002;
	this.S_C_SENDMSGERROR = 0x00003001;
	this.S_C_SENDMSGTOUSER = 0x00003002;
}

PROTOBUF.prototype.init = function(){
	var protoDataList = this.getExtendProtoDataList();
	this.buildProtoBuf(protoDataList);
}

PROTOBUF.prototype.getExtendProtoDataList = function(){
	var MapList = [
		[this.C_S_CONNECT, 'C_S_Connect'],
		[this.C_S_SENDMSGTOUSER, 'C_S_SendMsgToUser'],
		[this.S_C_CONNECT, 'S_C_Connect', this.S_C_Connect],
        [this.S_C_DISCONNECT, 'S_C_DisConnect', this.S_C_DisConnect],
        [this.S_C_SENDMSGERROR, 'S_C_SendMsgError', this.S_C_SendMsgError],
        [this.S_C_SENDMSGTOUSER, 'S_C_SendMsgToUser', this.S_C_SendMsgToUser],
	]
	return [{pkgName: 'Send_Msg', path: '../../../static/proto/Send_Msg.proto', classMapList: MapList}]
}

PROTOBUF.prototype.buildProtoBuf = function(protoDataList){
	var ProtoBuf = dcodeIO.ProtoBuf;
	for(var i=0;i<protoDataList.length;i++){
		var protoData = protoDataList[i];
		var pkgName = protoData.pkgName;
		var builder = ProtoBuf.loadProtoFile(protoData.path);
		console.log(builder);
		var list = protoData.classMapList;
		for(var j=0;j<list.length;j++){
			var data = list[j];
			var msgCode = data[0];
			var msgFun = data[1];
			var msgName = `${pkgName}.${msgFun}`;
			var msgClass = builder.build(msgName);
			if (msgClass == null) {
	            console.log(`msgName:${msgName} 建模失败`);
	        }
	        this.msgType2CallBack[msgCode] = msgClass;
	        if(data.length == 3) {
	            this.msgTypeCallBack[msgCode] = data[2];
	        }
	    }
	}
}

PROTOBUF.prototype.S_C_Connect = function(protoObj, msgData, time){
	var showTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
	console.log('S_C_Connect');
}

PROTOBUF.prototype.S_C_DisConnect = function(protoObj, msgData, time){
	var showTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
	console.log('S_C_DisConnect');
}

PROTOBUF.prototype.S_C_SendMsgError = function(protoObj, msgData, time){
	var showTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
	console.log('S_C_SendMsgError');
}

PROTOBUF.prototype.S_C_SendMsgToUser = function(protoObj, msgData, time){
	var showTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
	console.log('S_C_SendMsgToUser');
}

PROTOBUF.prototype.create_Proto = function(code, Module){
	var proto = Module.toArrayBuffer();
	var length = proto.byteLength;
	var pro_msg = new dcodeIO.ByteBuffer(length + 4, false, false);
	pro_msg.writeInt32(code, 0);
	pro_msg.append(proto, 'undefined', 4);
	return pro_msg.view;
}

export default PROTOBUF;