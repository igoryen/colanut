$(document).ready(function () {
    console.log("scripts1.js");


    var lenders = [
     {
       "name": "B2B Bank",
       "image": "B2B_Bank_Color.png"
     },
     {
       "name": "Bedrock MIC",
       "image": "Bedrock_MIC_Color.png"
     },
     {
       "name": "CHIP",
       "image": "CHIP_Bank_Color.png"
     },
     {
       "name": "CMLS Financial",
       "image": "CMLS_Color.png"
     },
     {
       "name": "CommunityTrust",
       "image": "Community_Trust_Color.png"
     },
     {
       "name": "Concrete Mortgage Capital",
       "image": "Concrete_Mortgage_Capital_Color.png"
     },
     {
       "name": "Dez Capital",
       "image": "Dez_Capital_Color.png"
     },
     {
       "name": "Eclipse",
       "image": "eclipse.jpg"
     },
     {
       "name": "Effort Trust",
       "image": "Effort_Trust_Black.png"
     },
     {
       "name": "First National Financial",
       "image": "First_National_Color.png"
     },
     {
       "name": "Fisgard",
       "image": "Fisgard_Color.png"
     },
     {
       "name": "Foundry Mortgage Capital",
       "image": "Foundry_Mortgage_capital_Color.png"
     },
     {
       "name": "Ganaraska Financial",
       "image": "Ganaraska_Financial_Color.png"
     },
     {
       "name": "Genworth Financial",
       "image": "Genworth_Color.png"
     },
     {
       "name": "Haventree Bank",
       "image": "heaventree.gif"
     },
     {
       "name": "Homeland Mortgage",
       "image": "homeland_Mortgage_Color.png"
     },
     {
       "name": "HomeEquity Bank",
       "image": "HomeEquity_Color.png"
     },
     {
       "name": "iA Financial Group",
       "image": "Industrial_Alliance_Color.png"
     },
     {
       "name": "IC Savings",
       "image": "IC_Savings_Color.png"
     },
     {
       "name": "ICICI Bank",
       "image": "ICICI_Bank_Color.png"
     },
     {
       "name": "Marathon Mortgage Corp.",
       "image": "marathon.png"
     },
     {
       "name": "MCAP Mortgage",
       "image": "MCAP_Color.png"
     },
     {
       "name": "MCF Mortgage Investment Corp.",
       "image": "MCF_Color.png"
     },
     {
       "name": "Nationwide Appraisal Services",
       "image": "Nationwide_Appraisal_Color.png"
     },
     {
       "name": "Northview Financial Services",
       "image": "Northview_financial_services.png"
     },
     {
       "name": "Parama Credit Lithuanian",
       "image": "Parama_Color.png"
     },
     {
       "name": "Power-CAN Financial Services Inc.",
       "image": "power-can.gif"
     },
     {
       "name": "RMG Mortgages",
       "image": "RMG_Color.png"
     },
     {
       "name": "RND Capital",
       "image": "RND_Capital.png"
     },
     {
       "name": "The Royal Bank of Canada",
       "image": "logo-rbc.png"
     },
     {
       "name": "Scotia Bank",
       "image": "ScotiaBank_Color.png"
     },
     {
       "name": "Silver Fund",
       "image": "Silver_Fund_Color.png"
     },
     {
       "name": "Street Capital",
       "image": "Street_Capital_Color.png"
     },
     {
       "name": "TD/Canada Trust",
       "image": "TD_Color.png"
     },
     {
       "name": "The Genesis Group",
       "image": "Genesis_group_Color.png"
     },
     {
       "name": "The Mortgage Providers",
       "image": "tmp.png"
     },
     {
       "name": "Winestone Laval & Co.",
       "image": "winestone-laval.jpg"
     }
     // ,
     // {
     //   "name": "test1.",
     //   "image": "test1"
     // }
     // ,
     // {
     //   "name": "test2.",
     //   "image": "test2"
     // }
     // ,
     // {
     //   "name": "test3.",
     //   "image": "test3"
     // }
    ];
    
    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-38.php
    var is_whole = function(n) {
        var result = (n - Math.floor(n)) == 0; 
        // console.log("with " + n + " >> " + result)
        return result;
        // if (result)
        //     return 'Number has a decimal place.';
        // else
        //     return 'It is a whole number.';
    }



    var printout_lenders = function (ary, elid) {

        var $target = $("#" + elid);
        // console.log("ary.length: " + (ary.length-1))
        // var group_of_three = [];
        for (var i = 0, l = ary.length; i < l; i++) {

            // var aaa = i / 3;

            // var n = 0;
            var lender = ary[i];

            
            
            console.log( i + " % 3 = " + (i % 3));

            var group_member = i % 3;

            // var $first = $("<div>")
            

            var $item = $("<div>").attr("class", "content-grid-item col-md-4 center");

            var $image = $("<img>").attr("class", "img-responsive").attr("src", "img/logos/" + lender.image).attr("alt", "The logo of " + lender.name);
            var $break = $("<br>");
            var $name = $("<h4>").text( lender.name);
            $item.append( $image, $break, $name );




            switch(group_member) {
                case 0:
                    var $row = $("<div>").attr("class", "row content-grid-row");
                    $row.append( $item );
                    // if this is the last element of the array
                    if (i == (ary.length-1) ) {
                        $target.append( $row ); 
                    }
                    break;
                case 1: 
                    $row.append( $item );
                    // if this is the last element of the array
                    if (i == (ary.length-1) ) {
                        $target.append( $row ); 
                    }
                case 2:
                    $row.append( $item );
                    $target.append( $row );   
                    break;
            }

            // console.log(i + "/3 = " + i/3);
            
            




            

            

           

            


            


            




            



            

            // group_of_three.push( $item );
            // console.log( "group_of_three: " + group_of_three.length );

            // if (group_of_three.length == 2) {

            //     for (var i = group_of_three.length - 1; i >= 0; i--) {
            //         $row.append( group_of_three[i] );
            //     }
            //     $target.append( $row );
            //     group_of_three = [];
            // }
            // else {
            //     // console.log(group_of_three.length);
            // }

            
            // $row.append( $item ); // <----

            

            // if ( is_whole( aaa ) ) {
            //     $item.addClass("test1");

                

            //     if (i == 0) {
            //         console.log( "first! ");
            //         // $item.addClass("test1");
            //     }
            //     if (i == (ary.length-1) ) {
            //         console.log(" last!");
                    
            //     }
            //     console.log("------ +++++ " +  i + " " + obj.name);

            // }
            // else {
            //     $item.addClass("test2");
            //     // group_of_three.push( $item );
            //     // $row.append( $item );// <-------
            // }



            





            // console.log(obj["name"] + " = " + obj["func"]);

        }


    }

    printout_lenders( lenders, "lenders_list")


    $(".anthony").on("click", function () {
        var someverylongvariable = "hello";
        alert(someverylongvariable);
    })
});
//# sourceMappingURL=scripts.js.map