var myTitle = "Timer";
var el = document.getElementById("myTitle"); 
el.textContent = "The " + myTitle;


var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 3000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}