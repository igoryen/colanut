$( document ).ready(function(){
	// this is a comment
	/*
		this is a long comment that is used here to just make
		sure that it will be
		stripped by the gulp
		task
	*/
	console.log("scripts1.js is ready! yes dadada");
	$(".anthony").on("click", function(){
		// declare a variable
		var someverylongvariable = "hello";
		/*
		use the variable
		*/
		alert( someverylongvariable );
	})
	/* this is also a comment*/

	// console.log( $("#ctct_form_1").find(".ctct-form-field").find('label').text() );
	
	$("#constant_contact").bind("DOMSubtreeModified", function(){
		// alert('changed');
		$inputs = $("#constant_contact").find(".ctct-form-field");
		$.each($inputs, function(i, v){
			// console.log("ok")
			// console.log( $(this).find('label').text() );

			$(this).find("input").attr("placeholder", $(this).find('label').text());
			$(this).find("label").css("display", "none");
		});

		// $fullname = $("<div>").addClass("fullname");
		// $fullname.append( $("#first_name_field_1"), $("#last_name_field_1"));
		// $("#ctct_form_1").append( $fullname);


	});

	// $inputs = $("#constant_contact").find(".ctct-form-field");
	// $.each($inputs, function(i, v){
	// 	// console.log("ok")
	// 	// console.log( $(this).find('label').text() );

	// 	$(this).find("input").attr("placeholder", $(this).find('label').text());
	// 	$(this).find("label").css("display", "none");
	// });


	console.log("apple");

});