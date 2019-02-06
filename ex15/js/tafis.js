$( document ).ready( function(){
	console.log("tafis.js loaded!");
	



    //===========================================
    // function to watch class changes on element
    // used by DARLENE
    (function(){
	    // Your base, I'm in it!
	    var originalAddClassMethod = jQuery.fn.addClass;

	    jQuery.fn.addClass = function(){
	        // Execute the original method.
	        var result = originalAddClassMethod.apply( this, arguments );

	        // trigger a custom event
	        jQuery(this).trigger('cssClassChanged');

	        // return the original result
	        return result;
	    }
	})();
    //===========================================

   	//===========================================
   	// DARLENE
   	tafis1id = "n_darlene"; // tafis = ta(bbed) fi(lm)s(trip)

   	tafis_options = {
		items:1,
	    margin:10,
	    autoHeight:true,
	    // loop: true // when it's on, highlighting tabs doesn't work when clicked
	};
	
    $("#" + tafis1id + " .tafis").owlCarousel(tafis_options);

	$tafis_buttons = $("#" + tafis1id + " .tafis--buttons");	
	$tafis_images = $("#" + tafis1id + " .tafis--images");	
    $tab_pages = $("#" + tafis1id + " .tafis--accordion");


	$("#" + tafis1id + " .tafis .owl-item").bind('cssClassChanged', function(){ 
		// debugger;
		$tafis_frame =$(this).find("div.tafis--frame");

		// $cur_id = 
		// console.log($tafis_frame);
		// var foo = ["itemC","active"];
		// var id = foo.replace(new RegExp(foo.join("|"),""));
		// var $classes = $(this).find("div.itemC").attr("class");
		// var index = $classes.indexOf("group"); console.log( index);

        // group_id = $classes.substring(index, $classes.indexOf(' ', index));

        // v3
        $tafis_frame_classes = $tafis_frame.attr("class");
        $tafis_frame_id = $tafis_frame.attr("id").replace("tafis-frame_", "");
        console.log("$tafis_frame_id: " + $tafis_frame_id);
        $tafis_frame_group_id = $tafis_frame_classes.match(/(\bgroup\S+\b)/ig);


        console.log("in .bind(): $tafis_frame_group_id is " + $tafis_frame_group_id);
        
        $tafis_buttons.find('#'+ $tafis_frame_group_id).addClass("active").siblings().removeClass("active");
        console.log("in .bind(): " + $tafis_buttons.find('#'+ $tafis_frame_group_id).attr("class") );


        // $cur_frame = $(this).find("div.frame.slick-current").attr("id");
        // console.log("current: " + $cur_frame);
        // console.log("in .bind(): $fsframe is " + $fsframe);        
        $tafis_images.find('#tafis-image_'+ $tafis_frame_id).addClass("active").siblings().removeClass("active");

    });


    $tab_pages.find('button').on("click", function(){

        var speed = 'fast';


        if( $(this).hasClass("active")) {
            console.log($(this).attr('id') + " has just opened");
            $(this).removeClass("active");
            $tabcontent = $(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
            // $tabcontent.removeClass("active");
            $tabcontent.slideUp(speed, function(){ $(this).removeClass("active")});

        }
        else {
            console.log($(this).attr('id') + " has just closed");
            $(this).addClass("active").siblings("button").removeClass("active");
            $tabcontent = $(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
            // $tabcontent.addClass("active").siblings("div").removeClass("active");
            $tabcontent.slideDown(speed, function(){$(this).addClass("active")}).siblings("div").slideUp(speed, function(){$(this).removeClass("active")});

        }
        // alert("yes");
        // console.log("yes for mobile");
        // debugger;

        // console.log(('button[id="'+ this.id +'"]'));
        // console.log( $(this));
        // $(this).addClass("active");
        // $(this).css("color", "red");
        // $(this).siblings("button").removeClass("active");
        // $m_tab = $tab_pages.find('button[id="'+ this.id +'"]');
        // // console.log("m id is " + $m_tab.attr("id"));
        // console.log($m_tab);
        // $m_tab.addClass("active");

        // // $('[id^='+ this.id +'_]').css("background-color", "yellow");
        // $m_tab.siblings().removeClass("active")

        //================================
        // console.log((this.id).replace('m_', ''));
        // console.log(('[id^='+ (this.id).replace('m_', '') +'_]'));

        // $tabcontent = $(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
        // // // console.log($tabcontent);
        // $tabcontent.addClass("active");

        // // // $('[id^='+ this.id +'_]').css("background-color", "yellow");
        // $tabcontent.siblings("div").removeClass("active")



    });



    /* 
    	click on the tab
    	move the filmstrip to display the first image in the group
	*/
	$tafis_filmstrip = $("#" + tafis1id + " .tafis").find("div.owl-stage"); 
	// $pages = $("#" + tafis1id + " .tafis").find("div.owl-item");
	$tafis_dots = $("#" + tafis1id + " .tafis").find("div.owl-dots");



	// v1

    $tafis_buttons.find("#group1").on("click", function(){
    	// v1
    	console.log("clicked on " + this.id);
    	// $(this).addClass("active").siblings().removeClass("active");

    	// v2
    	// debugger;
    	if (!$(this).hasClass("active")) {
    		console.log("group1 is NOT active")
    		$(this).addClass("active").siblings("div.owl-item").removeClass("active");
    		// event.stopPropagation();
    	}
    	else {
    		console.log("group1 is ACTIVE");
    		// event.stopPropagation();
    	}

    	
    	
    	$frame = $tafis_filmstrip.children("div.owl-item").first();
    	$frame.addClass("active"); 
    	$frame.siblings("div.owl-item").removeClass("active");

    	$tafis_filmstrip.css("transform", "translate3d(0px,0px,0px)");
    	$tafis_dots.find("button:nth-child(1)").addClass("active").siblings().removeClass("active");
    });

    // $tafis_buttons.find("#group2").on("click", function(){
    // 	console.log("clicked on " + this.id);
    // 	// debugger;
    // 	$(this).addClass("active").siblings().removeClass("active");
    // 	$tafis_filmstrip.find("div:nth-child("+4+")").addClass("active").siblings().removeClass("active");
    // 	$tafis_filmstrip.css({"transform": "translate3d(" + -1824 + "px,0px,0px)", "transition" : "all 0.25s ease 0s"});
    // 	$tafis_dots.find("button:nth-child("+4+")").addClass("active").siblings().removeClass("active");
    // });

    // $tafis_buttons.find("#group3").on("click", function(){
    // 	console.log("clicked on " + this.id);

    // 	$(this).addClass("active").siblings().removeClass("active");
    // 	$tafis_filmstrip.find("div:nth-child("+7+")").addClass("active").siblings().removeClass("active");
    // 	$tafis_filmstrip.css("transform", "translate3d(" + -3648 + "px,0px,0px)");
    // 	$tafis_dots.find("button:nth-child("+7+")").addClass("active").siblings().removeClass("active");
    // });



    // v2
    var ricky = function( ord, offset){
    	console.log("clicked on " + this.id);

    	$(this).addClass("active").siblings().removeClass("active");
    	$tafis_filmstrip.find("div:nth-child("+ord+")").addClass("active").siblings().removeClass("active");
    	$tafis_filmstrip.css("transform", "translate3d("+offset+"px,0px,0px)");
    	$tafis_dots.find("button:nth-child("+ord+")").addClass("active").siblings().removeClass("active");
    };

    $tafis_buttons.find("#group2").on("click", function(){ ricky(4, -1824);}); // 4, -1824
    $tafis_buttons.find("#group3").on("click", function(){ ricky(7, -3648);}); // 7, -3648
	//===========================




});





