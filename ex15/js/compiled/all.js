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
"use strict";
jQuery( document ).ready( function(){
    console.log("actamofis.js loaded!");








    var cur_id = "actamofis01";

    var $actamofis_tabs = jQuery("#" + cur_id + " .tabs");
    var $tab_pages = jQuery("#" + cur_id + " .pages");

    var owl = jQuery( "#" + cur_id + " .owl-carousel");

    var $members = jQuery( "#" + cur_id + " .owl-carousel");
    var $member_modals = jQuery( "#" + cur_id + " .member-modals");

    var owl_options = {
        items:1,
        margin:5,
        autoHeight:true
    };


    var startCarousel =  function(){

        

        // var owl = jQuery( "#" + cur_id + " .owl-carousel");
        owl.owlCarousel(owl_options);
        owl.removeClass("exowlbox");
        
        

        



    }



    var stopCarousel = function() {
      // var owl = $('.owl-carousel');
      // owl.trigger('destroy.owl.carousel');
      // owl.addClass('off');

      
      owl.trigger('destroy.owl.carousel');
      owl.addClass('off');
      owl.addClass("exowlbox")

      // var owl_options = {
      //     items:1,
      //     // margin:5,
      //     // autoHeight:true
      // };
      // jQuery( "#" + cur_id + " .owl-carousel").owlCarousel(owl_options);



      // $actamofis_tabs.find("button:first-child").addClass("active").siblings("button").removeClass("active");
      // $tab_pages.children("button:first-child").addClass("active").siblings("button").removeClass("active");

      // $tab_pages.children("div:first-child").addClass("active").siblings("div").removeClass("active");


    }




    // jQuery('button[class="tablinks"]:not(.mobile)').css("background-color", "red");
    // jQuery('button[class="tablinks mobile"]').css("background-color", "red");


    $actamofis_tabs.find('button').on("click", function(){

        // alert("yes");
        console.log("yes");


        var $tab = $actamofis_tabs.find('button[id^='+ this.id +']');
        $tab.addClass("active").find('span[class="open"]').show();


        // jQuery('[id^='+ this.id +'_]').css("background-color", "yellow");
        $tab.siblings('button').removeClass("active").find('span[class="open"]').hide().find('span[class="closed"]').show();;

        //=============================

        var $tabcontent = $tab_pages.find('div[id^='+ this.id +'_]');
        // v1
        // $tabcontent.addClass("active");
        // $tabcontent.siblings('div').removeClass("active");
        // v2
        $tabcontent.siblings('div').removeClass("active").hide(); // hide() changes the inline "display:block" (inserted by fadeIn()) to "display: none;" 
        $tabcontent.fadeIn().addClass("active");


    });

    $tab_pages.find('button').on("click", function(){

        var speed = 'fast';


        if( jQuery(this).hasClass("active")) {
            // console.log(jQuery(this).attr('id') + " opened");
            jQuery(this).removeClass("active");
            var $tabcontent = jQuery(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
            // $tabcontent.removeClass("active");
            $tabcontent.slideUp(speed, function(){ jQuery(this).removeClass("active")});

        }
        else {
            // console.log(jQuery(this).attr('id') + " closed");
            

            // activate the mobile button
            jQuery(this).addClass("active").siblings("button").removeClass("active");
            
            // console.log(">>>>" + this.id);
            var $tabcontent = jQuery(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
            // $tabcontent.addClass("active").siblings("div").removeClass("active");
            $tabcontent.slideDown(speed, function(){jQuery(this).addClass("active")}).siblings("div").slideUp(speed, function(){jQuery(this).removeClass("active")});
            // activate the desktop button
            $actamofis_tabs.children("button[id=" + (this.id).replace("m_", "") + "]").addClass("active").siblings("button").removeClass("active");



        }
        // alert("yes");
        // console.log("yes for mobile");
        // debugger;

        // console.log(('button[id="'+ this.id +'"]'));
        // console.log( jQuery(this));
        // jQuery(this).addClass("active");
        // jQuery(this).css("color", "red");
        // jQuery(this).siblings("button").removeClass("active");
        // $m_tab = $tab_pages.find('button[id="'+ this.id +'"]');
        // // console.log("m id is " + $m_tab.attr("id"));
        // console.log($m_tab);
        // $m_tab.addClass("active");

        // // jQuery('[id^='+ this.id +'_]').css("background-color", "yellow");
        // $m_tab.siblings().removeClass("active")

        //================================
        // console.log((this.id).replace('m_', ''));
        // console.log(('[id^='+ (this.id).replace('m_', '') +'_]'));

        // $tabcontent = jQuery(this).siblings('div[id^='+ (this.id).replace('m_', '') +'_]');
        // // // console.log($tabcontent);
        // $tabcontent.addClass("active");

        // // // jQuery('[id^='+ this.id +'_]').css("background-color", "yellow");
        // $tabcontent.siblings("div").removeClass("active")



    });


    if ( $(window).width() < 650 ) {
        startCarousel();
    } else {
        // $("#" + cur_id + '.owl-carousel').addClass('off');
        stopCarousel();
    }



    //--------------------------------------



    jQuery(window).resize(function() {
        if ( jQuery(window).width() < 650 ) {
            console.log("LESS THAN 650")
          startCarousel();
        } else {
            console.log("more than 650")
          stopCarousel();
        }
    });

    




    //--------------------------------------




    //------ MODAL ----------------
    // Get the modal
    // var modal = document.getElementById('myModal');
    // var modals = document.getElementsByClassName('modal');


    // Get the button that opens the modal
    // var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //     modal.style.display = "flex";
    // }

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }


    //-----------------------------
    

    // debugger;
    var abc = function( member_id, event ) {
            // debugger;
        var modal_id = member_id + "_modal";
        var $member_modal = $member_modals.find("#" + modal_id); 
        // var $member_modal_closer = $member_modal.find("span.close").eq(0);
        var $member_modal_closer = $member_modal.find("div.cross").eq(0);


        $member_modal_closer.on("click", function( event ){ 
            $member_modal.css({ "display": "none"});
            event.stopPropagation(); // this stops from assigning 'display:none' to the closer
            // alert("1");
            jQuery("html").removeClass("no-scroll");


        });

        // console.log(" you clicked on " + member_id + ", I show " + modal_id);
        $member_modal.css({"display":"flex"});
        // $("html").css({"overflow-y":"hidden"})
        jQuery("html").addClass("no-scroll");
        // alert("2");

        // LIMIT THE WIDTH OF THE MODAL BODY text
        // if ( jQuery(window).width() > 568 ) {

        //     var $viewport_height = jQuery( window ).height();
        //     console.log(">>>>>>>>> viewport_height: " + $viewport_height );

        //     var $a = jQuery( $member_modal.find("div.modal-content") ).height();
        //     console.log(">>>>>>>>> modal-content: " + $a);

        //     // $member_modal.find("div.modal-description").css("height", $a);
            


        //     var $modal_header_height = jQuery( $member_modal.find("div.modal-header") ).height();
        //     console.log( ">>>>>>>>> modal-header: " + $modal_header_height);

        //     // alert("4 - " + $viewport_height); 
        //     var $modal_body_height = $a - $modal_header_height;
        //     console.log(">>>>>>>>> modal_body_height: " + $modal_body_height);

        //     $member_modal.find("div.modal-body").css("height", $modal_body_height);

        // }

        


        // event.stopPropagation();


        // jQuery("#" + modal_id);
    }   
    // debugger;

    // var $members = jQuery( "#" + cur_id + " .itemC");


    // var member1 = $members.siblings("#member010");

    $members.find(".itemC").on("click", function( event ){ 
        abc( jQuery(this).attr("id") ); 
        event.stopPropagation();
    });

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }

    window.onclick = function(event) {
        var $member_modals = jQuery( "#" + cur_id + " .member-modals");
        // if (event.target == "modal") {
        //     $member_modal.css({"display":"none"});
        // }
        // if (event.target == $member_modal) {
        //     $member_modal.css({"display":"none"});
        // }
        // debugger;
        if ($member_modals.find( event.target ) ) {
            // $member_modals.find( event.target ).css({"display":"none"});
            // debugger;
            var $target = $member_modals.find( event.target );
            if($target.attr("class") == "modal") {
                $target.css({"display":"none"});
                // console.log( $target.attr("class"));
                // console.log("true, " + $target.attr("class"));
                // alert("3");
                jQuery("html").removeClass("no-scroll");
            }
            else {
                // console.log("false, " + $target.attr("class"))
            }
            
            // $target.hide();



            // event.stopPropagation();
            // console.log("found");
        }
        // event.stopPropagation();

    }


});
   



