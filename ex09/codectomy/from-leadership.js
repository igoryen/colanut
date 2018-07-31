	$(".teammember").on( "click", function(){
		// console.log("id: " + $( this ).attr("id"));
		// console.log( "pic" + $( this ).find("img").attr("src") );

		var picpath = $( this ).find("img").attr("src") ;
		// console.log("picpath: " + picpath)
		var id = $( this ).attr("id");


		

		var result = $.grep( leadership, function(e){ 
			return e.id == id; 
		});

		// person's photo
		$photo = $("<img>").attr("src", picpath)

		// person's story
		$descrip = $("<div>").attr("class", "desc-wrapper");
		
		$name = $("<div>").attr("class", "modal-member-name").html( result[0].name);
		$title = $("<div>").attr("class", "modal-member-title").html( result[0].title);

		$nametitle = $("<div>").attr("class", "modal-name-wrapper");

		$nametitle.append( $name, $title );


		$descrip.append( $nametitle );

		$lines = $("<div>").attr("class", "modal-bio-wrapper");

		for (var i = 0; i < result[0].desc.length; i++) {
			var $line = $("<div>").attr("class", "bio-paragraph").html( result[0].desc[i] );
			$lines.append( $line );
		};

		$descrip.append( $lines );

		// console.log(result[0]);
		$modal.find("#pic").html("").append( $photo );
		$modal.find("#desc").html("").append( $descrip );
		

		
		if ( $( window ).width() <= 600 ) {
			var badphotos = [
				"deb", 
				"patrick", 
				"elizabeth",
				"shane",  
				"alberto",
				"lance",
				"marc"
			];

			var superbadphotos = [
				"al", 
				"justin",

			];
			//--- TODO 1: remove after photos are updated --
			// if( badphotos.includes( id ) ) { // dumb IE11 doesn't understand this
			if(badphotos.indexOf( id ) >= 0) {
				$("#pic").find("img").css({
						"height": "10em",
						"right": "-2px"
					}
				);
			}

			// if( superbadphotos.includes( id ) ) { 
			if(superbadphotos.indexOf( id ) >= 0) {
				$("#pic").find("img").css({
						"height": "8.2em",
						"right": "10px"
					}
				);
			}
			//--- EO TODO 1 -----------------------
			// alert(" less!")
			$modal.fadeIn( 50, function(){
				// alert("now")
				var f = 3; // f for "factor"
				$(".modal-content").height( $( window ).height() - (50*f) );
				$(".modalwrapper").height( $( window ).height() - (51*f) );
				$(".desc-wrapper").height( $( window ).height() - (60*f) );
				$(".modal-bio-wrapper").height( $( window ).height() - $(".modal-name-wrapper").height() - (70*f) );

			});
			

		}
		else {
			// alert("not less!")
			$modal.show().css("display", "flex");
		}

		
		$( "body" ).addClass("modal-open");

	});