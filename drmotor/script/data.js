// JavaScript Document

//temp data
var s = new Array();
s.push("Serviced / recommended service performed.");//0
s.push("Maintenance inspection performed.");//1
s.push("Safety inspection performed.");//2
s.push("Wiper replaced.");//3
s.push("Engine oil and filter replaced.");//4
s.push("Transmission fluid replaced.");//5
s.push("Brake fluid replaced.");//6
s.push("Cbin air filter replaced.");//7
s.push("Engine air filter replaced.");//8
s.push("suspension checked.");//9
s.push("Rear suspension checked.");//10
s.push("Rear suspension checked.");//11
s.push("Brakepad replaced.");//12
s.push("Front brakepad replaced.");//13
s.push("Rear brakepad replaced.");//14
s.push("Differential fluid changed.");//15
s.push("Wheel alignment performed.");//16
s.push("Rotate tires.");//17
s.push("Flip tires inside out.");//18
s.push("Ceramic coating performed.");//19
s.push("Rust proofing performed.");//20
s.push("Install battery hold down.");//21
s.push("Wheel bearings / hubs replaced.");//22
s.push("Front wheel bearings / hubs replaced.");//23
s.push("Rear wheel bearings / hubs replaced.");//24
s.push("Rim refinish / fix");//25
s.push("Replace tires");//26
s.push("Serviced / recommended service performed.");//28


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
	var ownername = data[0].owner;
	var owneremail = data[0].email;
	var lastOilChange = 0;
	
	
       for (var i = 0; i < data.length; i++) {
		   var serviceDetails="";
		   //temp prog for service code
		   var serviceCode = data[i].details.split(",");
		   
		   //last oil change and service record
		   for(var x=0; x<serviceCode.length; x++){
			   if(serviceCode[x]=="4"){
				   lastOilChange=data[i].odometer;
			   }
			   
			   serviceDetails+=s[parseInt(serviceCode[x])]+"<br>";
		   }
		   
		   
		   
        myd+="<tr><td>"+data[i].date+"</td><td>"+data[i].odometer+"</td><td>"+data[i].source+"</td><td>"+serviceDetails+"</td></tr>";

    } 
	
	//tire recommendation
	var winter = "&#x2717";//false
	var fall = "&#x2717";//false
	var summer = "&#x2717";//false
	
	if(tire=="All weather"){
		winter = "&#x2713";//true
		fall = "&#x2713";//true
		summer = "&#x2713";//true
	}
	else if(tire =="Winter"){
		winter = "&#x2713";//true
		
	}
	else if(tire == "Summer"){
		summer = "&#x2713";//true
		
	}
	else if(tire == "All season"){
		summer = "&#x2713";//true
		fall = "&#x2713";//true
	}
	
	var setupRec = "";
	//staggered setup or square setup
	if(wheelSetup == "Staggered"){
		setupRec = "Flip tires inside out or swap them left to right in every 6 months or every 10000 KM."
	}
	if(wheelSetup == "Square"){
		setupRec = "Rotate your tires in every 6 months or every 10000 KM."
	}
	
	

d3.select("#history").html(myd);
d3.select("#vin").html(vinNumber);
d3.select("#plate").html(licensePlate+" ("+location+")");
d3.select("#lastKm").html(lastKm+" KM");
d3.select("#wheel").html(wheelSize+" inch / "+wheelMaterial+" / "+wheelSetup);
d3.select("#tire").html(tire);
d3.select("#wintertire").html(winter);
d3.select("#falltire").html(fall);
d3.select("#summertire").html(summer);
d3.select("#rotaterec").html(setupRec);
d3.select("#ownername").html(ownername);
d3.select("#owneremail").html(owneremail);
d3.select("#lastoil").html(parseInt(lastOilChange)+8000);

});