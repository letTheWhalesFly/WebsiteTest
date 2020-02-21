var day_counter = document.getElementById("time_counter_days");
var hour_counter = document.getElementById("time_counter_hours");

var today = new Date();
var then = new Date("April 10 2020 14:30");


function updateCounter() {
	today = new Date();
	
	var difference = then.getTime() - today.getTime();
	difference /= 1000;
	
	var days = Math.floor(difference / 86400);
	var hours = Math.floor((difference - days * 86400) / 3600);
	
	day_counter.innerHTML = "Days: " + days.toString(); 
	hour_counter.innerHTML = "Hours: " + hours.toString(); 
	console.log(days, hours);
}


updateCounter();
setInterval(updateCounter, 10000);