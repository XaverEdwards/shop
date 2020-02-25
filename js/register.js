/*手机号*/
formCheck();

function formCheck() {
	$(".cellphone").blur(function() {
		if($(".cellphone").val() == "") {
			$(this).next().html("请输入手机号码");
			$(".cellphone").css({
				"border": "1px solid #DC0F50"
			})
		} else {
			if(!$(".cellphone").val().match(/^1[3587]\d{9}$/)) {
				$(this).next().html("请输入11位有效的手机号码");
				$(this).next().html();
			} else {
				$(this).next().html("手机号输入正确");
			}

		}
	});
	/*生成图片验证码*/
	$(".text").next("span").html(checkCode());
	$("#v_container").html(checkCode());
	$(".change").click(function() {
		$(".next").next("span").html(checkCode());
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
	/*图片验证码*/
	/*console.log($(".text"));
	console.log($("#v_container").html());*/
	$("#text").blur(function() {
		if($("#text").val()==""){
			$(this).next().next().html("验证码为空");
		}else if($("#text").val() == $("#v_container").html()) {
			$(this).next().next().html("验证码正确");
			$("#text").css({"border": "1px solid #DC0F50"});
		} else {
			$(this).next().next().html("验证码错误，请重新输入");
		}
	});
	/*密码*/
	$(".password").blur(function() {
		if($(".password").val() == "") {
			$(this).next().html("请输入密码");
			$(".password").css({
				"border": "1px solid #DC0F50"
			})
		} else {
			if($(".password").val().match(/^\w{6,16}$/)) {
				$(this).next().html("密码正确");
				$(this).next().html();
			}
		}
	});
	/*确认密码*/
	$(".pw").blur(function() {
		if($(".pw").val() == $(".password").val()) {
			$(this).next().html("密码一致");
			$(".pw").css({
				"border": "1px solid #DC0F50"
			})
		} else {
			$(this).next().html("密码不一致请重新输入");
		}
	});
	/*短信验证码*/
	$(".yzm").blur(function() {
			if($(".yzm").val() == 1234) {
				$(this).next().next().html("验证码正确");
				$(".yzm").css({
					"border": "1px solid #DC0F50"
				})
			}
		})
		/*获取短信验证码*/
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
	/*阅读条款*/
	$("#yd").change(function() {
		/*console.log($("#yd"));*/
		if($(this).is(":checked")) {
			$(".zc").css({
				"background": "#DC0F50"
			});
			$(".zc").bind("click", sub);
		} else {
			$(".zc").css({
				"background": "#666"
			});
		}
	});
}

/*提交*/
var i = 0;

function sub() {
	var input1 = $(".cellphone");
	var input2 = $(".text");
	var input3 = $(".password");
	var input4 = $(".pw");
	var input5 = $(".yzm");
	var arr = []; //保存信息
	/*if($(input1.val() == "")) {
		input1.next().html("手机号为空").show();
	} else if($(input2).val() == "") {
		input2.next().next().html("验证码为空").show();
	} else if($(input3).val() == "") {
		input3.next().html("密码为空").show();
	} else if($(input4).val() == "") {
		input4.next().html("确认密码为空").show();
	} else if($(input5).val() == "") {
		input5.next().next().html("验证码为空").show();
	} else {*/
		input1.next().hide();
		input2.next().next().hide();
		input3.next().hide();
		input4.next().hide();
		input5.next().next().hide();
		//将用户信息存到cookie中
		i++;
		arr.push([input1.val(), input3.val()]);
		setCookie("user" + i, arr, 7);
		$(".zc").attr({
			"href": "login.html"
		});
		return true;
	/*}*/
}
function getALLnum() {
	var num = getGoodsCookies(function(_name, obj) {});
	return num;
}
$(".gow").html(getALLnum());