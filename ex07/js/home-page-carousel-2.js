$(document).ready(function(){
	$(".owl-carousel").owlCarousel({

		loop: "true",
		autoplay: "true",
		autoplayTimeout: 10000,

		animateOut: 'slideOutLeft',
		animateIn: 'slideInRight',
		items:1,
		// margin:30,
		// stagePadding:30,
		smartSpeed: 450
	});

	jQuery("#n_randy .owl-carousel").on("translated.owl.carousel", function(){
		// console.log(jQuery(this).find("div.owl-item.active").find("div.tafis--frame").attr("id"));
		var $text = jQuery(this).find("div.owl-item.active").find("div.text");
		$text.fadeIn();
		// $tafis03_buttons.find("button[id*='"+ $tafis03_btn_num +"']").addClass("active").siblings().removeClass("active");
		// $(this).attr("id");
		console.log("x");

	} );
});
