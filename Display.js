class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayAnterior = displayValorAnterior;
        this.displayActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.valorActual = "";
        this.valorAnterior = "";
        this.Operacion = undefined;
        this.signos = {
            suma: '+',
            resta: '-',
            multi: '*',
            div: '/',
        }
    }

    escribirNumero(numero) {
        if (numero =='.' && this.valorActual.includes('.')){return}
        this.valorActual = this.valorActual.toString() + numero.toString(); // Concatenar los números en el display
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayActual.textContent = this.valorActual;  
        this.displayAnterior.textContent =  `${this.valorAnterior} ${this.signos[this.Operacion] || ''} `;
    }
borrar(){
       this.valorActual = this.valorActual.toString().slice(0,-1);
       this.imprimirValores();
}


borrarTodo(){

    this.valorActual ="";
    this.valorAnterior="";
    this.Operacion = undefined;
    this.imprimirValores();
}
calcular(){
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

     if( isNaN( valorActual) || isNaN(valorAnterior)) return
     this.valorActual = this.calculadora[ this.Operacion](valorAnterior, valorActual);

}

computar(tipo){
   this.Operacion !== 'igual' && this.calcular(); 
   this.Operacion = tipo;
   this.valorAnterior = this.valorActual || this.valorAnterior; 
   this.valorActual ="";
   this.imprimirValores();
}
}
