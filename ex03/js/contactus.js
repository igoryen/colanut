$( document ).ready( function(){
	console.log("ready");

	var companies = [

		{
			"id": "tng",
			"name": "The Nationwide Group (Headquarters)",
			"addr": "80 Micro Court, 3rd floor, Markham, ON, Canada, L3R 9Z5",
			"phone": "(888) 477 9776",
			"fax": "(866) 477 9519",
			"web": "http://www.tngoc.com",
			"map": "80Micro.jpg",
			"gmaps": "https://www.google.ca/maps/place/80+Micro+Ct,+Markham,+ON+L3R+5X9/@43.8345742,-79.3191437,17z/data=!4m2!3m1!1s0x89d4d46c2700eecf:0x9899395f0f4db899"
		},
		{
			"id": "nas",
			"name": "Nationwide Appraisal Services",
			"addr": "80 Micro Court, 3rd floor, Markham, ON, Canada, L3R 9Z5",
			"phone": "(888) 477 9776",
			"fax": "(866) 477 9519",
			"web": "https://www.nationwideappraisals.com",
			"map": "80Micro.jpg",
			"gmaps": "https://www.google.ca/maps/place/80+Micro+Ct,+Markham,+ON+L3R+5X9/@43.8345742,-79.3191437,17z/data=!4m2!3m1!1s0x89d4d46c2700eecf:0x9899395f0f4db899"
			
		},
		{
			"id": "nrs",
			"name": "Nationwide Recovery Services",
			"addr": "80 Micro Court, 3rd floor, Markham, ON, Canada, L3R 9Z5",
			"phone": "(855) 899 6977",
			"fax": "(866) 477 9519",
			"web": "https://www.nwrs.ca",
			"map": "80Micro.jpg",
			"gmaps": "https://www.google.ca/maps/place/80+Micro+Ct,+Markham,+ON+L3R+5X9/@43.8345742,-79.3191437,17z/data=!4m2!3m1!1s0x89d4d46c2700eecf:0x9899395f0f4db899"
		},
		{
			"id": "hcs",
			"name": "Nationwide Home Closing Services",
			"addr": "80 Micro Court, 3rd floor, Markham, ON, Canada, L3R 9Z5",
			"phone": "(855) 899 6977",
			"fax": "(866) 477 9519",
			"web": "http://www.nwhcs.ca",
			"map": "80Micro.jpg",
			"gmaps": "https://www.google.ca/maps/place/80+Micro+Ct,+Markham,+ON+L3R+5X9/@43.8345742,-79.3191437,17z/data=!4m2!3m1!1s0x89d4d46c2700eecf:0x9899395f0f4db899"
		},
		{
			"id": "inhouse",
			"name": "InHouseUSA",
			"addr": "7077 Bonneval Road, Suite 430, Jacksonville, FL 32216 USA",
			"phone": "(888) 907 4507",
			"fax": "(800) 507 3884",
			"web": "http://inhouseusa.com",
			"map": "822_A1A.jpg",
			"gmaps": "https://www.google.com/maps/place/822+A1A+N+%23202,+Ponte+Vedra+Beach,+FL+32082/@30.199066,-81.380775,15z/data=!4m2!3m1!1s0x88e437aa646811a3:0x3bf66aaf97b51c29?hl=en-US"
		}
		
	];

	$cu_modal = $("#myModal");
	var cu_modal = document.getElementById('myModal'); // Get the modal


	$cu_modal_closer = $cu_modal.find("span.cu-close");
	$cu_modal_closer.on("click", function(){
		$cu_modal.hide();
	});


	$(".cu-betty").on( "click", function(){
		// console.log("id: " + $( this ).attr("id"));
		console.log( "pic" + $( this ).find("img").attr("src") );

		var picpath = $( this ).find("img").attr("src") ;
		console.log("picpath: " + picpath)
		var id = $( this ).attr("id");


		

		var result = $.grep( companies, function(e){ 
			return e.id == id; 
		});

		// STEP 1 - compose PART 1
		// 1 logo + name
		// 2 address
		// 3 phone
		// 4 fax
		// 5 website


		// #1 - company's logo and name
		$image = $("<img>").attr("src", picpath).width("5em");
		$logo = $("<div>").attr("class", "cu-jennifer");
		$logo.append( $image );
		$name = $("<div>").attr("class", "cu-carol").html( result[0].name);
		$logoname =  $("<div>").attr("class", "cu-edward");
		$logoname.append( $logo, $name );

		// #2 - address
		$address = $("<div>").attr("class", "cu-elizabeth").html( result[0].addr);

		// #3 - phone
		$phone = $("<div>").attr("class", "cu-george").html( result[0].phone);

		// #4 - fax
		$fax = $("<div>").attr("class", "cu-helen").html( result[0].fax);

		// #5 - website
		$link = $("<a>").attr("href", result[0].web).attr("target", "_blank").html((result[0].web).replace(/http.*\/\//g, ""));
		$web = $("<div>").attr("class", "cu-james");
		$web.append($link);

		// pack them up
		$part1 = $("<div>").attr("class", "cu-jason");
		$part1.append( $logoname, $address, $phone, $fax, $web);


		// STEP 2 - compose PART 2
		// map image

		
		$map = $("<img>").attr("src", "img/maps/" + result[0].map);
		$maplink = $("<a>").attr("href", result[0].gmaps).attr("target", "_blank");
		$maplink.append( $map );

		$part2 = $("<div>").attr("class", "cu-jeff");
		$part2.append( $maplink );


		// STEP 3 - put part 1 and 2 together
		// console.log(result[0]);
		$cu_modal.find("#part1").html("").append( $part1 );
		$cu_modal.find("#part2").html("").append( $part2 );
		

		$cu_modal.show();
	});

	
	window.onclick = function(event) {
	    if (event.target == cu_modal) {
	        $cu_modal.hide(); // When the user clicks anywhere outside of the modal, close it
	    }
	}



});