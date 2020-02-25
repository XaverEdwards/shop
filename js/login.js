/*选项卡切换*/
var cs = getCookie("user1");
console.log(cs);
$("#yh").bind("click", function() {
	$("#user").show();
	$("#quick").hide();
	$(this).addClass("selet");
	$("#kj").removeClass("selet");
});
$("#kj").bind("click", function() {
	$("#quick").show();
	$("#user").hide();
	$(this).addClass("selet");
	$("#yh").removeClass("selet");
});
/*用户登录表单验证*/
$(".cellphone").blur(function() {
	if($(".cellphone").val() == "") {
		/*console.log($("#ts"));*/
		$("#ts").html("请输入手机号码");
		$(".cellphone").css({
			"border": "1px solid #DC0F50"
		})
		return false;
	} else if(!$(".cellphone").val().match(/^1[3587]\d{9}$/)) {
		$("#ts").html("请输入11位有效的手机号码");
		return false;
	} else {
		/*$("#ts").html("手机号正确");*/
		$(".success").css({
			"display": "block"
		});
	}

});
$(".mima").blur(function() {
	if($(".mima").val() == "") {
		/*	console.log($("#ts"));*/
		$("#ts").html("请输入密码");
		$(".mima").css({
			"border": "1px solid #DC0F50"
		})
		return false;
	} else if(!(/^\w{6,16}$/.test($(".mima").val()))) {
		$("#ts").html("请输入6-16位密码");
		return false;
	} else {
		/*$("#ts").html("密码正确");*/
		$(".success1").css({
			"display": "block"
		});
	}

});
$(".lg").click(function() {
	if($(".cellphone").val() == "" && $(".mima").val() == "") {
		$("#ts").html("账户名和密码不能为空");
		$(".mima").css({
			"border": "1px solid #DC0F50"
		})
		return false;
	} else {
		if($(".cellphone").val() == cs[0][0]) {
			$(".lg").attr({"href": "index.html"});
			setCookie("succ_login","success",7);
		} else {
			$("#ts").html("该账户不存在");
		}
	}
});
/*电视用户登录*/

$(".cp").blur(function() {
	if(!(/^1[3587]\d{9}$/.test($(".cp").val()))) {
		$(".tvuser").html("请输入11位有效的手机号码");
		$(".tvuser").css({
			"color": "red",
			"background-image": "url(img/error_bg.png)"
		})

	} else {
		$(".tvuser").html("手机号正确");
		$(".tvuser").css({
			"color": "green",
			"background-image": "url(dataImg/correct_bg.png)"
		})
	}
});
/*图片验证码*/
$("#picyzm").blur(function() {

	if($("#picyzm").val() == "") {
		$(".tvuser").css({
			"color": "red",
			"background-image": "url(img/error_bg.png)"
		})
		$(".tvuser").html("图片验证码为空");
	} else if($("#picyzm").val() == $("#v_container").html()) {

		$(".tvuser").html("图片验证码正确");
		$(".tvuser").css({
			"color": "green",
			"background-image": "url(dataImg/correct_bg.png)"
		})
		$("#text").css({
			"border": "1px solid #DC0F50"
		});
	} else {
		$(".tvuser").html("验证码错误，请重新输入");
		$(".tvuser").css({
			"color": "red",
			"background-image": "url(img/error_bg.png)"
		})
	}
});

$("#picyzm").next("span").html(checkCode());
$("#v_container").html(checkCode());
$(".change").click(function() {
	$("#picyzm").next("span").html(checkCode());
	return false;
});
$("#v_container").click(function() {
	$(this).html(checkCode()).prev("input").focus();
	return false;
});

function checkCode() {
	var str = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";
	var l = str.length;
	var num1 = str[parseInt(Math.random() * l)];
	var num2 = str[parseInt(Math.random() * l)];
	var num3 = str[parseInt(Math.random() * l)];
	var num4 = str[parseInt(Math.random() * l)];

	var str1 = "" + num1 + num2 + num3 + num4;
	return str1;
}
/*获取短信验证码*/
$(".cellyzm").blur(function() {

	if($(".cellyzm").val() == 1234) {
		$(".tvuser").html("验证码正确");
		$(".tvuser").css({
			"color": "green",
			"background-image": "url(dataImg/correct_bg.png)"
		})

	} else if($(".cellyzm").val() == "") {
		$(".tvuser").css({
			"color": "red",
			"background-image": "url(img/error_bg.png)"
		})
		$(".tvuser").html("手机验证码为空");
	}
})
$(function() {
	var djs = true;
	$("#btn").click(function() {
		var time = 10;
		var code = $(this);
		if(djs) {
			djs = false;
			code.addClass("btn1");
			var t = setInterval(function() {
				time--;
				code.html(time + "秒");
				if(time == 0) {
					clearInterval(t);
					code.html("重新获取");
					djs = true;
					code.removeClass("btn1");
				}
			}, 1000)
		}
	})
})
$(".dl").attr({
				"href": "index.html"
			});
function getALLnum() {
	var num = getGoodsCookies(function(_name, obj) {});
	return num;
}
$(".gow").html(getALLnum());