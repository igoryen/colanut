document.addEventListener('touchstart', function (event) { event.preventDefault(); }, { passive: true });
$( document ).ready( function(){
	// this is a comment
	/*
		this is a long comment that is used here to just make
		sure that it will be
		stripped by the gulp
		task
	*/
	console.log("scripts1.js is ready! yes dadada");
	// $(".anthony").on("click", function(){
	// 	// declare a variable
	// 	var someverylongvariable = "hello";
	// 	/*
	// 	use the variable
	// 	*/
	// 	alert( someverylongvariable );
	// })
	/* this is also a comment*/

	var owl_options = {
		items:4,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1000,
	    autoplayHoverPause:true,
	    dots: true,
	    responsiveClass:true,
	    responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                // loop:false
            }
        }
	};
	console.log("aaa")



	$("#owl_ex").owlCarousel( owl_options );
});