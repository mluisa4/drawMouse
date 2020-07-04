

document.addEventListener("mousedown", iniciaDibujo);
document.addEventListener("mouseup", paraDibujo);
document.addEventListener("mousemove", dibujarMientras);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
var dibuja = false;
var x, y = 0;


//funcion que dibuja la linea luego de recibir el evento mousemove
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo1)
{
  lienzo1.beginPath();
  lienzo1.strokeStyle = color;
  lienzo1.lineWidht = 1;
  lienzo1.moveTo(xinicial, yinicial);
  lienzo1.lineTo(xfinal, yfinal);
  lienzo1.stroke();
  lienzo1.closePath();
}

//funcion que recibe el evento mousedown y activa el dibujo
function iniciaDibujo(evento)
  {
  x = evento.offsetX;
  y = evento.offsetY;
  dibuja = true;

  }
//funcion que dibuja mientras esta activado el mousemove
function dibujarMientras(evento)
{
   if (dibuja == true) {
   dibujarLinea( "Red", x, y, evento.offsetX, evento.offsetY, lienzo);
   x = evento.offsetX;
   y = evento.offsetY;
   console.log(evento);
 }
}

//funcion que recibe el evento mouseup y desactiva el dibujo
function paraDibujo(evento)
  {
    dibujarLinea("Red", x, y, evento.offsetX, evento.offsetY, lienzo);
    x = 0;
    y = 0;
    dibuja = false;
  }
