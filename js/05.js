const persona = {
    nombre: 'Fabricio',
    edad: 25,
    DNI: null,
    sexo: 'M',
    peso: 60,
    altura: 1.65,
    anioNacimiento: 2000,

    mostrarGeneracion() { /*identifico la generación según anioNacimiento*/
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

    esMayorDeEdad() { /*verifico si la edad es 18 o más*/
        if (this.edad >= 18) {
            return `${this.nombre} es mayor de edad.`;
        } else {
            return `${this.nombre} no es mayor de edad.`;
        }
    },

    mostrarDatos() { /*devuelve toda la información del objeto*/
        return `Nombre: ${this.nombre}
Edad: ${this.edad}
DNI: ${this.DNI}
Sexo: ${this.sexo}
Peso: ${this.peso}
Altura: ${this.altura}
Año de nacimiento: ${this.anioNacimiento}`;
    },

    generaDNI() { /*creo un número aleatorio de 8 cifras y lo guardo en DNI. */
        this.DNI = Math.floor(10000000 + Math.random() * 90000000);
    }
};

persona.generaDNI();

console.log(persona.mostrarDatos());
console.log(persona.esMayorDeEdad());
console.log(persona.mostrarGeneracion());