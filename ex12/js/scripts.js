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



	owl_options = {
		items:1,
	    margin:10,
	    // autoHeight:true
	    loop: true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    autoplayHoverPause: true
	};

	$("#owl-example1").owlCarousel(owl_options);
	$("#owl-example2").owlCarousel(owl_options);
	$("#owl-example3").owlCarousel(owl_options);

});