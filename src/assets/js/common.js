import store from '@/store/store.js'

var testCom = function(){
	this.name = '';
	this.age = '';
}

testCom.prototype.init = function(){
	store.commit('SID', '222')
	var sid = store.state.sid;
	console.log(sid);
}

export default testCom;