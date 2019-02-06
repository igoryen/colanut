$( document ).ready( function(){
	console.log("scripts1.js is ready! yes dadada");
	$(".anthony").on("click", function(){
		var someverylongvariable = "hello";
		alert( someverylongvariable );
	})



	owl_options = {
		items:1,
	    margin:10,
	    loop: true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    autoplayHoverPause: true
	};

	$("#owl-example1").owlCarousel(owl_options);
	$("#owl-example2").owlCarousel(owl_options);
	$("#owl-example3").owlCarousel(owl_options);

});
//# sourceMappingURL=scripts.js.map
