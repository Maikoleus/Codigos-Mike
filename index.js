const displayValorAnterior= document.getElementById('val1');
const displayValorActual= document.getElementById('val2');
const botonesNumericos = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayAnterior,displayActual);
botonesNumericos.forEach(boton => {
   boton.addEventListener('click', () => {
     display.escribirNumero(boton.innerHTML);
   });

});