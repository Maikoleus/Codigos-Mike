document.addEventListener("DOMContentLoaded", () => {
  const displayValorAnterior = document.getElementById('val1');  
  const displayValorActual = document.getElementById('val2');  
  const botonesNumericos = document.querySelectorAll('.numero');  
  const botonesOperadores = document.querySelectorAll('.operador');  
  const botonBorrar = document.getElementById('borrar'); // Obtiene el botón de borrar
  const botonBorrarTodo = document.getElementById('borrarTodo');

  const display = new Display(displayValorAnterior, displayValorActual);  

  //  para escribir números
  botonesNumericos.forEach(boton => {  
      boton.addEventListener('click', () => {  
          display.escribirNumero(boton.innerText);
      });  
  });

  //  para borrar
  botonBorrar.addEventListener('click', () => {
      display.borrar();
  });
  botonBorrarTodo.addEventListener('click', () => {
    display.borrarTodo();
});

botonesOperadores.forEach(boton =>{
  boton.addEventListener('click', () => display.computar(boton.value))
});
});