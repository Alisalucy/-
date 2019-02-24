// JavaScript Document
window.onload = function(){
	// search搜索栏特效
	searchScroll();
	// 秒杀
	setTime();
	// 轮播图
	banner();
}

function searchScroll(){
	// 1.获取元素
	var search = document.querySelector(".jd-search");
	var banner = document.querySelector('.jd-banner');
	var bannerHeight = banner.offsetHeight;
	// 2.做判断
	window.onscroll = function(){
		// 获取屏幕滚动的高度
		var offsetTop = document.body.scrollTop;		
		var opcity = 0;
		if(offsetTop < bannerHeight){
			opcity = offsetTop / bannerHeight; // 透明度的变化
			search.style.backgroundColor = "rgba(227,62,65,"+opcity+")";
		}
	}
	// 3.改变背景颜色
}

function setTime(){
	// 1.获取元素
	var kill = document.querySelector(".kill-item3").querySelectorAll("span");
	var timer=null;
	// 设置结束时间
	var timerTarget = 96500;
	//console.log(kill) 得到的是一个数组
	// 2.采用定时器
	timer = setInterval(function(){
		timerTarget--
		// 当目标时间<0 时，清除定时器
		if(timerTarget < 0){
			clearInterval(timer);
			return;
		}
		var hour = Math.floor(timerTarget/3600); // 由于除不尽，所以向下取舍
		var minutes = Math.floor(timerTarget%3600/60);
		var second = Math.floor(timerTarget%60);
		//console.log(hour+"时"+minutes+"分"+second+"秒")
		// 把得到的结果填充到span中；
		kill[0].innerHTML = zero(hour);
		kill[1].innerHTML = zero(minutes);
		kill[2].innerHTML = zero(second);
		
		function zero(e){
			return e<10 ? "0"+e : e;
		}
	},1000)
	// 3.清除定时器
}

function banner(){
	//1.获取元素
	var banner = document.querySelector(".jd-banner"); // 获取外面的大盒子
	var imgBox = document.querySelector(".jd-slider"); // 获取里面的ul
	var first = imgBox.querySelector("li:first-of-type"); // 获取第一个li
	var last = imgBox.querySelector("li:last-of-type"); // 获取最后一个li
	imgBox.appendChild(first.cloneNode(true));// 复制第一个li，添加到最后一个li后面
	// insertBefore（需要插入的dom元素，位置）
	imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild)// 把最后一个节点克隆一份，放入第一个子节点前面
	
	//2.设置对应的样式
	var lis = imgBox.children; // 获取所有的li
	//console.log(lis)
	var len = lis.length;  // 获取li的长度
	var bannerW = banner.offsetWidth; // 获取最外面banner大盒子的宽度
	imgBox.style.width = len*bannerW +"px"; // 设置ul的宽度
	for(var i=0; i<len; i++){// 每个li的宽度
		lis[i].style.width = bannerW + "px";
	}
	imgBox.style.left = -bannerW + "px";
	
	window.onresize = function(){// 调节浏览器的大小
		bannerW = banner.offsetWidth; // 获取最外面banner大盒子的宽度
		imgBox.style.width = len*bannerW +"px"; // 设置ul的宽度
		for(var i=0; i<len; i++){// 每个li的宽度
			lis[i].style.width = bannerW + "px";
		}
		imgBox.style.left = -bannerW + "px";
	}
	
	// 自动轮播
	var index = 0;
	var timerid = setInterval(function(){
		index ++;
		imgBox.style.transition = "left .5s ease-in-out"
		imgBox.style.left = -bannerW*index + "px";
		setTimeout(function(){
			if(index == len-1){// 当index > li的长度时，跳转到第一个li
				index = 1;
				imgBox.style.transition = "none"
				imgBox.style.left = -bannerW*index + "px";
			}
		},500)
	},1000)
	
	// 手动轮播
	var startX,targetX,moveX;
	imgBox.addEventListener("touchstart",function(e){
		clearInterval(timerid)
		startX = e.targetTouches[0].clientX;

	});
	imgBox.addEventListener("touchmove",function(e){
		targetX = e.targetTouches[0].clientX;

		moveX = targetX = startX;
		console.log(moveX)
		imgBox.style.transition = "none"
		imgBox.style.left = (-bannerW*index+moveX) + "px";
	});
}













