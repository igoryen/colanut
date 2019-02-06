    "use strict";
    jQuery( document ).ready( function(){
        // console.log("tafis_about_page.js loaded!");
        
        // debugger;


        //===========================================
        // DARLENE
        var tafis03 = "tafis_about_page_container"; // tafis = ta(bbed) fi(lm)s(trip)
        var tafis03_rightmargin = 30;

        var tafis03_options = {
            items:1,
            margin: tafis03_rightmargin,
            autoHeight:true,
            dots: false,
            // loop: true // when it's on, highlighting tabs doesn't work when clicked
            // responsiveBaseElement: '#tafis_area',
            
            
        };
        // console.log("owlCarousel - 1");

        var owl_abt = jQuery("#" + tafis03 + " .tafis");
        owl_abt.owlCarousel(tafis03_options);

        // horizontal scroll using the mousewheel
        owl_abt.on('mousewheel', ".owl-stage", function (e) {
            if (e.deltaY>0) {
                owl_abt.trigger('next.owl');
            } else {
                owl_abt.trigger('prev.owl');
            }
            e.preventDefault();
        });


        var $tafis03_buttons = jQuery("#" + tafis03 + " .tafis--buttons");   



        jQuery("#" + tafis03 + " .owl-carousel").on("translated.owl.carousel", function(){
            // console.log(jQuery(this).find("div.owl-item.active").find("div.tafis--frame").attr("id"));
            var $tafis03_btn_num = jQuery(this).find("div.owl-item.active").find("div.tafis--frame").attr("id").slice(-1);
            $tafis03_buttons.find("button[id*='"+ $tafis03_btn_num +"']").addClass("active").siblings().removeClass("active");
            // $(this).attr("id");

        } );


        //-----------------------------------



        /* 
            click on the tab
            move the filmstrip to display the first image in the group
        */
        var $tafis03_filmstrip = jQuery("#" + tafis03 + " .tafis").find("div.owl-stage"); 
        // $pages = jQuery("#" + tafis03 + " .tafis").find("div.owl-item");
        var $tafis03_dots = jQuery("#" + tafis03 + " .tafis").find("div.owl-dots");


       
        // v2
        var $tafis03_btn_ctrl = function( ordinal, offset){
            // console.log("clicked on group " + $(this).attr("id") + "; offset: " + offset);

            jQuery("#" + $(this).attr("id")).addClass("active").siblings().removeClass("active");
            $tafis03_filmstrip.find("div:nth-child("+ordinal+")").addClass("active").siblings().removeClass("active");
            $tafis03_filmstrip.css({
                "transform": "translate3d("+offset+"px,0px,0px)",
                "transition": "all .5s ease 0s"
            });
            $tafis03_dots.find("button:nth-child("+ordinal+")").addClass("active").siblings().removeClass("active");

            // event.stopPropagation();
        };

        //--------------------------------------


        // version 1
        // $tafis03_buttons.find("#group2").on("click", function(){ $tafis03_btn_ctrl(4, -1824);}); // 4, -1824
        // $tafis03_buttons.find("#group3").on("click", function(){ $tafis03_btn_ctrl(7, -3648);}); // 7, -3648

        // version 2
        var $elt_width =  jQuery("#" + tafis03 + " .owl-item").width();
        // console.log("tafis width: " + (0 - $elt_width));


        $tafis03_buttons.find("#group1").on("click", function(event){ $tafis03_btn_ctrl(1, 0);}); // 4, -1824
        $tafis03_buttons.find("#group2").on("click", function(event){ $tafis03_btn_ctrl(2, 0 - ($elt_width + tafis03_rightmargin) );}); // 7, -3648
        $tafis03_buttons.find("#group3").on("click", function(event){ $tafis03_btn_ctrl(3, 0 - ($elt_width + tafis03_rightmargin + 1) *2 );}); // 7, -3648
        $tafis03_buttons.find("#group4").on("click", function(event){ $tafis03_btn_ctrl(4, 0 - ($elt_width + tafis03_rightmargin + 1) *3);}); // 7, -3648
        $tafis03_buttons.find("#group5").on("click", function(event){ $tafis03_btn_ctrl(5, 0 - ($elt_width + tafis03_rightmargin + 1) *4);}); // 7, -3648

        //------------------------------
        // version 3 - ronnie
        // $tafis03_buttons.find("#group1").on("click", function(event){ ronnie(0);});
        // $tafis03_buttons.find("#group2").on("click", function(event){ ronnie(1);});


        // console.log("tafis_about.js L:208!");

    });