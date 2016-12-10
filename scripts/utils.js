var addY=false;
var addX=true;
function move(e){	
	e = e || window.event;			
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
	console.log("called")		
		y = y+(2*blockHeight);
	}
	if(e.keyCode == '38' && y+h < height-50){						
		obj[0].orientation();		
	}

}

function changeOrientation(){
	
}