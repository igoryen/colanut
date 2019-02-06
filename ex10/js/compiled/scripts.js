$( document ).ready( function(){
    console.log("scripts1.js is ready! yes dadada");

        $(".anthony").on("click", function(){
        var someverylongvariable = "hello";
        alert( someverylongvariable );
    })


    $(".n_geraldine:not(.done)").on("click", function(ev){
        console.log("bootstrapping n_geraldines")
        $(this).find(".modal").addClass("active");      
        $( "body" ).addClass("modal-open");
    });




    $('span.closemodal, .n_geraldine .cancel-upload').on('click', function(ev){
        ev.stopPropagation();
        $(ev.target).closest('.modal.active').removeClass('active');

    });


        $file_notes = $("#file_notes");
    $notes_toggle = $("#notes_toggle");
    $grad_cover = $("#grad_cover")








    $notes_toggle.click(function() {
        $file_notes.toggleClass( "max-open", 500, "easeOutSine", function(){
            if($file_notes.hasClass("max-open")){
                $notes_toggle.empty().append("Show less");
                $grad_cover.fadeOut();

            }
            else {
                $notes_toggle.empty().append("Show more");
                $grad_cover.fadeIn()


            }
        });
    });









    window.onclick = function(event) {
        var modal = document.getElementsByClassName('modal active')[0]; 
        $modal = $(".modal.active");

        if (event.target == modal) {
            $modal.removeClass("active"); 
            console.log("reset from outside")
            $fileinput = $modal.find("input[type='file']");
            $fileinput.wrap('<form>').closest('form').get(0).reset();
            $fileinput.unwrap();
            $( "body" ).removeClass("modal-open");
        }
    }
});


var resetFormElement = function(e) {
    console.log("reset from inside")
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}
//# sourceMappingURL=scripts.js.map
