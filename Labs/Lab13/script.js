var el =
    document.getElementById("myTitle"); 
el.textContent = "Flight Timings";

window.addEventListener("load", function() {
    var flights = [
        "ASA1077",
        "A319",
        "Washington Dulles (KIAD)",
        "San Francisco (KSFO)",
        "Wed 07:32PM EST",
        "Wed 10:10PM PST",
        "ASA1088",
        "A320",
        "San Francisco (KSFO)",
        "Washington Dulles (KIAD)",
        "Wed 03:58PM PST ",
        "Wed 11:28PM EST",
        "ASA1097",
        "A320",
        "Washington Dulles (KIAD)",
        "Los Angeles (KLAX)",
        "Wed 05:06PM EST",
        "Wed 07:24PM PST",
        "ASA11",
        "B739 ",
        "Newark Liberty (KEWR)",  
        "Seattle-Tacoma (KSEA)",
        "Wed 05:00PM EST  ",
        "Wed 07:27PM PST",
        "ASA1113   ",
        "A320  ",
        "Will Rogers World (KOKC)",     
        "Seattle-Tacoma (KSEA)",
        "Wed 05:40PM CST  ",
        "Wed 07:11PM PST",
    ];
  
    var row = 6,
      html = "<table><tr>";
  
    for (var i = 0; i < flights.length; i++) {
      html += "<td>" + flights[i] + "</td>";
      // Break into next row
      var next = i + 1;
      if (next % row == 0 && next != flights.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr></table>";
  
    document.getElementById("flightsTable").innerHTML = html;
  });