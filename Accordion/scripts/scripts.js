

$(document).ready(function(){
	var icons={
		header:"ul-icon-circle-arrow-e",
		headerSelected: "ui-icon-circle-arrow-s"
		};
		$( "#accordion" ).accordion({
			icons: icons
		});
		$( "#toggle" ).button().toggle(function() {
			$( "#accordion" ).accordion( "option", "icons", false );
		}, function() {
			$( "#accordion" ).accordion( "option", "icons", icons );
		});
});


/*
$(document).ready(function(){
	$('#accordion').accordion({
		event:"mouseover",
		collapsible:true
	});
});
*/