$(".go").click(function(){
	location.href="car.html";
})
function lunbo() {
			var ul2 = document.getElementById("xh");
			var lis = ul2.getElementsByTagName("li");
			var prev1 = document.getElementsByClassName("before")[0];
			var next1 = document.getElementsByClassName("after")[0];
			var len = lis.length;
			var now = 0;
			Array.from(lis).forEach(function(li, index) {
				now = index;
			});

			function tab() {
				startMove(ul2, {
						"left": -442 * now
					});
				if(now == len) {
					startMove(ul2, {
						"left": -442 * now
					}, function() {
						ul1.style.left = 0 + "px";
					})
					now = 0;
				} else {
					startMove(ul2, {
						"left": -442 * now
					});
				}
			}
			prev1.onclick = function() {
				now--;
				if(now == -1) {
					now = 12;
				}
				
				tab();
			}
			next1.onclick = function() {
				now++;
				if(now == 12) {
					now=0;
				}
				tab();
			}
		}
		lunbo();
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
/*更多收起*/
$("dd>span").click(function(){
	var cla = $(this).attr('class');
	if(cla=="") {
		$(this).addClass('curr');
		$(this).html('收起');
		$(this).parent().animate({"height":"116px"});
		$(this).parent().prev().animate({"height":"116px"});
		
	} else {
		$(this).removeClass('curr');
		$(this).html('更多');
		$(this).parent().animate({"height":"58px"});
		$(this).parent().prev().animate({"height":"58px"});
	}
});
/*选项卡切换*/
$(".filter_list li").click(function(){
		$(".filter_list li").removeClass("act").eq($(this).index()).addClass("act");
		$(".filter>div").hide().eq($(this).index()).show();
	});
