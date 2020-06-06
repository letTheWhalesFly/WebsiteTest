var day_since_counter = document.getElementById("time_counter_days_since");
var day_counter = document.getElementById("time_counter_days");
var hour_counter = document.getElementById("time_counter_hours");

var yesterday = new Date("February 6 2020 11:00");
var today = new Date();
var tomorrow = new Date("June 27 2020 14:30");


function updateCounter() {
	today = new Date();
	
	var difference_since = today.getTime() - yesterday.getTime()
	difference_since /= 1000;
	
	var days_since = Math.floor(difference_since / 86400);
	day_since_counter.innerHTML = days_since.toString() + " Days";
	
	var difference = tomorrow.getTime() - today.getTime();
	difference /= 1000;
	
	var days = Math.floor(difference / 86400);
	var hours = Math.floor((difference - days * 86400) / 3600);
	
	day_counter.innerHTML = days.toString() + " Days"; 
	hour_counter.innerHTML = hours.toString() + " Hours"; 
	console.log(days, hours);
}


updateCounter();
setInterval(updateCounter, 10000);