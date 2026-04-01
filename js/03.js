const rectangulo = {
    alto: 20,
    ancho: 30,

/*Métodos para modificar propiedades: */
    modificarAlto(alto){ 
        if (alto <= 0){ /*1-Confirmo que sea un alto válido */
            alert('El alto debe ser mayor a 0.')
        }else{
            this.alto = alto /*2-Si está ok el valor, recibe un nuevo valor en el parámetro alto y lo asigna a la propiedad del objeto: */
        }
    },
    modificarAncho(ancho){ 
        if (ancho <= 0){ /*1-Confirmo que sea un ancho válido */
            alert('El ancho debe ser mayor a 0.')
        }else{
            this.ancho = ancho /*2-Si está ok el valor, recibe un nuevo valor en el parámetro ancho y lo asigna a la propiedad del objeto: */
        }
    },
/*Métodos para mostrar propiedades: */
    altoActual(){
        return(`El alto es: ${this.alto}.`)
    },

    anchoActual(){
        return(`El ancho es: ${this.ancho}.`)
    },

/*Método para calcular el área: */
    calcularArea(){
        return(`El area es: ${this.alto * this.ancho}.`)
    },

/*Método para calcular el perímetro: */
    calcularPerimetro(){
        return(`El perimetro es: ${2 * (this.alto + this.ancho)}.`)
    }
}

console.log(rectangulo.altoActual());
console.log(rectangulo.anchoActual());
console.log(rectangulo.calcularArea());
console.log(rectangulo.calcularPerimetro());

rectangulo.modificarAlto(4);
rectangulo.modificarAncho(8);

console.log(rectangulo.altoActual());
console.log(rectangulo.anchoActual());
console.log(rectangulo.calcularArea());
console.log(rectangulo.calcularPerimetro());