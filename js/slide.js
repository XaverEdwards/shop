function slide(elem,num){
	var a = elem.children;
	var ul = a[0];
	var ol = a[1];
	var ulli = Array.from(ul.children);
	var olli = Array.from(ol.children);
	var p1 = a[2];
	var p2 = a[3];
	
	olli.forEach(function(li,index){
		li.onclick = function(){
			now = index;
			tab();
		}
	});
	var now = 0;
	tab();
	
	function tab(){
		olli.forEach(function(li,index){
			li.className = "";
			startMove(ulli[index],{"opacity":0},function(){
				ulli[index].style.display = "none";
			});
		});
		olli[now].className = "selected";
		ulli[now].style.display = "block";
		startMove(ulli[now],{"opacity":100});
	}
	function next(){
		now++;
		if(now==num){
			now = 0;
		}
		tab();
	}
	
	p1.onclick = function(){
		now--;
		if(now==-1){
			now=num-1;
		}
		tab();
	}
	p2.onclick = function(){
		now++;
		if(now==num){
			now=0;
		}
		tab();
	}
	var timer = setInterval(next,2000);
	elem.onmouseover = function(){
		clearInterval(timer);
	}
	elem.onmouseout = function(){
		timer = setInterval(next,2000);
	}
}
