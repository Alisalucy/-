// JavaScript Document

	
	$(function(){
		//初始化
		var size=$(".tupian li").length;
		for(var i=0; i<size; i++){
			$(".yuan").append("<li></li>")
		}
		$(".tupian li").eq(0).show();
		$(".yuan li").eq(0).addClass("on");
		
		//yuan圆点居中对齐  outerwidth是元素的内外间距总长度
		var numwidth=$(".yuan").outerWidth()/2;
		$(".yuan").css("margin-left",-numwidth)

		
		//手动播放
		$(".yuan li").mouseover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			
			ind=$(this).index();
			i=ind;
			$(".tupian li").eq(ind).fadeIn().siblings().fadeOut();
		})
		
		//自动播放器
		var i=0
		var t=setInterval(move,2000)
		
		//当鼠标移入时，停止播放
		$(".box").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(move,2000)
		})
		
		//左达按钮点击
		$(".btnleft").click(function(){
			moveleft();
		})
		
		//右边按钮点击
		$(".btnright").click(function(){
			move();
		})
		
		
		//左自动播放函数
		function moveleft(){
			i--;
			if(i==-1){
				i=size-1
			}
			$(".tupian li").eq(i).fadeIn().siblings().fadeOut();
			$(".yuan li").eq(i).addClass("on").siblings().removeClass("on");
		}
		
		//右自动播放函数
		function move(){
			i++;
			if(i>=size){
				i=0;
			}
			$(".tupian li").eq(i).fadeIn().siblings().fadeOut();
			$(".yuan li").eq(i).addClass("on").siblings().removeClass("on");
		}
		
		
	})
	