var addY=false;
var addX=true;
function move(e){	
	e = e || window.event;		
	if(e.keyCode == '39' && x+w<width){		
		x += 10;
	}
	if(e.keyCode == '37' && x>0){		
		x = x-10
	}
	if(e.keyCode == '40' && y+h < height-50){		
		y = y+50;
	}

}

function changeOrientation(){
	
}