$( document ).ready( function(){
	// console.log("ready");

	$teammember = $(".teammember");

	$teammember.hover(
		function(){
			// console.log("in");
			$( this )
			.find(".arrowsign").css(
				{
					// "opacity": 1,
					"transform": "translateX(6px)"

				}
			);
			$( this ).find(".photograph").css({
					"-webkit-border-radius": "0%",
		            "-moz-border-radius": "0%",
		            "-ms-border-radius": "0%",
		            "-o-border-radius": "0%",
		            "border-radius": "0%",
		            // "background-color": "yellow"
		        }
			);
			
		},
		function(){
			// console.log("out");
			$( this )
			.find(".arrowsign").css(
				{
					// "opacity": 0,
					"transform": "translateX(0)"

				}
			);
			$( this ).find(".photograph").css({
					"-webkit-border-radius": "50%",
		            "-moz-border-radius": "50%",
		            "-ms-border-radius": "50%",
		            "-o-border-radius": "50%",
		            "border-radius": "50%",
		            // "background-color": "#FFF"
		        }
			)
			
		}
	);

	$teammember.on( "click", function(){

		$(this).find(".modal").addClass("active");		
		$( "body" ).addClass("modal-open");

	});

	$('span.closemodal').on('click',function(ev){
		ev.stopPropagation();
		$(ev.target).closest('.modal.active').removeClass('active');

	});
	
	window.onclick = function(event) {
		var modal = document.getElementsByClassName('modal active')[0]; // Get the modal
		$modal = $(".modal.active");

	    if (event.target == modal) {
	        $modal.removeClass("active"); // When the user clicks anywhere outside of the modal, close it
	        $( "body" ).removeClass("modal-open");
	    }
	}
});