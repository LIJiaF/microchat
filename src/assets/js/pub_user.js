import SOCKET from './pub_socket.js'

var USER = function(sid, uid){
	this.sid = sid;
	this.uid = uid;
	this.socketObj = new SOCKET(this);
	this.socketObj.setSid(this.sid);
	console.log(`uid:${this.uid},sid:${this.sid}`);
}

export default USER;