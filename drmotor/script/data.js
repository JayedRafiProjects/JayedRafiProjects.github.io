// JavaScript Document
d3.csv("https://jayedrafi.com/drmotor/data/JTHCF1D28E5008692.csv", function(data) {
    var myd="<tr><th>Date</th><th>Odometer</th><th>Source</th><th>Details</th></tr>";
	var vinNumber = data[0].vin;
	var licensePlate = data[0].plate;
	var location = data[0].location;
	var lastKm = data[data.length-1].odometer;
	var wheelSize = data[0].wsize;
	var wheelMaterial = data[0].wmaterial;
	var wheelSetup = data[0].wsetup;
	var tire = data[0].tire;
	
       for (var i = 0; i < data.length; i++) {
        myd+="<tr><td>"+data[i].date+"</td><td>"+data[i].odometer+"</td><td>"+data[i].source+"</td><td>"+data[i].details+"</td></tr>";

    } 

d3.select("#history").html(myd);
d3.select("#vin").html(vinNumber);
d3.select("#plate").html(licensePlate+" ("+location+")");
d3.select("#lastKm").html(lastKm);
d3.select("#wheel").html(wheelSize+" inch / "+wheelMaterial+" / "+wheelSetup);
d3.select("#tire").html(tire);
});