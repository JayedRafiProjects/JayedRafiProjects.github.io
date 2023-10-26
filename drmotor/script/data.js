// JavaScript Document
d3.csv("https://jayedrafi.com/drmotor/data/JTHCF1D28E5008692.csv", function(data) {
    var myd="<tr><th>Date</th><th>Odometer</th><th>Source</th><th>Details</th></tr>";
	
       for (var i = 0; i < data.length; i++) {
        myd+="<tr><td>"+data[i].date+"</td><td>"+data[i].odometer+"</td><td>"+data[i].source+"</td><td>"+data[i].details+"</td></tr>";

    } 

d3.select("#history").html(myd);
d3.select("#vin").html(data[0].vin);
d3.select("#plate").html(data[0].plate+" ("+data[0].location+")");
});