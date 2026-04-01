const libro1 = {
    isbn: 'ISBN-978-9500398407',
    titulo: 'Crimen y castigo',
    autor: 'Fiódor Dostoyevski',
    paginas: 672,

    mostrarLibro() {
        return(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} páginas`);
    }
};

const libro2 = {
    isbn: 'ISBN-978-8491050295',
    titulo: 'Los hermanos Karamázov',
    autor: 'Fiódor Dostoyevski',
    paginas: 1024,

    mostrarLibro() {
        return `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.paginas} páginas`;
    }
};

// Muestro info de los libros
console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());

// Comparo cuál tiene más páginas
if (libro1.paginas > libro2.paginas) {
    console.log(`El libro "${libro1.titulo}" tiene más páginas.`);
} else if (libro2.paginas > libro1.paginas) {
    console.log(`El libro "${libro2.titulo}" tiene más páginas.`);
} else {
    console.log('Ambos libros tienen la misma cantidad de páginas.');
}