/*
 * 运动函数
 * 参数：
 * elem 操作的元素节点
 * obj 操作的元素节点上的css属性和css属性值
 * 		attr 操作的元素节点上的css属性
 * 		target 操作的元素节点上的css属性的目标值
 * fn 运动结束后的所要执行的函数
 */
function startMove(elem, obj, fn){	
	// 开定时器
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		// 假设每一个属性都到达了目标值
		var flag = true;
		// 支持多属性同时运动
		for( var attr in obj ){
			// 目标值
			var target = obj[attr];
			// 获取元素当前值
			var v;
			if( attr == "opacity" ){
				v = getStyle(elem, "opacity");
				v = Math.round(v * 100);
			}else{
				v = parseInt(getStyle(elem, attr));
			}
			//console.log(v);
			// 求目标值与当前值得差
			var dist = target - v;
			// 求步长
			var speed = dist/6;
			if( speed>0 ){
				speed = Math.ceil(speed);	// 向上取整，如果不取整，小数不是有效值，所以有可能无法到达目标值
			}else{
				speed = Math.floor(speed);
			}
			// 更新
			if( attr == "opacity" ){
				elem.style.opacity = (v+speed)/100;
				if(/MSIE/.test(navigator.userAgent)){// 如果浏览器是IE，则执行兼容代码
					elem.style.filter = "alpha(opacity:"+(v+speed)+")";
				}
			}else{
				elem.style[attr] = v+speed+"px";
			}
			// 有某个属性没有达到目标值
			if( v != target ){
				flag = false;			
			}
		}
		// 如果已经到达目标值，则停止定时器
		if( flag ){
			clearInterval(elem.timer);
			// 如果fn存在，则执行
			if( fn ){
				fn();	// 执行函数
			}
		}
	}, 30);
}

/*
 * 获取样式
 */
function getStyle(elem, attr){
	if( window.getComputedStyle ){
		return getComputedStyle(elem, null)[attr];
	}else{
		return elem.currentStyle[attr];
	}
}
