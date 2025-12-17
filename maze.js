var alerted =false;
var startClick=false;
var startTime;
var mouseCurser=false;

function start(){
	mouseCurser=true;
	startClick=true;
	startTime=Date.now();
	ondiv=true;
var x= document.getElementsByClassName("boundary");
var i;
for(i=0;i<x.length;i++){
	x[i].style.backgroundColor="#eeeeee";
}
    if(alerted==true) {
		window.alerted=false;
}
}

function end(){

	if(startClick && mouseCurser){
		var elapsedTime=Date.now();
		var timeGap=elapsedTime-startTime;
		var timeGaps=timeGap/parseFloat(1000);
		alert("You finished the maze in "+ timeGaps+"s");

	}
	else if(startClick)
		alert("You can't move your cursor outside of the maze")
	else
		alert()
}

function changeColour(){
startClick=false;

var x= document.getElementsByClassName("boundary");
var y;
for(y=0;y<x.length;y++){
	x[y].style.backgroundColor="red";
}

    if (!window.alerted) {
window.alert("You went over the border");
	window.alerted=true;}
}


function outOfMaze(){
	mouseCurser=false;
}