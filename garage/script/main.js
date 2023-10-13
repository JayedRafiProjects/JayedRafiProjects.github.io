// JavaScript Document

//Service list
var service = ["Recommended maintenance / service."];//0
service.push("Oil and filter change.");//1
service.push("Wipers.");//2
service.push("Engine air filter.");//3
service.push("Cabin air filter.");//4
service.push("Front diff fluid.");//5
service.push("Rear diff fluid.");//6
service.push("Transmission fluid.");//7
service.push("Brake fluid.");//8
service.push("Wheel alignment.");//9
service.push("Flip tires - staggered.");//10
service.push("Rotate tires.");//11
service.push("Rust proofing application.");//12
service.push("Safety inspection.");//13
service.push("Rear brake pads.");//14
service.push("Rear Rotors.");//15
service.push("Front brake pads.");//16
service.push("Front rotors.");//17
service.push("Wheel Alignment.");//18
service.push("Spark plugs.");//19
service.push("Ceramic coating.");//20
service.push("Coolant replaced.");//21
service.push("Battery hold down install.");//22


//all service records of 2014 lexus IS250
var is250Service = [];
is250Service.push(["21 September 2023",110551,"Birchwood Lexus<br/>Winnipeg, Manitoba.CA",[service[1]]]);
is250Service.push(["29 September 2023",111148,"Birchwood Lexus<br/>Winnipeg, Manitoba. CA",[service[22]]]);

//Lst reported millage
function getLastMil250() {
  document.getElementById("mil250").innerHTML = is250Service[is250Service.length-1][1];
}
 
//Next recommended oil change
function nextOil250() {
	var lastOilMil = 0;
	for(let i=is250Service.length-1; i>-1; i--){

		for(let j=0; j<is250Service[i][3].length; j++){
			if(is250Service[i][3][j]==service[1])
			lastOilMil=is250Service[i][1];
			break;
		}
	}
	document.getElementById("oilDue250").innerHTML = lastOilMil+8000;

	
}
function dueInNext8k250() {
  document.getElementById("oilDue250").innerHTML = is250[0][1]+8000;
}


function runAll(){
	getLastMil250();
	nextOil250();
}