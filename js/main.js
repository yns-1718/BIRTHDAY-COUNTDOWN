
var birthday = new Date("2023-9-26"); 
//var countdown = document.getElementById("countdown"); 
var Days = document.getElementById("Days"); 
var Hours = document.getElementById("Hours");
var Minutes = document.getElementById("Minutes"); 
var Seconds= document.getElementById("Seconds"); 


setInterval(function () {
  var now = new Date(); // Current date and time
  var difference = birthday.getTime() - now.getTime(); // Time difference in milliseconds
if (difference <= 0 ) {
  window.location.href = "Birthday.html";
} else {
  var days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Calculate days
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
  var seconds = Math.floor((difference % (1000 * 60)) / 1000); // Calculate seconds

  Days.innerHTML = "<span class='l1-txt2 p-b-4 days'>"+days+"</span><span class='m2-txt2'>Days</span>";
  Hours.innerHTML = "<span class='l1-txt2 p-b-4 hours'>"+hours+"</span><span class='m2-txt2'>Hours</span>"; 
  Minutes.innerHTML = "<span class='l1-txt2 p-b-4 minutes'>"+minutes+"</span><span class='m2-txt2'>Minutes</span>"; 
  Seconds.innerHTML = "<span class='l1-txt2 p-b-4 seconds'>"+seconds+"</span><span class='m2-txt2'>Seconds</span>"; 
   

}


}, 1000);