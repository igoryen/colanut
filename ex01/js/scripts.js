$( document ).ready( function(){
	console.log("ready");

	var leadership = [

		{
			"id": "tom",
			"name": "Tom McCormick",
			"title": "Founder & CEO",
			"desc": [
				"Tom McCormick is the Founder and CEO of The Nationwide Group of Companies (TNG): <a href=\"#\">www.tngoc.com</a>.",
				" During his tenure as the principal of Canada's largest appraisal company, Tom noticed the centralization of lenders. In order to facilitate appraisal requests nationally; Tom created the concept of an Appraisal Management Company in Canada (AMC).",
				"Since that inception, NAS has continued to be the market leader in innovation, product offerings and process improvements for the mortgage industry. This is evident in NAS's market share of over 60%, number of valuations annually of 450,000 and a mortgage value of over 6 billion dollars.",
				"Tom took NAS to the Caribbean islands, where NAS introduced on-line forms software, mobile app's and a comparable sales data base, all the firsts for the Caribbean.",
				"Tom, looking for further international opportunities has launched NAS in Mexico, where his technology has also provided new and innovative products to help the Mexican market build compliance and regulations around the mortgage industry.",
				"When Tom looked at opportunities in the US, it was evident that the complexity of the market would not allow NAS to be grown organically as in all other countries. Tom found a unique company to acquire called \"InHouseUSA\" located in California, that offered two products, a traditional AMC and a technology platform that allowed lenders to manage their own panel of appraisers, essentially taking the regulatory risks \".",
				"<strong><i>Today, NAS provides more valuations in more countries than any other valuation platform in the world</i></strong>",
				"Another opportunity Tom saw was in the recovery business within Canada and Nationwide Recovery Services (NRS) was formed. NRS is a robust workflow management system that enables communication between lenders and their legal, real estate, property management, and appraisal professionals, and ensures the most effective use of resources to complete the recovery cycle. NRS brings oversight, insight and intelligence to the process of recovering debts.",
				"Through a strategic partnership, MyClosing.ca joined the Nationwide Group of Companies. MyClosing.ca is Canada's first online real estate and mortgage closing platform that utilizes transformative technologies to empower the consumer by bringing together professionals into one centralized network to manage the legal and closing process for Purchase, Sale, Refinance, Transfer, and Line of Credit transactions."]
		},
		{
			"id": "tammy",
			"name": "Tammy Soliman",
			"title": "Chief Technology Officer",
			"desc": [
				"Tammy joined TNG in January 2009 and successfully transitioned all technical development and support capabilities from an external IT solution group to be permanently managed in-house. He was instrumental in building the organization's IT Development Team.",
				"Tammy brings with him over 17 years of professional experience in IT and has extensive background on building enterprise applications and data analytics and warehousing solutions for various industries such as financial services, shipping, logistics, publishing, appraisal management, telecommunications, automobile, and insurance. With his background in agile methodology, he has spearheaded and supervised various end-to-end technical development efforts from product inception through design and implementation.",
				"He currently holds professional certifications such as Oracle Certified Associate Java SE, Oracle PL/SQL Developer, Oracle Certified Professional Java SE and Java EE Web Component Developer, Certified Scrum Product Owner, and Certified Scrum Master. Currently, Tammy oversees all application development activities for new products as well as technical enhancements for all of TNG applications."
			]
		},
		{
			"id": "matt",
			"name": "Matt Angus",
			"title": "LL.B. / J.D., General Counsel",
			"desc": [
				"Matt Angus is the General Counsel of the Nationwide Group, joining the leadership team in 2016.",
				"Mr. Angus has over 15 years of legal and business experience both as a member of a leading transaction law firm at Goodmans LLP, and through his in-house experience as the General Counsel of Summit REIT, at that time one of the largest public Real Estate Investment Trusts in Canada. Matt has also provided legal expertise to a multi-national real estate investment management organization as he held both the General Counsel and Chief Compliance Officer positions at ING Real Estate Investment Management, a member of the global ING Group of companies.",
				"In his General Counsel roles, Matt has often been involved more directly in the business affairs of the organizations, designing and implementing operational, compliance and legal risk management processes and procedures, structuring and negotiating key business arrangements including joint venture agreements, and assisting with change management as the organizations have grown.",
			]
		}
	];

	$modal = $("#myModal");
	var modal = document.getElementById('myModal'); // Get the modal



	$modal_closer = $modal.find("span.close");
	$modal_closer.on("click", function(){
		$modal.hide();
	});


	$(".betty").on( "click", function(){
		// console.log("id: " + $( this ).attr("id"));
		console.log( "pic" + $( this ).find("img").attr("src") );

		var picpath = $( this ).find("img").attr("src") ;
		console.log("picpath: " + picpath)
		var id = $( this ).attr("id");


		

		var result = $.grep( leadership, function(e){ 
			return e.id == id; 
		});

		// person's photo
		$photo = $("<img>").attr("src", picpath)

		// person's story
		$descrip = $("<div>").attr("class", "charles");
		
		$name = $("<div>").attr("class", "carol").html( result[0].name);
		$title = $("<div>").attr("class", "deborah").html( result[0].title);

		$nametitle = $("<div>").attr("class", "donald");

		$nametitle.append( $name, $title );


		$descrip.append( $nametitle );

		$lines = $("<div>").attr("class", "donna");

		for (var i = 0; i < result[0].desc.length; i++) {
			var $line = $("<div>").attr("class", "christopher").html( result[0].desc[i] );
			$lines.append( $line );
		};

		$descrip.append( $lines );

		// console.log(result[0]);
		$modal.find("#pic").html("").append( $photo );
		$modal.find("#desc").html("").append( $descrip );
		

		$modal.show();
	});

	
	window.onclick = function(event) {
	    if (event.target == modal) {
	        $modal.hide(); // When the user clicks anywhere outside of the modal, close it
	    }
	}



});