
$(".go").click(function() {
		location.href = "car.html";
	})
	/*搜索*/
$(".btn_search").click(function() {
	location.href = "list.html";
})
$(".a5").click(function() {
		location.href = "car.html";
	})
	/*顶部*/
$(function() {
	$("a:has(strong)").mouseover(function() {
		$(this).children("strong").css({
			"display": "block"
		})
	}).mouseout(function() {
		$(this).children("strong").css({
			"display": "none"
		})
	})
});
/*回到顶部*/
top.onclick=function(){
	document.documentElement.scrollTop = document.body.scrollTop = 0;
}
/*搜索框*/
$.each($(".search_box  a"), function() {
	//console.log($(".search_box  a"));
	$(this).click(function() {
		//console.log($(".search_box  a"));
		$(".search #ser").val($(this).html());
		//console.log($(this).html());
	});
});
$("#ul1 li").click(function() {
	location.href = "list.html"
});
/*左侧*/
$("#ul1 li").mouseenter(function() {
	//console.log($(this));
	$(this).css({
		"background-color": "#DC0F50",
		"color": "#fff"
	});
}).mouseleave(function() {
	//console.log($(this));
	$(this).css({
		"background-color": "#fff",
		"color": "#000"
	});
});

/*图片放大*/
/*$(".bg").mouseover(function(){
	console.log($(".bg"));
	$("img").stop().animate({
			"width":300,
			"height":300,
			"left":-50,
			"top":-50
		})
	}).mouseout(function(){
	$("img").stop().animate({
			"width":200,
			"height":200,
			"left":0,
			"top":0
		})
   })*/

/*倒计时(时分秒)*/
function getTime(obj) {
	setInterval(function() {
		var a = new Date('2019/05/01 00:00:00');; //结束时间
		var b = new Date().getTime(); //现在的时间
		var d = 0,
			s = 0,
			h = 0,
			m = 0;
		var is = obj.getElementsByTagName("i")
		d = Math.floor((a - b) / 1000 / 60 / 60 / 24);
		h = Math.floor((a - b) / 1000 / 60 / 60 % 24);
		m = Math.floor((a - b) / 1000 / 60 % 60);
		s = Math.floor((a - b) / 1000 % 60);
		is[0].innerHTML = d;
		is[1].innerHTML = h;
		is[2].innerHTML = m;
		is[3].innerHTML = s;
	}, 0);
}

function getALLnum() {
	var num = getGoodsCookies(function(_name, obj) {});
	return num;
}
$(".gow").html(getALLnum());

//判断用户是否登录
var div = $("<div></div>");
$(".hello").append(div);
div.addClass("hello2");
var img = $("<img>");
div.append(img);
img.attr("src", "img/mrtx.jpg");
var u = getCookie("user1");
var h6 = $("<h6></h6>");
div.append(h6);
h6.html("hi!" + u[0][0] + "欢迎登录");
var str = getCookie("succ_login");
var back = $("#tuichu");
if(str == "") {
	$(".hello1").stop().show();
	$(".hello2").stop().hide();
	back.html("请登录");
	back.attr("href","login.html");
} else {
	$(".hello2").stop().show();
	$(".hello1").stop().hide();
	back.html("退出");
	back.click(function() {
		setCookie("user1","",-1);
		back.attr("href","");
		$(".hello1").stop().show();
		$(".hello2").stop().hide();
		back.html("请登录");
		
	});
}