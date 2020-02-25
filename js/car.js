//在cookie中查找购物车中商品的cookie
function getgoods() {
	var str = document.cookie;
	str = decodeURIComponent(str);
	var reg = /^g\d+$/;
	var arr = str.split("; ");
	var len = arr.length;
	var arr1 = [];
	for(var i = 0; i < len; i++) {
		var col = arr[i].split("=");
		if(col[0].match(reg)) {
			var obj = JSON.parse(col[1]);
			arr1.push(obj.tmp);
		}
	}
	return arr1;
}
//获得总钱数
function getALL_price() {
	var pri = [];
	var arr1 = getgoods();
	Array.from(arr1).forEach(function(obj) {
		var p = obj.now_price * obj.num;
		pri.push(p);
	});
	var all_price = 0;
	for(var i = 0, l = pri.length; i < l; i++) {
		all_price += pri[i];
	}
	return all_price;
}

$(".go").click(function() {
		location.href = "car.html";
});
	/*判断购物车中是否有商品*/
if($(".gow").html() == 0) {
	$(".box").show();
	$(".gw_car").hide();
	$(".zj").hide();
} else {
	$(".gw_car").show();
	$(".zj").show();
	$(".box").hide();
}
$("#sy").click(function() {
		location.href = "index.html";
	})

	/*商品操作*/
btn.onclick = function() {
	if(confirm("您确定要删除该商品吗")) {
		/*var arr = document.getElementsByClassName("cb");*/
		var arr = document.querySelectorAll("tbody input[type='checkbox']");
		for(var i = 0, l = arr.length; i < l; i++) {
			if(arr[i].checked) {
				var id = arr[i].value;
				//删除行
				tbody1.removeChild(document.getElementById("tr" + id));
				//删除cookie
				setCookie("g" + id, "", -1);
				location.reload();
			}
		}
	}

};
	/*添加购物车内容*/
getGoodsCookies(function(_name, obj) {
	//console.log(obj);
	$(".fk").html("应付款:" + (getALL_price()).toFixed(2));
	$("#sp").html(getALLnum());
	//生成行
	var tr = document.createElement("tr");
	tbody1.appendChild(tr);
	tr.id = "tr" + obj.id;
	//生成列
	//编号
	var td1 = document.createElement("td");
	tr.appendChild(td1);
	var check = document.createElement("input");
	td1.appendChild(check);
	check.type = "checkbox";
	check.checked = "checked";
	check.value = obj.id;
	//		check.className = "cb";
	//图片
	var td2 = document.createElement("td");
	tr.appendChild(td2);
	td2.innerHTML = "<img src='dataImg/" + obj.pic + "'>";
	/*td2.onclick=function(){
		location.href="details.html";
	}*/
	//名称
	var td3 = document.createElement("td");
	tr.appendChild(td3);
	td3.innerHTML = obj.title;
	//单价
	var td4 = document.createElement("td");
	tr.appendChild(td4);
	td4.innerHTML = obj.now_price;
	td4.className = "dj";
	//数量
	var td5 = document.createElement("td");
	tr.appendChild(td5);
	//td5.innerHTML=obj.num;
	//减号
	var input1 = document.createElement("input");
	td5.appendChild(input1);
	input1.type = "button";
	input1.value = "-";
	input1.style.width = "20" + "px";
	input1.style.background = "#FFFFFF";
	input1.style.outline = "none";
	input1.onclick = function() {
			obj.num = obj.num - 1;
			if(obj.num < 1) {
				//删除行
				tbody1.removeChild(tr);
				$(".gow").html(getALLnum() - 1);
				//删除cookie
				setCookie("g" + obj.id, "", -1);

			} else {
				$(".gow").html(getALLnum() - 1);
				setNum(input2, obj, td6);
			}
		}
		//输入框
	var input2 = document.createElement("input");
	td5.appendChild(input2);
	input2.type = "text";
	input2.value = obj.num;
	input2.style.width = "30" + "px";
	input2.onblur = function() {
			if(/^\d+$/.test(this.value)) {
				obj.num = Number(this.value);
				setNum(input2, obj, td6);
				$(".gow").html(getALLnum());
			} else {
				this.value = obj.num;
			}
		}
		//加号
	var input3 = document.createElement("input");
	td5.appendChild(input3);
	input3.type = "button";
	input3.value = "+";
	input3.style.width = "20" + "px";
	input3.style.background = "#FFFFFF";
	input3.onclick = function() {
			obj.num = obj.num + 1;
			$(".gow").html(getALLnum() + 1);
			setNum(input2, obj, td6);
		}
		//总价
	var td6 = document.createElement("td");
	tr.appendChild(td6);
	td6.innerHTML = "￥<i>" + parseInt(obj.num * obj.now_price)+"</i>";
	td6.className = "zj1";
	//操作
	var td7 = document.createElement("td");
	tr.appendChild(td7);
	td7.innerHTML = "";
	var a = document.createElement("a");
	td7.appendChild(a);
	a.innerHTML = "删除";
	a.onclick = function() {
		if(confirm("您确定要删除该商品吗")) {
			//删除行
			tbody1.removeChild(tr);
			$(".gow").html(getALLnum());
			//删除cookie
			setCookie("g" + obj.id, "", -1);
		}

	}
})

function setNum(input2, obj, td6, ) {
	//输入框的更新
	input2.value = obj.num;
	//cookie的更新
	setCookie("g" + obj.id, obj, 10);
	//总价的更新
	td6.innerHTML = "￥" + parseInt(obj.num * obj.now_price);
	allPrice();

}

function getALLnum() {
	var num = getGoodsCookies(function(_name, obj) {});
	return num;
}
$(".gow").html(getALLnum());

//全选
cb1.onclick = function() {
		var v = this.checked; //当前复选框的值
		/*var arr = document.getElementsByClassName("cb");*/
		var arr = document.querySelectorAll("tbody input[type='checkbox']");
		for(var i = 0, l = arr.length; i < l; i++) {
			arr[i].checked = v;
		}
		if(v==false){
			$(".fk").html("应付款:0.00");
			$("#sp").html("0");
		}else{
			$(".fk").html("应付款:" + (getALL_price()).toFixed(2));
			$("#sp").html(getALLnum());
		}
	}

//取消全选
$.each($("tbody input[type='checkbox']"), function(i,elem) {
		$(elem).click(function(){
			var v=$(this).is(":checked");
			if(v==false){
				//取消全选
				$("#cb1")[0].checked=false;			
			}else{
				$.each($("#tbody1 input[type='checkbox']"), function(i,elem) {
					$("#cb1")[0].checked=elem.checked;
				});
			}
			//获取选中的数据
			allPrice();
		});
});
//判断选中总价格
function  allPrice(){
	var p=0,p1=0;
	$.each($("tbody input[type='checkbox']"), function(i,elem) {
		if(elem.checked){
			var arr1 = getgoods();
			Array.from(arr1).forEach(function(obj) {
				if(elem.value==obj.id){
					p+=obj.now_price * obj.num;
					p1+=obj.num;
				}
			});
		}
	});
	$(".fk").html("应付款:" + (p).toFixed(2));
	$("#sp").html(p1);
}
