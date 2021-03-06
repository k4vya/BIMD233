var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var h = 600;
var w = 600;
var m = 20;

var x = 100,
  y = 100,
  radius = 80,
  angle = 2 * Math.PI;
context.arc(x, y, radius, 0, angle);
context.lineWidth = 5;
context.stroke();

// ==============================

var x2 = 500,
  y2 = 500;
context.moveTo(x2+radius,y2)
context.arc(x2, y2, radius, 0, angle);
context.lineWidth = 5;
context.stroke();


context.moveTo(m, h / 3);
context.lineTo(w - m, h / 3);
context.lineWidth = 5;
context.stroke();
context.moveTo(m, (2 * h) / 3);
context.lineTo(w - m, (2 * h) / 3);
context.lineWidth = 5;
context.stroke();
context.moveTo(w / 3, m);
context.lineTo(w / 3, w - m);
context.lineWidth = 5;
context.stroke();
context.moveTo((2 * w) / 3, m);
context.lineTo((2 * w) / 3, w - m);
context.lineWidth = 5;
context.stroke();
context.moveTo(w / 3 + m, w / 3 + m);
context.lineTo(w / 2 + 4 * m, w / 2 + 4 * m);
context.lineWidth = 5;
context.stroke();
context.moveTo(h / 3 + m, w / 2 + 4 * m);
context.lineTo(w / 2 + 4 * m, h / 3 + m);
context.lineWidth = 5;
context.stroke();