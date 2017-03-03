$(document).ready(function(){
	console.log('coucou');
	var red=125;
	var green=125;
	var blue=125;

	var Red=125;
	var Green=125;
	var Blue=125;
	$("#red").click(function(){
		$(this).on('change mousemove', function(){
			red = $(this).val();
			$('body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
		});	
	})
	$('#green').click(function(){
		$(this).on('change mousemove', function(){
			green = $(this).val();
			$('body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
		});
	})
	$('#blue').click(function(){
		$(this).on('change mousemove', function(){
			blue = $(this).val();
			$('body').css({'background-color':"rgb(" + red + "," + green + "," + blue + ")"});
		});
	})
	$('#Green').click(function(){
		$(this).on("change mousemove",function(){
			Green = $(this).val();
			$('body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "), rgb(" + red + "," + green + "," + blue + ")"});
		});
	})
	$('#Blue').click(function(){
		$(this).on("change mousemove",function(){
			Blue = $(this).val();
			$('body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "), rgb(" + red + "," + green + "," + blue + ")"});	
		});
	})
	$('#Red').click(function(){
		$(this).on("change mousemove",function(){
			Red = $(this).val();
			$('body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "), rgb(" + red + "," + green + "," + blue + ")"});

		});
	})
});