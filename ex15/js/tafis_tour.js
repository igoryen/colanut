    "use strict";
    jQuery( document ).ready( function(){
        // console.log("tafis_tour_page.js loaded!");
        
        // debugger;


        //===========================================
        // DARLENE
        var tafis1id = "tafis_tour_page_container"; // tafis = ta(bbed) fi(lm)s(trip)
        var rightmargin = 30;

        var tafis_options = {
            items:1,
            margin: rightmargin,
            autoHeight:true,
            // loop: true // when it's on, highlighting tabs doesn't work when clicked
            // responsiveBaseElement: '#tafis_area',
            responsive:{
                0:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
            
        };
        // console.log("owlCarousel - 1");
        jQuery("#" + tafis1id + " .tafis").owlCarousel(tafis_options);


        var $tafis_buttons = jQuery("#" + tafis1id + " .tafis--buttons");   
        var $tafis_images =  jQuery("#" + tafis1id + " .tafis--images");    



        jQuery("#" + tafis1id + " .owl-carousel").on("translated.owl.carousel", function(){
            // console.log(jQuery(this).find("div.owl-item.active").find("div.tafis--frame").attr("id"));
            var $btn_num = jQuery(this).find("div.owl-item.active").find("div.tafis--frame").attr("id").slice(-1);
            if($btn_num == 4) { // 4 is the penultimate card. if the last translated is the penultimate card, highlight the heading of the next (i.e. last, 5th) card instead since they both appear side by side.
                $tafis_buttons.find("button[id*='"+ ($btn_num+1) +"']").addClass("active").siblings().removeClass("active");    
            }
            else {
                $tafis_buttons.find("button[id*='"+ $btn_num +"']").addClass("active").siblings().removeClass("active");
                // $(this).attr("id");    
            }
            

        } );


        //-----------------------------------



        /* 
            click on the tab
            move the filmstrip to display the first image in the group
        */
        var $tafis_filmstrip = jQuery("#" + tafis1id + " .tafis").find("div.owl-stage"); 
        // $pages = jQuery("#" + tafis1id + " .tafis").find("div.owl-item");
        var $tafis_dots = jQuery("#" + tafis1id + " .tafis").find("div.owl-dots");


       
        // v2
        var ricky = function( ordinal, offset){
            // console.log("clicked on group " + $(this).attr("id") + "; offset: " + offset);

            jQuery("#" + $(this).attr("id")).addClass("active").siblings().removeClass("active");
            $tafis_filmstrip.find("div:nth-child("+ordinal+")").addClass("active").siblings().removeClass("active");
            $tafis_filmstrip.css({
                "transform": "translate3d("+offset+"px,0px,0px)",
                "transition": "all .5s ease 0s"
            });
            $tafis_dots.find("button:nth-child("+ordinal+")").addClass("active").siblings().removeClass("active");

            // event.stopPropagation();
        };

        //--------------------------------------
        var last_pair = function( group_no ) {
            ricky(4, 0 - ($elt_width + rightmargin + 1) *3);
            $tafis_buttons.find("button#group" + group_no).addClass("active").siblings().removeClass("active");
        }
        //--------------------------------------


        // version 1
        // $tafis_buttons.find("#group2").on("click", function(){ ricky(4, -1824);}); // 4, -1824
        // $tafis_buttons.find("#group3").on("click", function(){ ricky(7, -3648);}); // 7, -3648

        // version 2
        var $elt_width =  jQuery("#" + tafis1id + " .owl-item").width();
        // console.log("tafis width: " + (0 - $elt_width));


        $tafis_buttons.find("#group1").on("click", function(event){ ricky(1, 0);}); // 4, -1824
        $tafis_buttons.find("#group2").on("click", function(event){ ricky(2, 0 - ($elt_width + rightmargin) );}); // 7, -3648
        $tafis_buttons.find("#group3").on("click", function(event){ ricky(3, 0 - ($elt_width + rightmargin + 1) *2 );}); // 7, -3648
        $tafis_buttons.find("#group4").on("click", function(event){ last_pair(4); });
        $tafis_buttons.find("#group5").on("click", function(event){ last_pair(5); });

        //     ricky(4, 0 - ($elt_width + rightmargin + 1) *3);
        //     $tafis_buttons.find("button#group4").addClass("active").siblings().removeClass("active");
        // }); // 7, -3648
        // $tafis_buttons.find("#group5").on("click", function(event){ 
        //     ricky(4, 0 - ($elt_width + rightmargin + 1) *3);
        //     $tafis_buttons.find("button#group5").addClass("active").siblings().removeClass("active");
        // }); // 7, -3648

        //------------------------------
        // version 3 - ronnie
        // $tafis_buttons.find("#group1").on("click", function(event){ ronnie(0);});
        // $tafis_buttons.find("#group2").on("click", function(event){ ronnie(1);});


        // console.log("tafis_tour.js L:208!");

    });