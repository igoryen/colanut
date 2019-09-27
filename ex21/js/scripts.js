$( document ).ready( function(){

	$("body div").not(".kristen, .lloyd").addClass( "colorless" );
	var $toggle = $("#color_toggle").find("input[type='radio']");
	$toggle.on( 'click', function(){
		if( $(this).val() == 0) {
			$("body div").not(".kristen, .lloyd").addClass( "colorless" );
			// console.log("0");
		}
		else {
			$("body div").not(".kristen, .lloyd").removeClass( "colorless" );	
			// console.log("0");
			
		}
	});
	// this is a comment
	/*
		this is a long comment that is used here to just make
		sure that it will be
		stripped by the gulp
		task
	*/
	console.log("scripts1.js is ready! yes dadada");
	$(".anthony").on("click", function(){
		// declare a variable
		var someverylongvariable = "hello";
		/*
		use the variable
		*/
		alert( someverylongvariable );
	})
	/* this is also a comment*/


});