
var drawFileStatusChart = function( prc_done ){
    // var prc_done = 75;
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'pie'
        },
        title: {
            text: null
        },
        colors: [ '#ccc', '#333'],
        tooltip: { enabled: false },        
        plotOptions: {
            pie: {
                innerSize: '70%',
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false, // disable callouts
                }
            }
        },
        series: [{
            data: [
                [prc_done],
                [100-prc_done],
            ]
        }]
    },
                                     
    function(chart) { // on complete
        var textX = chart.plotLeft + (chart.plotWidth  * 0.5);
        var textY = chart.plotTop  + (chart.plotHeight * 0.5);

        var span = '<span id="pieChartInfoText">';
        if( prc_done != 100) {
            span += '<span>'+ prc_done +'<span class="prc-sign">%</span></span><br>';
            span += '<span>complete</span>';
        }
        else {
            span += '<span class="done">All done!</span>';
        }        
        span += '</span>';

        $("#addText").append(span);
        span = $('#pieChartInfoText');
        span.css('left', textX + (span.width() * -0.5));
        span.css('top', textY + (span.height() * -0.5));
    });
}

$( document ).ready( function(){ 
    drawFileStatusChart(78);
});
