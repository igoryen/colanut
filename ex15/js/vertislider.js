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
