var addY=false;
var addX=true;
function move(e){	
	e = e || window.event;		
	console.log(x+(baseColumn*20)+objWidth)
	console.log(e.keyCode)
	var endX = x+(baseColumn*20)+objWidth;
	var startX = x+(baseColumn*20);
	if(e.keyCode == '39' && endX<width){		
		x += 20;
	}
	if(e.keyCode == '37' && startX>0){		
		x = x-20
	}
	if(e.keyCode == '40' && y+h < height-50){		
		y = y+50;
	}

}

function changeOrientation(){
	
}