var myTitle = "Circles";

var el =
    document.getElementById("myTitle"); 
el.textContent = "Hello, " + myTitle;

function calcCircleGeom(radius){
  const pi = Math.PI;
  var area = pi * radius * radius;
  var diameter = radius * 2;
  var circum = 2 * pi * radius;
  var geometeries = [radius, area, diameter, circum];
  return geometeries;
}

var rad1 = calcCircleGeom(13);
var rad2 = calcCircleGeom(3);
var rad3 = calcCircleGeom(25);

var r1 = document.getElementById("rad1");
r1.textContent = "Circle 1: " + rad1;
var r2 = document.getElementById("rad2");
r2.textContent = "Circle 2: " + rad2;
var r3 = document.getElementById("rad3");
r3.textContent = "Circle 3: " + rad3;