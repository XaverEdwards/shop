$.ajax({
	type: "get",
	url: "json/data.json",
	async: true,
	success: function(str) {
		Array.from(str.list).forEach(function(obj) {
			/*console.log(obj);*/
			/*限时抢购*/
			if(obj.id > 0 && obj.id < 31) {
				var li = document.createElement("li");
				shop.appendChild(li);
				//li.innerHTML=obj.title;
				/*创建a标记*/
				var xs_a = document.createElement("a");
				li.appendChild(xs_a);
				//访问详情页面并传递数据
				xs_a.href = "details.html?id=" + obj.id;
				xs_a.className = "bg";
				/*div*/
				var div = document.createElement("div");
				xs_a.appendChild(div);
				/*创建图片*/
				var xs_img = document.createElement("img");
				div.appendChild((xs_img));
				xs_img.src = "dataImg/" + obj.pic;

				$(div).mouseover(function() {
					$(xs_img).stop().animate({
						"width": 210,
						"height": 210,
						"left": -50,
						"top": -50
					}, 400);
				}).mouseout(function() {
					$(xs_img).stop().animate({
						"width": 200,
						"height": 200,
						"left": 0,
						"top": 0
					}, 400);
				});
				/*打折*/
				var span = document.createElement("span");
				xs_a.appendChild(span);
				span.innerHTML = obj.dz;
				/*title*/
				var b = document.createElement("b");
				xs_a.appendChild(b);
				b.innerHTML = obj.title;
				/*现价*/
				var font = document.createElement("font");
				xs_a.appendChild(font);
				font.innerHTML = "￥" + obj.now_price;
				/*原价*/
				var s = document.createElement("s");
				font.appendChild(s);
				s.innerHTML = "￥" + obj.origin_price;
				/*立即抢购按钮*/
				var b = document.createElement("b");
				xs_a.appendChild(b);
				b.innerHTML = obj.qg;
				b.className = "qgou";
				$(".qgou").click(function(){
					location.href="details.html";
				})
			}
			/*第一层*/
			if(obj.id >= 31 && obj.id < 36) {
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
			/*第二层*/
			if(obj.id >= 36 && obj.id < 41) {
				/*创建li*/
				var li = document.createElement("li");
				sell2.appendChild(li);
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
			} /*第三层*/
			if(obj.id >= 41 && obj.id < 46) {
				/*创建li*/
				var li = document.createElement("li");
				sell3.appendChild(li);
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
			} /*第四层*/
			if(obj.id >= 46 & obj.id < 51) {
				/*创建li*/
				var li = document.createElement("li");
				sell4.appendChild(li);
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
			} /*第五层*/
			if(obj.id >= 51 && obj.id < 56) {
				/*创建li*/
				var li = document.createElement("li");
				sell5.appendChild(li);
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
		});

		function lun() {
			var ul1 = document.getElementById("shop");
			var lis = ul1.getElementsByTagName("li");
			var prev = document.getElementsByClassName("before")[0];
			var next = document.getElementsByClassName("after")[0];
			var len = lis.length;
			var now = 0;
			Array.from(lis).forEach(function(li, index) {
				now = index;
			});

			function tab() {
				startMove(ul1, {
						"left": -442 * now
					});
				if(now == len) {
					startMove(ul1, {
						"left": -442 * now
					}, function() {
						ul1.style.left = 0 + "px";
					})
					now = 0;
				} else {
					startMove(ul1, {
						"left": -442 * now
					});
				}
			}
			prev.onclick = function() {
				now--;
				if(now == -1) {
					now = 12;
				}
				
				tab();
			}
			next.onclick = function() {
				now++;
				if(now == 12) {
					now=0;
				}
				tab();
			}
		}
		lun();
		
		function lunbo() {
			var ul2 = document.getElementById("xh");
			var lis = ul1.getElementsByTagName("li");
			var prev1 = document.getElementsByClassName("before")[1];
			var next1 = document.getElementsByClassName("after")[1];
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
		
	}
});