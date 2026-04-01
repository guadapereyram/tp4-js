const nombre = prompt('Ingresá el nombre:');
const edad = Number(prompt('Ingresá la edad:'));
const sexo = prompt('Ingresá el sexo (H o M):').toUpperCase();
const peso = Number(prompt('Ingresá el peso:'));
const altura = Number(prompt('Ingresá la altura:'));
const anioNacimiento = Number(prompt('Ingresá el año de nacimiento:'));

const persona = {
    nombre: nombre,
    edad: edad,
    DNI: null,
    sexo: sexo,
    peso: peso,
    altura: altura,
    anioNacimiento: anioNacimiento,

    validarDatos() {
        if (this.nombre.trim() === '') { /*elimino los espacios al inicio y al final con el met trim*/
            return 'Nombre inválido.';
        }

        if (this.edad <= 0) {
            return 'Edad inválida.';
        }

        if (this.anioNacimiento < 1930 || this.anioNacimiento > 2039) {
            return 'Año de nacimiento inválido.';
        }

        if (this.sexo !== 'H' && this.sexo !== 'M') {
            return 'Sexo inválido. Debe ser H o M.';
        }

        if (this.peso <= 0) {
            return 'Peso inválido.';
        }

        if (this.altura <= 0) {
            return 'Altura inválida.';
        }

        return 'Datos válidos.';
    },

    mostrarGeneracion() {
        if (this.anioNacimiento >= 2025 && this.anioNacimiento <= 2039) {
            return 'Pertenece a la Generación Beta. Rasgo característico: Adaptabilidad.';
        } else if (this.anioNacimiento >= 2011 && this.anioNacimiento <= 2024) {
            return 'Pertenece a la Generación Alfa. Rasgo característico: Hiperconectividad.';
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            return 'Pertenece a la Generación Z. Rasgo característico: Irreverencia.';
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            return 'Pertenece a la Generación Y (Millennials). Rasgo característico: Frustración.';
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            return 'Pertenece a la Generación X. Rasgo característico: Obsesión por el éxito.';
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            return 'Pertenece a la generación Baby Boom. Rasgo característico: Ambición.';
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            return 'Pertenece a la Silent Generation. Rasgo característico: Austeridad.';
        } else {
            return 'No se pudo determinar la generación.';
        }
    },

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `${this.nombre} es mayor de edad.`;
        } else {
            return `${this.nombre} no es mayor de edad.`;
        }
    },

    mostrarDatos() {
        return `Nombre: ${this.nombre}
        Edad: ${this.edad}
        DNI: ${this.DNI}
        Sexo: ${this.sexo}
        Peso: ${this.peso}
        Altura: ${this.altura}
        Año de nacimiento: ${this.anioNacimiento}`;
    },

    generaDNI() {
        this.DNI = Math.floor(10000000 + Math.random() * 90000000);
    }
};

console.log(persona.validarDatos());

persona.generaDNI();
console.log(`DNI generado: ${persona.DNI}`);

console.log(persona.mostrarDatos());
console.log(persona.esMayorDeEdad());
console.log(persona.mostrarGeneracion());