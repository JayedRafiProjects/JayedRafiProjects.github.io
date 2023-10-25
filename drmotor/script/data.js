// JavaScript Document
d3.csv("https://jayedrafi.com/t/vehicle_information_form.csv", function(data) {
    var myd="";
	
       for (var i = 0; i < data.length; i++) {
        myd+="<tr><td>"+data[i].date+"</td><td>"+data[i].odometer+"</td><td>"+data[i].source+"</td><td>"+data[i].details+"</td></tr>";

    } 

d3.select("table").html(myd);


});