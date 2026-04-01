const producto1 = {
    codigo: 'SKU-18',
    nombre: 'cartuchera',
    precio: 7000,

    imprimeDatos(){
        alert(`Código: ${this.codigo}, nombre: ${this.nombre} y precio: ${this.precio}`)
    }
}

const producto2 = {
    codigo: 'SKU-19',
    nombre: 'lapicera',
    precio: 1500,

    imprimeDatos(){
        alert(`Código: ${this.codigo}, nombre: ${this.nombre} y precio: ${this.precio}`)
    }
}

const producto3 = {
    codigo: 'SKU-20',
    nombre: 'mochila',
    precio: 30000,

    imprimeDatos(){
        alert(`Código: ${this.codigo}, nombre: ${this.nombre} y precio: ${this.precio}`)
    }
}

const productos = [producto1, producto2, producto3]

productos[0].imprimeDatos()
productos[1].imprimeDatos()
productos[2].imprimeDatos()
