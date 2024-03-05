//! Countdown AGC-2024 Script For HomePage
var countDownDate = new Date("March 6, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = days + " days  " + hours + " hours  "
        + minutes + " mins  " + seconds + " seconds";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// Comment Above to use this when timer expires, also comment agc.js script from index.html
// document.getElementById("timer").innerHTML = "Yay🎉 Its Event Day";