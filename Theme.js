const themeToggle = document.getElementById('theme-toggle');  

themeToggle.addEventListener('click', () => {  
    document.body.classList.toggle('dark'); 
    document.querySelector('.calculadora').classList.toggle('dark'); 

    // Cambiar el texto del botón dependiendo del tema  
    if (document.body.classList.contains('dark')) {  
        themeToggle.innerText = 'Light Theme'; 
    } else {  
        themeToggle.innerText = 'Dark Theme';   
    }  

    document.querySelectorAll('button').forEach(button => {  
        button.classList.toggle('dark');
    });  
});  

// Aplicar tema claro por defecto al cargar la página  
applyLightTheme();  

function applyLightTheme() {  
    themeToggle.innerText = 'Dark Theme';
}  
  