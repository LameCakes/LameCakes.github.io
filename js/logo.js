$(function(){

	$("#stagenav").load('https://dl.dropboxusercontent.com/u/59393070/portfolio/logo.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){ // Error loading SVG
			$(this).html('Error loading SVG. Be sure you are running from a the http protocol (not locally) and have read <strong><a href="http://tympanus.net/codrops/?p=13831#the-javascript">this important part of the tutorial</a></strong>');
		}

	});
});