// SUSPECTED OF NOT WORKING    
// jQuery( window ).resize(function() {
//     var speed = ("fast");
//     if(jQuery( window ).width() >= 650) {
//         // alert(">=650");
//         var $first_btn = jQuery("#actamofis_tabs button").first();
//         $first_btn.addClass("active").siblings().removeClass("active");

//         var $first_tabcontent = jQuery("#tab_pages div.tabcontent").first();
//         $first_tabcontent.show().addClass("active").siblings().removeClass("active").hide();
//     }
//     else {
//         var $first_btn = jQuery("#tab_pages button").first();
//         $first_btn.addClass("active").show().siblings("button").show();
//         $tabcontent = jQuery('div[id^='+ $first_btn.attr('id').replace('m_', '') +'_]');
//         // $tabcontent.removeClass("active");
//         $tabcontent.addClass("active").show().siblings("div").removeClass("active").hide();

//     }
// });
"use strict";


jQuery( document ).ready( function(){
    console.log("vertislider.js loaded!")
    




    var $slider = jQuery("#vertical_filmstrip");

    //---------------------
    // mouse wheel scroll through slides
    $slider
    .on('init', () => {
        mouseWheel($slider)
    });

    function mouseWheel($slider) {
        // jQuery(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
        jQuery("#vert_fs").on('wheel', { $slider: $slider }, mouseWheelHandler);

    }
    function mouseWheelHandler(event) {
        event.preventDefault();
        const $slider = event.data.$slider;
        const delta = event.originalEvent.deltaY;
        if(delta > 0) {
            $slider.slick('slickNext');
        }
        else {
            $slider.slick('slickPrev');
        }
    }
    //----------------------


    // SLICK
    var slick_options = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        // draggable: true,
        verticalSwiping: true,
        centerMode: true,
        // fade: true,
        appendDots: jQuery("#vertical_filmstrip"),
        autoplay: true,
        autoplaySpeed: 1000,
        dotsClass: "vert-nav-dots",


        customPaging: function($slider, i) {
                    return jQuery('<button type="button" class="lalala"/>').text(i + 1);
                },
        dots: true, 
        // appendDots: jQuery('#vertical_filmstrip_nav'),
        //  customPaging:function(slider, pageIndex) {
        //  //you can reference the slider being instantiated as slider.$slider
        //  return jQuery('<button></button').text( slider.$slider.data('buttonlabel'));>
    };




    jQuery('#vertical_filmstrip').slick( slick_options );
    // EO Slick


    



    var $fsf_images = jQuery("#vert_fs");

    jQuery("#vertical_filmstrip").bind('cssClassChanged', function(){ 
        // debugger;

        var $cur_frame = jQuery(this).find("div.frame.slick-current").attr("id");
        // console.log("current: " + $cur_frame);
        // console.log("in .bind(): $fsframe is " + $fsframe);        
        $fsf_images.find('#frame_image_'+ $cur_frame.replace("slick-slide", "")).addClass("active").siblings().removeClass("active");
        // console.log("in .bind(): " + $fsf_images.find('#'+ $fsframe).attr("class") );

    });

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

    

});






 //    function openCity(evt, cityName) {
    //  debug;
    //     var i, tabcontent, tablinks;
    //     tabcontent = document.getElementsByClassName("tabcontent");
    //     for (i = 0; i < tabcontent.length; i++) {
    //         tabcontent[i].style.display = "none";
    //     }
    //     tablinks = document.getElementsByClassName("tablinks");
    //     for (i = 0; i < tablinks.length; i++) {
    //         tablinks[i].className = tablinks[i].className.replace(" active", "");
    //     }
    //     document.getElementById(cityName).style.display = "block";
    //     evt.currentTarget.className += " active";
    // }

    // // Get the element with id="defaultOpen" and click on it
    // document.getElementById("defaultOpen").click();

//# sourceMappingURL=all.js.map
