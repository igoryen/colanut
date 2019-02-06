$( document ).ready( function(){
    console.log("scripts1.js is ready! yes dadada");
    // this is a comment
    /*
        this is a long comment that is used here to just make
        sure that it will be
        stripped by the gulp
        task
    */
    
    $(".anthony").on("click", function(){
        // declare a variable
        var someverylongvariable = "hello";
        /*
        use the variable
        */
        alert( someverylongvariable );
    })
    /* this is also a comment*/


    $(".n_geraldine:not(.done)").on("click", function(ev){
        // ev.stopPropagation();
        console.log("bootstrapping n_geraldines")
        $(this).find(".modal").addClass("active");      
        $( "body" ).addClass("modal-open");
    });


    

    // $('span.closemodal, #n_geraldine .modal-footer input, #n_geraldine .modal-footer .cancel-upload').on('click',function(ev){
    // $('#n_geraldine .modal-footer').on('click',function(ev){
    $('span.closemodal, .n_geraldine .cancel-upload').on('click', function(ev){
        // console.log("footer")
        ev.stopPropagation();
        $(ev.target).closest('.modal.active').removeClass('active');

    });

    //=============================
    // File Notes section toggle
    //=============================
    
    $file_notes = $("#file_notes");
    $notes_toggle = $("#notes_toggle");
    $grad_cover = $("#grad_cover")
    // v1 works
    // $notes_toggle.click(function(){
    //     if ($file_notes.is(":visible")){
    //         $notes_toggle.empty().append("Show more");
    //     }else{
    //         $notes_toggle.empty().append("Show less");
    //     }
    //     $file_notes.slideToggle(1000);
    // });

    // v2
    // $notes_toggle.on("click", function(argument) {
    //     $file_notes.toggle(500, function(){
    //         if($(this).hasClass("max-open")) {
    //             $(this).removeClass("max-open");
    //         }
    //         else {
    //             $(this).addClass("max-open");
    //         }
    //     });
    // });

    // v3

    // close = {
    //     "height": "30rem",
    //     "overflow": "hidden"
    // };
    // open = {
    //     // "height": "auto"
    //     height: "auto"
    // }

    // $notes_toggle.on("click", function(argument) {
    //     console.log("click")
    //     if($file_notes.hasClass("max-open")) {
    //         console.log("yes")
    //         // $file_notes.animate(close, 1000, function(){ $(this).removeClass("max-open")});
    //         $file_notes.animate(close, 1000);

    //     }
    //     else {
    //         console.log("no")

    //         // $file_notes.addClass("max-open").animate( open, 1000, function(){ $(this).addClass("max-open")});
    //         $file_notes.addClass("max-open").animate( open, 1000);

    //     }
    // });

    // v4
    $notes_toggle.click(function() {
        $file_notes.toggleClass( "max-open", 500, "easeOutSine", function(){
            if($file_notes.hasClass("max-open")){
                $notes_toggle.empty().append("Show less");
                // $notes_toggle.removeClass("closed");
                // $("<div id='closed_toggle'>").insertBefore($notes_toggle);
                $grad_cover.fadeOut();

            }
            else {
                $notes_toggle.empty().append("Show more");
                // $notes_toggle.addClass("closed");
                $grad_cover.fadeIn()


            }
            // $notes_toggle.empty().append("a")
        });
    });


    // document.onClick = function(event) {
    //  console.log( "window click 2");
    //  // var modal = document.getElementsByClassName('modal active')[0]; // Get the modal
    //  $m = $(".modal.active");
    //  console.log("modal: " + $m);
    //  $modal = $(".modal.active");

    //     // if (event.target == modal) {
    //     if (event.target == $m) {

    //      console.log("target - modal")
    //         $modal.removeClass("active"); // When the user clicks anywhere outside of the modal, close it
    //         $( "body" ).removeClass("modal-open");
    //     }
    //     else {
    //      alert("not modal");
    //     }
    // }

    // $(window).on("click", function() {
    //  console.log("CLICK!!!")
    // });
    

    // window.onclick = function(event) {
    //  console.log("window click")
    //  var modal = document.getElementsByClassName('modal active')[0]; // Get the modal
    //  $modal = $(".modal.active");

    //     if (event.target == modal) {
    //         $modal.removeClass("active"); // When the user clicks anywhere outside of the modal, close it
    //         $( "body" ).removeClass("modal-open");
    //     }
    // }

    // v5
    window.onclick = function(event) {
        var modal = document.getElementsByClassName('modal active')[0]; // Get the modal
        $modal = $(".modal.active");
        // console.log("modal:  " + $modal.attr("class"));

        if (event.target == modal) {
            $modal.removeClass("active"); // When the user clicks anywhere outside of the modal, close it
            // console.log("reset 2: " + $modal.wrap('<form>').closest('form').get(0).tagName);
            console.log("reset from outside")
            $fileinput = $modal.find("input[type='file']");
            $fileinput.wrap('<form>').closest('form').get(0).reset();
            $fileinput.unwrap();
            $( "body" ).removeClass("modal-open");
        }
    }
});


/// works
var resetFormElement = function(e) {
    console.log("reset from inside")
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}