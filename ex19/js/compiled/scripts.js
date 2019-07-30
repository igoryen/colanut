document.addEventListener('touchstart', function (event) { event.preventDefault(); }, { passive: true });
$( document ).ready( function(){
	console.log("scripts1.js is ready! yes dadada");

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
            }
        }
	};
	console.log("aaa")



	$("#owl_ex").owlCarousel( owl_options );
});
//# sourceMappingURL=scripts.js.map
