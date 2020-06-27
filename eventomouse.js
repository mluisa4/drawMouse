

document.addEventListener("mousedown", iniciaDibujo);
document.addEventListener("mouseup", paraDibujo);
document.addEventListener("mousemove", dibujarMientras);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
var dibuja = false;

var ancho = lienzo.width;
var alto = lienzo.height;
var x = ancho/2;
var y = alto/2;
var avance = 10;

//funcion que dibuja la linea luego de recibir el evento mousemove
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo1)
{
  lienzo1.beginPath();
  lienzo1.strokeStyle = color;
  lienzo1.moveTo(xinicial, yinicial);
  lienzo1.lineTo(xfinal, yfinal);
  lienzo1.stroke();
  lienzo1.closePath();
}

//funcion que recibe el evento mousedown y activa el dibujo
function iniciaDibujo(evento)
  {
  dibuja = true;
  }
//funcion que dibuja mientras esta activado el mousemove
function dibujarMientras(evento)
{
   if (dibuja == true){
  //var xin = evento.clientX;
  //var yin = evento.clientY;
//  var xfin = (evento.clientX - evento.offsetX);
  //var yfin = (evento.clientY - evento.offsetY);
  //dibujarLinea("red", xin, yin, xfin, yfin, lienzo);
  //console.log(evento);
  //console.log(dibuja); }

   console.log(evento);

 	 dibujarLinea("Green",x, y,evento.offsetX,evento.offsetY,lienzo);
	 x = evento.layerX;
	 y = evento.layerY;
 }
}

//funcion que recibe el evento mouseup y desactiva el dibujo
function paraDibujo(evento)
  {
    dibuja = false;
  }
