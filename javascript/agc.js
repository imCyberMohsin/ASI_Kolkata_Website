/*****MENU******/
navbar=document.querySelector('.navbar')
navigation=document.querySelector('.navigation')
menu=document.querySelector('.menu_icon')

menu.addEventListener('click',()=>{
    navigation.classList.toggle('visible');
    navbar.classList.toggle('nav_res');
})

/*** COUNTDOWN ***/
var countDownDate = new Date("Apr 28, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds= Math.floor((distance%(1000*60))/(1000));

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " days  " + hours + " hours  "
  + minutes + " mins  " + seconds + " seconds" ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);