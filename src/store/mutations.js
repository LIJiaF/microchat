const SID = 'SID'
const UID = 'UID'
const USER = 'USER'

export default {
	[SID] (state, sid) {
		state.sid = sid
	},
	[UID] (state, uid){
		state.uid = uid
	},
	[USER] (state, userstate){
		state.userstate = userstate
	},
}