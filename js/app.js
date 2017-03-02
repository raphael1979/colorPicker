$(document).ready(function(){
	console.log('coucou');
	var red=100;
	var green=100;
	var blue=100;
	$('#red').on('change mousemove', function(){
		red = $(this).val();
		$('#body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
	});
	$('#green').on('change mousemove', function(){
		green = $(this).val();
		$('#body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
	});
	$('#blue').on('change mousemove', function(){
		blue = $(this).val();
		$('#body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
	});
});



// var red = $("#red").val();
// var green = $("#green").val();
// var blue = $("#blue").val();
// document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")";