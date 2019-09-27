$(document).ready(function () {
    console.log("scripts1.js");


    var lender = [{
            "name": "Brent Hyman",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Byoung Park",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Gagandeep Singh",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Gord Campbell",
            "func": "Residential Appraiser, CNAREA Candidate"
        },
        {
            "name": "Jonathan Teran",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Martha Loewen",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Mercier Beaudet",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Rishi Bhalla",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Sandy Teseo",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Shelby Bryan",
            "func": "Residential Appraiser, DAR Candidate"
        },
        {
            "name": "Suzanne Growen",
            "func": "Residential Appraiser, CRA Candidate"
        },
        {
            "name": "Travis Richards",
            "func": "Residential Appraiser, CNAREA Candidate"
        },
        {
            "name": "Lydia Thomas",
            "func": "Residential Appraiser, CRA Candidate"
        },
    ];


    var printout_lenders = function (ary, elid) {


        for (var i = 0, l = ary.length; i < l; i++) {
            var obj = ary[i];

            var $row = $("<div>").attr("class", "row content-grid-row");

            for (var c = 0; c < 3; c++) {


            var $item = $("<div>").attr("class", "content-grid-item col-md-4 center");

            var $image = $("<img>").attr("class", "img-responsive").attr("src", "img/logos/B2B_Bank_Color.png").attr("alt", "altern");
            var $break = $("<br>");
            var $name = $("<h4>").text("aaa");

            $item.append($image, $break, $name);


            }


            // console.log(obj["name"] + " = " + obj["func"]);

        }


    }


    $(".anthony").on("click", function () {
        var someverylongvariable = "hello";
        alert(someverylongvariable);
    })
});
//# sourceMappingURL=scripts.js.map