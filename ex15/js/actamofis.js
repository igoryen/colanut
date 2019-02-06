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