$(".go").click(function() {
		location.href = "car.html";
	})
	/*左边导航*/
$("#fl").mouseenter(function() {
	($("#ul1")).stop().show();
});
$("#fl1").mouseleave(function() {
	($("#ul1")).stop().hide();
});
$("#fl").mouseenter(function() {
	($("#fl")).css({
		"background": "none"
	})
});
$("#fl").mouseleave(function() {
	($("#fl")).css({
		"background": "url(img/nav_b_bg.jpg) no-repeat 160px center"
	})
});
$("#ul1").mouseenter(function() {
	($("#fl")).css({
		"background": "none"
	})
});
$("#ul1").mouseleave(function() {
	($("#fl")).css({
		"background": "url(img/nav_b_bg.jpg) no-repeat 160px center"
	})
});
/*规格参数选项卡切换*/
$("#xq").bind("click", function() {
	$(".img").show();
	$(".table").hide();
	$(this).addClass("active");
	$("#cs").removeClass("active");
});
$("#cs").bind("click", function() {
	$(".table").show();
	$(".img").hide();
	$(this).addClass("active");
	$("#xq").removeClass("active");
});
//获取url中的参数
var id = getUrl("id");
function getUrl(names) {
	var str = location.search;
	if(str != "") {
		str = str.slice(1); //将占位符？去掉
		var arr = str.split("&"); //如果传递的是多个参数的话，是用&隔开的，所以此时对字符串进行转换
		for(var i = 0, l = arr.length; i < l; i++) {
			var col = arr[i].split("=");
			if(col[0] == names) {
				return col[1];
			}
		}
		return ""; //不写会返回undefined
	} else {
		return "";
	}
}
/*获取商品*/
$.ajax({
	type: "get",
	url: "json/data.json",
	async: true,
	success: function(str) {
		//获取商品信息
		var arr = str.list;
		$.each(arr, function(i, obj) {
			if(id == obj.id) {
				var o = getCookie("g" + obj.id);
				if(o) {
					obj.num = Number(o.num) + 1;
				} else {
					obj.num = 1;
				}
				gow.innerHTML = getALLnum();
				$("#num").val(obj.num);
				if(obj.xg) {
					$("#xiangou").html(obj.xg);
				}

				/*创建图片*/
				var img1 = $("<img src='dataImg/" + obj.pic + "'>");
				$("#big").append(img1);
				var img2 = $("<img src='dataImg/" + obj.pic + "'>");
				$("#bigger").append(img2);

				$(".goods_right h3").html(obj.title);
				$(".np").html("￥" + obj.now_price);
				$(".yp").html("￥" + obj.origin_price);
				$(".num span").html(obj.number);
				$(".shou span").html(obj.month_sale + "件");
				/*参数*/
				$(".tables .bm span").html(obj.number);
				/*小图片列表*/

				for(var i = 0, l = obj.imgs.length; i < l; i++) {
					var li = $("<li></li>");
					var imgs = $("<img src='dataImg/" + obj.imgs[i] + "'>");
					li.append(imgs);
					$("#goods_s").append(li);
					li.click(function() {
						var ind = $(this).index();
						img1.attr({
							"src": "dataImg/" + obj.imgs[ind]
						});
						img2.attr({
							"src": "dataImg/" + obj.imgs[ind]
						});
					});
				}

				/*加减操作*/
				$(".jia").click(function() {
					obj.num += 1;
					if(obj.xg) {
						if(obj.num >= obj.xg) {
							obj.num = Number(obj.xg);
						}
					}

					var t = $(this).parent().find('#num');
					t.val(obj.num);
					//gow.innerHTML = getALLnum();
					setCookie("g" + obj.id, obj, 7);
				})
				$(".jian").click(function() {
					obj.num -= 1;
					if(obj.num < 0) {
						obj.num = 0;
					}
					var t = $(this).parent().find('#num');
					t.val(obj.num)

					//gow.innerHTML = getALLnum();
					setCookie("g" + obj.id, obj, 7);
				})
				$(".number span i").html(obj.xg);

				/*加入购物车*/
				$("#car").click(function() {
					setCookie("g" + obj.id, obj, 7);
					gow.innerHTML = getALLnum();

				});
				/*创建购物车图片*/
				/*if($(".gow").val()==0){
					$(".gwcar b").html("购物车中没有商品赶紧去选购吧");
					$(".gwcar").css({"background-image":"url(img/car.png)"});
				}else{
					showCart();
					function showCart(){
						var num=getGoodsCookies(function(_name,obj){
							$(".gwcar b").remove();
							$(".gwcar").css({"background-image":"none"});
						});
						$("#go_cart i").html(num);
					}
				}
				*/

				/*放大镜*/
				changeBig();

				function changeBig() {
					$("#big").mousemove(function(e) {
						e = e || $(window).event;
						var x = e.clientX - $("#big").offset().left - $("#glass").width() / 2;
						var y = e.clientY - $("#big").offset().top - $(window).scrollTop() - $("#glass").width() / 2;
						//边界检测
						var w = $("#big").width() - $("#glass").width();
						var h = $("#big").height() - $("#glass").height();
						if(x < 0) x = 0;
						if(y < 0) y = 0;
						if(x > w) x = w;
						if(y > h) y = h;
						$("#glass").css({
							"left": x,
							"top": y
						});
						$("#bigger img").css({
							"left": -x * 2,
							"top": -y * 2
						});
					}).mouseenter(function() {
						$("#glass").stop().show();
						$("#bigger").stop().show();
					}).mouseleave(function() {
						$("#glass").stop().hide();
						$("#bigger").stop().hide();
					});
					/*规格*/
					for(var i = 0, l = obj.pics.length; i < l; i++) {
						var pics = $("<img src='dataImg/" + obj.pics[i] + "'>");
						$("#tu").append(pics);

					}

				}

				function getALLnum() {
					var num = getGoodsCookies(function(_name, obj) {});
					return num;
				}
			}

		});
	}
});