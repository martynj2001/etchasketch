
var grid = 16;
var blockSize;
//var mode = 0; //0 = Origanal, 1 = Snail 2 = RGB Random


$(document).ready(function(){
	
	mode = 0;
	blockSize = 29;
	$('#snal').addClass('grey');
	$('#rgb').addClass('grey');
	createGrid(grid);	
})

function createGrid(gridSize){
	
	var block = "<div class='block'></div>";
	var row = "<div class='row'></div>";
	var $container = $(".container");
	var $row = $('.row');
	
	for (var i = 0; i < gridSize; i++){
		$container.append(row);
	}	
	
	var $row = $('.row');
	
	for (var i = 0; i < gridSize; i++){
		$row.append(block);
		$('.block').css('width', blockSize + 'px');
		$('.block').css('height', blockSize + 'px');

	}	
	
	//Set container size
	gridW = gridSize * (blockSize + 4);
	$container.css('width', gridW +'px');
	
	//Hover Event
	if(mode === 0){
		$('#org').removeClass('grey');
		$('#rgb').addClass('grey');
		$('.block').mouseover(function(){
		$(this).addClass('black');
		});		
	}else{
		$('#org').addClass('grey');
		$('#rgb').removeClass('grey');
		$('.block').mouseover(function(){
		$(this).css('background-color', getRandomColor());
		});
	}
	
}

function resetGrid(){
	
	//clear current grid
	$('.block').removeClass("black");
	$('.row').remove();
	var newGrid = prompt("Enter new grid size (between 1 -100)");
	//Do we need to change block size?
	if(newGrid > 25 ){
		//scale block size to fit 700px container
		blockSize = blockSize/4;
	} else if (newGrid >= 50) {
		blockSize = blockSize/6;
	}else if (newGrid >= 75){
		blockSize = blockSize/8;
	}else {
		blockSize = 29;
	}
	createGrid(newGrid);
	console.log("new grid size: " + newGrid);
}

function toggleMode(){
	
	if(mode === 0)
		mode = 1;
	else
		mode = 0;
		
	resetGrid();
}

//Random color generator
function getRandomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


