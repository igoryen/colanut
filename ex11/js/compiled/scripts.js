$( document ).ready(function(){
	console.log("scripts1.js is ready! yes dadada");
	$(".anthony").on("click", function(){
		var someverylongvariable = "hello";
		alert( someverylongvariable );
	})


		$("#constant_contact").bind("DOMSubtreeModified", function(){
		$inputs = $("#constant_contact").find(".ctct-form-field");
		$.each($inputs, function(i, v){

			$(this).find("input").attr("placeholder", $(this).find('label').text());
			$(this).find("label").css("display", "none");
		});



	});




	console.log("apple");

});
//# sourceMappingURL=scripts.js.map