/*商品*/
$.ajax({
	type: "get",
	url: "json/data.json",
	async: true,
	success: function(str) {
		//获取商品信息
		var arr = str.list;
		Array.from(str.list).forEach(function(obj) {
			if(obj.id>0&&obj.id<=28) {
				/*创建li*/
				var li = document.createElement("li");
				first.appendChild(li);
				/*创建a标记*/
				var a = document.createElement("a");
				li.appendChild(a);
				//访问详情页面并传递数据
				a.href = "details.html?id=" + obj.id;
				/*创建img标记*/
				var img = document.createElement("img");
				a.appendChild(img);
				img.src = "dataImg/" + obj.pic;
				/*创建b标记*/
				var b = document.createElement("b");
				a.appendChild(b);
				b.innerHTML = obj.title;
				/*创建p标记*/
				var p = document.createElement("p");
				a.appendChild(p);
				p.innerHTML = obj.now_price;
				/*创建s标记*/
				var s = document.createElement("s");
				p.appendChild(s);
				s.innerHTML = obj.origin_price;
				/*创建font标记*/
				var font = document.createElement("font");
				a.appendChild(font);
				font.innerHTML = obj.month_sale+"件";
				}
				
				if(obj.id>29&&obj.id<=40) {
				/*创建li*/
				var li = document.createElement("li");
				first.appendChild(li);
				/*创建a标记*/
				var a = document.createElement("a");
				li.appendChild(a);
				//访问详情页面并传递数据
				a.href = "details.html?id=" + obj.id;
				/*创建img标记*/
				var img = document.createElement("img");
				a.appendChild(img);
				img.src = "dataImg/" + obj.pic;
				/*创建b标记*/
				var b = document.createElement("b");
				a.appendChild(b);
				b.innerHTML = obj.title;
				/*创建p标记*/
				var p = document.createElement("p");
				a.appendChild(p);
				p.innerHTML = obj.now_price;
				/*创建s标记*/
				var s = document.createElement("s");
				p.appendChild(s);
				s.innerHTML = obj.origin_price;
				/*创建font标记*/
				var font = document.createElement("font");
				a.appendChild(font);
				font.innerHTML = obj.month_sale+"件";
				}
				if(obj.id>2&&obj.id<=28) {
				/*创建li*/
				var li = document.createElement("li");
				second.appendChild(li);
				/*创建a标记*/
				var a = document.createElement("a");
				li.appendChild(a);
				//访问详情页面并传递数据
				a.href = "details.html?id=" + obj.id;
				/*创建img标记*/
				var img = document.createElement("img");
				a.appendChild(img);
				img.src = "dataImg/" + obj.pic;
				/*创建b标记*/
				var b = document.createElement("b");
				a.appendChild(b);
				b.innerHTML = obj.title;
				/*创建p标记*/
				var p = document.createElement("p");
				a.appendChild(p);
				p.innerHTML = obj.now_price;
				/*创建s标记*/
				var s = document.createElement("s");
				p.appendChild(s);
				s.innerHTML = obj.origin_price;
				/*创建font标记*/
				var font = document.createElement("font");
				a.appendChild(font);
				font.innerHTML = obj.month_sale+"件";
				}
				/*热销*/
				if(obj.id>=20&&obj.id<=35){
					/*创建li*/
				var li = document.createElement("li");
				third.appendChild(li);
				/*创建a标记*/
				var a = document.createElement("a");
				li.appendChild(a);
				//访问详情页面并传递数据
				a.href = "details.html?id=" + obj.id;
				/*创建img标记*/
				var img = document.createElement("img");
				a.appendChild(img);
				img.src = "dataImg/" + obj.pic;
				/*创建b标记*/
				var b = document.createElement("b");
				a.appendChild(b);
				b.innerHTML = obj.title;
				/*创建p标记*/
				var p = document.createElement("p");
				a.appendChild(p);
				p.innerHTML = obj.now_price;
				/*创建s标记*/
				var s = document.createElement("s");
				p.appendChild(s);
				s.innerHTML = obj.origin_price;
				/*创建font标记*/
				var font = document.createElement("font");
				a.appendChild(font);
				font.innerHTML = obj.month_sale+"件";
			}
				/*热销*/
				if(obj.id>=31&&obj.id<=50){
					/*创建li*/
				var li = document.createElement("li");
				sell1.appendChild(li);
				/*创建a标记*/
				var a = document.createElement("a");
				li.appendChild(a);
				//访问详情页面并传递数据
				a.href = "details.html?id=" + obj.id;
				/*创建i标记*/
				var i = document.createElement("i");
				a.appendChild(i);
				i.innerHTML = obj.rx;
				/*创建img标记*/
				var img = document.createElement("img");
				a.appendChild(img);
				img.src = "dataImg/" + obj.pic;
				/*创建b标记*/
				var b = document.createElement("b");
				a.appendChild(b);
				b.innerHTML = obj.title;
				/*创建em标记*/
				var em = document.createElement("em");
				a.appendChild(em);
				em.innerHTML = "￥" + obj.now_price;
			}
				/*猜你喜欢*/
				if(obj.id >= 56 && obj.id < 75) {
				var li = document.createElement("li");
				xh.appendChild(li);
				/*创建a标记*/
				var a = document.createElement("a");
				li.appendChild(a);
				//访问详情页面并传递数据
				a.href = "details.html?id=" + obj.id;
				/*div*/
				var div = document.createElement("div");
				a.appendChild(div);
				/*创建图片*/
				var img = document.createElement("img");
				div.appendChild((img));
				img.src = "dataImg/" + obj.pic;
				$(div).mouseover(function() {
					$(img).stop().animate({
						"width": 200,
						"height": 200,
						"left": -50,
						"top": -50
					}, 400);
				}).mouseout(function() {
					$(img).stop().animate({
						"width": 190,
						"height": 190,
						"left": 0,
						"top": 0
					}, 400);
				});
				/*title*/
				var b = document.createElement("b");
				a.appendChild(b);
				b.innerHTML = obj.title;
				/*现价*/
				var font = document.createElement("font");
				a.appendChild(font);
				font.innerHTML = "￥" + obj.now_price;
				/*原价*/
				var del = document.createElement("delete");
				font.appendChild(del);
				del.innerHTML = "￥" + obj.origin_price;
			}
			/*选项卡*/
			
		});
	}
});
	
