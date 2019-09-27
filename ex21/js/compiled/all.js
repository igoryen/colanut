$( document ).ready( function(){

	$("body div").not(".kristen, .lloyd").addClass( "colorless" );
	var $toggle = $("#color_toggle").find("input[type='radio']");
	$toggle.on( 'click', function(){
		if( $(this).val() == 0) {
			$("body div").not(".kristen, .lloyd").addClass( "colorless" );
		}
		else {
			$("body div").not(".kristen, .lloyd").removeClass( "colorless" );	

					}
	});
	console.log("scripts1.js is ready! yes dadada");
	$(".anthony").on("click", function(){
		var someverylongvariable = "hello";
		alert( someverylongvariable );
	})


});
//# sourceMappingURL=all.js.map
