$(document).ready(function(){
	$('#conversation').keyup(function(e){
		if(e.which === 13){
			var text = $(this).val();
			alert(text);
		}
	});
});