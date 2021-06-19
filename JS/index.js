// Here the javascript code for the stopwatch
window.onload = function () {
  // Just the second and ten value of the window mean 00:00 looking that
  var seconds = 00;
  var tens = 00;

  var appendten = document.getElementById("tens");
  var appendsec = document.getElementById("seconds");
  var startbutton = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  // Function that start the stopwatch
  startbutton.onclick = function () {
    console.log(Interval);
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  //Stop the stopwatch

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  // Reset the value of the window

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendten.innerHTML = tens;
    appendsec.innerHTML = seconds;
  };

  //Calculate the starttimee

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendten.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendten.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendsec.innerHTML = "0" + seconds;
      tens = 0;
      appendten.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendsec.innerHTML = seconds;
    }
  }
};
