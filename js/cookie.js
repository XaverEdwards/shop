/*
 * 设置cookie
 * _user  cookie名称 
 * _value  cookie值
 * _date   过期时间
 * */
function setCookie(_user,_value,_date){
	//创建一个对象
	var obj={
		"tmp":_value
	};
	//将对象转换成字符串
	var str=JSON.stringify(obj);     //str='{"tmp":_value}'
	
	str=encodeURIComponent(str);//中文编码
	
	//存储cookie
	if(_date){//如果有过期时间，执行下面的代码
		var d=new Date();
		d.setDate(d.getDate()+_date);
		document.cookie=_user+"="+str+";path=/;expires="+d.toGMTString();
	}
	else{
		document.cookie=_user+"="+str+";path=/;";
	}
}
/*
 * 获取cookie
 * _user  cookie名称 
 * */
function getCookie(_name){
	var str=document.cookie;//获取所有的cookier 
	var arr=str.split("; ");//字符串转换为数组    ["a=1","b=2","c=3"]
	for(var i=0,l=arr.length;i<l;i++){
		var col=arr[i].split("="); //数组元素（字符串）转换为数组  ["a","1"]
		if(col[0]==_name){
			var str=decodeURIComponent(col[1]);
			//字符串转对象
			var obj=JSON.parse(str);
			return obj.tmp;//获取对象中的tmp属性
		}
	}
	// 如果循环结束后，也没有找到_name，直接返回空
	return "";//如果不写，则返回undefined
	
}
//在所有的cookie中，找到购物车商品cookie
function getGoodsCookies(fn){
	var str=document.cookie;
	var arr=str.split("; ");
	var num=0;
	for(var i=0,l=arr.length;i<l;i++){
		var col=arr[i].split("=");
		if(/^g\d+$/.test(col[0])){
			var str=decodeURIComponent(col[1]);
			var obj=JSON.parse(str);
			fn(col[0],obj.tmp);
			num+=obj.tmp.num;
		}
	}
	return num;
}
