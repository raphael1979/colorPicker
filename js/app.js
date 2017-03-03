$(document).ready(function(){
	console.log('coucou');
	var red=100;
	var green=100;
	var blue=100;

	var Red=100;
	var Green=100;
	var Blue=100;

	$('#red').on('change mousemove', function(){
		red = $(this).val();
		$('body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
	});
	$('#green').on('change mousemove', function(){
		green = $(this).val();
		$('body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
	});
	$('#blue').on('change mousemove', function(){
		blue = $(this).val();
		$('body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
	});

	$('#Green').on("change mousemove",function(){
		Green = $(this).val();
		$('body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "), rgb(" + red + "," + green + "," + blue + ")"});
		console.log($(this).val());
	})
});