function setCookie(uid){
	let date = new Date();
	date.setTime(date.getTime()+60*1000);
	document.cookie="uid=" + uid + ";expires=" + date.toGMTString();
}

function getCookie(){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
    if(arr=document.cookie.match(reg)){
        return arr[2];
    }
    else{
        return null; 
    }
}

export {
	setCookie,
	getCookie
}