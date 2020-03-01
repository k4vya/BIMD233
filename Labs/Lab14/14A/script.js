var el =
    document.getElementById("myTitle"); 
el.textContent = "5 Day Forecast for Seattle";

window.addEventListener("load", function() {
    var weather = [
        "Friday",
        "May 13",
        "High: 82 ",
        "Low: 55",
        "Sunny",
      "Precip: 46%",
        "Saturday",
        "May 14",
        "High: 75",
        "Low: 52",
        "Cloudy",
      "Precip: 54%",
        "Sunday",
        "May 15",
        "High: 69",
        "Low: 52",
        "Showers",
      "Precip: 70%",
        "Monday",
        "May 16 ",
        "High: 69",  
        "Low: 48",
        "Cloudy",
      "Precip: 62%",
        "Tuesday",
        "May 17",     
        "High: 68",
        "Low: 48",
        "Showers",
      "Precip: 57%"
    ];
  
    var row = 6,
      html = "<table><tr>";
  
    for (var i = 0; i < weather.length; i++) {
      html += "<td>" + weather[i] + "</td>";
      var next = i + 1;
      if (next % row == 0 && next != weather.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr></table>";
  
    document.getElementById("flightsTable").innerHTML = html;
  });