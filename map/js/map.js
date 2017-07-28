document.write("<script language=javascript src='jquery-3.1.1.min.js'></script>");
var scale = 5;//初始化缩放比例
var isClick = 0;//判断用户是否点击地图上的元素
var coordX_c = null;//初始化被点击元素的横坐标,作为该元素被点击的标识符
function getCoord(event){
	var Abscissa  = event.offsetX;
	var Ordinate = event.offsetY;
	coord = {x:Abscissa, y:Ordinate};
	return coord;
}
function drag(e){
	var distX = 0;
	var distY = 0;
	e.mousedown(function(ev){
		var oEvent = ev||event;
		distX = oEvent.pageX - e.offset().left;
		distY = oEvent.pageY - e.offset().top;
		oEvent.preventDefault();
		$(document).mousemove(function(ev){
			var marLeft = parseInt($(".map").css("margin-left"));
			var imgLeft = parseInt(e.offset().left);
			var imgTop = parseInt(e.offset().top);
			var winWidth = parseInt($(window).width());
			var winHeight = parseInt($(window).height());
			var oEvent = ev||event;
			var x = oEvent.pageX - distX - marLeft;
			var y = oEvent.pageY - distY;
			if(x > 680){
				x = 680;
			}
			if(y > 0){
				y =0;
			}
			e.css({
				'left':x+'px',
				'top':y+'px'
			})
			$(".coords").text(x+','+y+','+e.offset().left+',');
			oEvent.preventDefault();
		})
		$(document).mouseup(function(){
			$(document).off('mousemove');
		})
	})
}
function zoom(e){
	$(document).on("mousewheel DOMMouseScroll", function (ev) {
		var oEvent = ev||event;
	    var delta = (oEvent.originalEvent.wheelDelta && (oEvent.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	                (oEvent.originalEvent.detail && (oEvent.originalEvent.detail > 0 ? -1 : 1));              // firefox
	    var wd = parseInt(e.css("width"));
	    var marLeft = parseInt(e.css("margin-left"));
	    if (delta > 0&&scale <= 9) {
	        // 向上滚
	        scale++;
	        e.width(wd+200);
	        e.css("margin-left",marLeft-100);
	    }
	    if (delta < 0&&scale >= 1) {
	        // 向下滚
	        scale--; 
	        e.width(wd-200);
	        e.css("margin-left",marLeft+100);
	    }
	})
}
function addDetails(region, positionE, boxE, regionWidth){
	region.click(function(){
		var coords = $(this).attr("coords");
		var nameE = $(this).attr("name");
		var coordList = coords.split(",");
		var coordX = coordList[0];
		var coordY = coordList[1];
		var radius = coordList[2];
		var boxLeft = 0;
		var boxTop = 0;
		var content = null;
		var img = null;
		var wordsHeight = 0;
		if(!isClick){
			isClick = 1;
			coordX_c = coordX;
			positionE.after(function(){
				return "<div id=\"box\"><div class=\"content\"></div><div class=\"footer\"><div class=\"triangle\"></div></div></div>";
			})
		}else{
			if(coordX == coordX_c){
				return 0;
			}else{
				$("#box").remove();
				coordX_c = coordX;
				positionE.after(function(){
				    return "<div id=\"box\"><div class=\"content\"></div><div class=\"footer\"><div class=\"triangle\"></div></div></div>";
				})
			}
		}
		$.ajax({
			type:"post",
			url:"getMessage.php",
			data:{name:nameE},
			dataType:"json",
			success: function(returnValue){
				wordsHeight = returnValue.height;
				content = returnValue.text;
				img = returnValue.img;
				boxLeft = Number(coordX) + Number(positionE.offset().left) - Number(regionWidth)/2 - radius;
				boxTop = Number(coordY) + Number(positionE.offset().top) - wordsHeight - radius - 8;
				$("#box .content").css("height",wordsHeight);
				$("#box .content").append(content);
				$("#box").css({
					"width":regionWidth,
					"left":boxLeft,
					"top":boxTop
				});
			},
			error: function(msg){
				alert("请求出错");
			}
		})
	})
	positionE.click(function(){
		if(isClick){
			$("#box").remove();
			isClick = 0;
		}else{
			return 0;
		}
	})
}
