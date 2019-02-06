    "use strict";
    jQuery( document ).ready( function(){
        // console.log("tafis_home_page.js loaded!");
        
        // debugger;


        //===========================================
        // DARLENE
        var tafis1id = "tafis_home_page_container"; // tafis = ta(bbed) fi(lm)s(trip)
        var item_margin = 10;
        var tafis_options = {
            items:1,
            margin: item_margin,
            // autoHeight:true,
            // loop: true // when it's on, highlighting tabs doesn't work when clicked
            responsiveBaseElement: '#tafis_area',
            
        };
        // console.log("owlCarousel - 1");

        var owl_home = jQuery("#" + tafis1id + " .tafis");
        owl_home.owlCarousel(tafis_options);




        var $tafis_buttons = jQuery("#" + tafis1id + " .tafis--buttons");   
        var $tafis_images =  jQuery("#" + tafis1id + " .tafis--images");    
        var $tab_pages =     jQuery("#" + tafis1id + " .tafis--accordion");



        jQuery("#" + tafis1id + " .owl-carousel").on("translated.owl.carousel", function(){
            // console.log(jQuery(this).find("div.owl-item.active").find("div.tafis--frame").attr("id"));
            var $btn_num = jQuery(this).find("div.owl-item.active").find("div.tafis--frame").attr("id").slice(-1);
            $tafis_buttons.find("button[id*='"+ $btn_num +"']").addClass("active").siblings().removeClass("active");
            // $(this).attr("id");

        } );






        //-----------------------------------


        // for the accordion
        $tab_pages.find('button').on("click", function(){

            var speed = 'fast';


            if( jQuery(this).hasClass("active")) {
                console.log(jQuery(this).attr('id') + " has just opened");
                jQuery(this).removeClass("active");
                var $tabcontent = jQuery(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
                // $tabcontent.removeClass("active");
                $tabcontent.slideUp(speed, function(){ jQuery(this).removeClass("active")});

            }
            else {
                console.log(jQuery(this).attr('id') + " has just closed");
                jQuery(this).addClass("active").siblings("button").removeClass("active");
                var $tabcontent = jQuery(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
                // $tabcontent.addClass("active").siblings("div").removeClass("active");
                $tabcontent.slideDown(speed, function(){jQuery(this).addClass("active")}).siblings("div").slideUp(speed, function(){jQuery(this).removeClass("active")});

            }
            

        });



        /* 
            click on the tab
            move the filmstrip to display the first image in the group
        */
        var $tafis_filmstrip = jQuery("#" + tafis1id + " .tafis").find("div.owl-stage"); 
        // $pages = jQuery("#" + tafis1id + " .tafis").find("div.owl-item");
        var $tafis_dots = jQuery("#" + tafis1id + " .tafis").find("div.owl-dots");




        // v2
        var ricky = function( ordinal, offset){
            console.log("clicked on group " + $(this).attr("id"));

            jQuery("#" + $(this).attr("id")).addClass("active").siblings().removeClass("active");
            $tafis_filmstrip.find("div:nth-child("+ordinal+")").addClass("active").siblings().removeClass("active");
            $tafis_filmstrip.css({
                "transform": "translate3d("+offset+"px,0px,0px)",
                "transition": "all .5s ease 0s"
            });
            $tafis_dots.find("button:nth-child("+ordinal+")").addClass("active").siblings().removeClass("active");

            // event.stopPropagation();
        };

        // version 1
        // $tafis_buttons.find("#group2").on("click", function(){ ricky(4, -1824);}); // 4, -1824
        // $tafis_buttons.find("#group3").on("click", function(){ ricky(7, -3648);}); // 7, -3648

        // version 2
        var $elt_width =  jQuery("#" + tafis1id + " .owl-item").width();
        console.log("tafis width: " + (0 - $elt_width));

        $tafis_buttons.find("#group1").on("click", function(event){ ricky(1, 0);}); // 4, -1824
        $tafis_buttons.find("#group2").on("click", function(event){ ricky(2, 0 - ( ($elt_width*1) + (item_margin*1)));}); // 7, -3648
        $tafis_buttons.find("#group3").on("click", function(event){ ricky(3, 0 - ( ($elt_width*2) + (item_margin*2)));}); // 7, -3648
        $tafis_buttons.find("#group4").on("click", function(event){ ricky(4, 0 - ( ($elt_width*3) + (item_margin*3)));}); // 7, -3648


        //===========================

        // console.log("tafis_home.js L:208!");



    });