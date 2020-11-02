var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50, 10);
lienzo.lineTo(250, 2);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "orange";
lienzo.moveTo(180, 10);
lienzo.lineTo(290, 200);
lienzo.stroke();
lienzo.closePath();