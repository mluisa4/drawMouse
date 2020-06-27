//var texto= document.getElementById("texto_lineas");
//var boton= document.getElementById("botoncito");
//document.addEventListener("mousedown", dibujoPorMouse);
//document.addEventListener("mousedown", dibujarCorrido);
//document.addEventListener("mousemove", dibujarCorrido);

////trayendo el canvas desde HTML//////////////////
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo1)
{
  lienzo1.beginPath();
  lienzo1.strokeStyle = color;
  lienzo1.moveTo(xinicial, yinicial);
  lienzo1.lineTo(xfinal, yfinal);
  lienzo1.stroke();
  lienzo1.closePath();
}

dibujarLinea("red", 0, 300, 150, 0, lienzo);

//function dibujarCorrido(evento)
//{
  //  var a = evento.clientX;
  //  var b = evento.clientY;
  //  var xf = 0;
  //  var yf = 0;
  //  dibujarLinea("red", a, b, xf, yf, lienzo);
  //  document.write("Esta es la prueba del dibujo corrido");
  //  console.log(lienzo);
  //  console.log(a);
//    console.log(b);

//}
