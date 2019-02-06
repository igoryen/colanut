$( document ).ready( function(){
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




	$("#owl-example1").owlCarousel();
    $("#owl-example2").owlCarousel();
    $("#owl-example3").owlCarousel();
});