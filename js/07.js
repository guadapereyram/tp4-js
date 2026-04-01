const agenda = {
    tamano: 10,
    contactos: [],

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.log('La agenda está llena. No se pueden agregar más contactos.');
            return;
        }

        if (this.existeContacto(contacto)) {
            console.log(`El contacto ${contacto.nombre} ya existe en la agenda.`);
            return;
        }

        this.contactos.push(contacto);
        console.log(`Contacto ${contacto.nombre} añadido correctamente.`);
    },

    existeContacto(contacto) {
        return this.contactos.some(function (item) {
            return item.nombre.toLowerCase() === contacto.nombre.toLowerCase();
        });
    },

    listarContactos() {
        if (this.contactos.length === 0) {
            console.log('La agenda está vacía.');
            return;
        }

        console.log('Lista de contactos:');
        this.contactos.forEach(function (contacto, index) {
            console.log(`${index + 1}. Nombre: ${contacto.nombre} | Teléfono: ${contacto.telefono}`);
        });
    },

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(function (contacto) {
            return contacto.nombre.toLowerCase() === nombre.toLowerCase();
        });

        if (contactoEncontrado) {
            console.log(`Contacto encontrado: ${contactoEncontrado.nombre} - Teléfono: ${contactoEncontrado.telefono}`);
        } else {
            console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
        }
    },

    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(function (item) {
            return item.nombre.toLowerCase() === contacto.nombre.toLowerCase();
        });

        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            console.log(`Contacto ${contacto.nombre} eliminado correctamente.`);
        } else {
            console.log(`No se pudo eliminar. El contacto ${contacto.nombre} no existe en la agenda.`);
        }
    },

    agendaLlena() {
        return this.contactos.length >= this.tamano;
    },

    huecosLibres() {
        const espaciosDisponibles = this.tamano - this.contactos.length;
        console.log(`Quedan ${espaciosDisponibles} hueco(s) libre(s) en la agenda.`);
    }
};

function crearContacto(nombre, telefono) {
    return {
        nombre: nombre,
        telefono: telefono
    };
}

function mostrarMenu() {
    return prompt(
        `Seleccione una opción:
1. Añadir contacto
2. Verificar si existe un contacto
3. Listar contactos
4. Buscar contacto por nombre
5. Eliminar contacto
6. Ver si la agenda está llena
7. Ver huecos libres
8. Salir`
    );
}

const tamanoIngresado = prompt('Ingrese el tamaño de la agenda (deje vacío para usar 10):');

if (tamanoIngresado !== null && tamanoIngresado !== '' && !isNaN(tamanoIngresado)) {
    agenda.tamano = Number(tamanoIngresado);
}

let opcion;

do {
    opcion = mostrarMenu();

    switch (opcion) {
        case '1': {
            const nombre = prompt('Ingrese el nombre del contacto:');
            const telefono = prompt('Ingrese el teléfono del contacto:');

            if (nombre && telefono) {
                const nuevoContacto = crearContacto(nombre, telefono);
                agenda.aniadirContacto(nuevoContacto);
            } else {
                console.log('Nombre y teléfono son obligatorios.');
            }
            break;
        }

        case '2': {
            const nombre = prompt('Ingrese el nombre del contacto a verificar:');

            if (nombre) {
                const contacto = crearContacto(nombre, '');
                if (agenda.existeContacto(contacto)) {
                    console.log(`Sí, el contacto ${nombre} existe en la agenda.`);
                } else {
                    console.log(`No, el contacto ${nombre} no existe en la agenda.`);
                }
            }
            break;
        }

        case '3':
            agenda.listarContactos();
            break;

        case '4': {
            const nombre = prompt('Ingrese el nombre del contacto a buscar:');

            if (nombre) {
                agenda.buscarContacto(nombre);
            }
            break;
        }

        case '5': {
            const nombre = prompt('Ingrese el nombre del contacto a eliminar:');

            if (nombre) {
                const contacto = crearContacto(nombre, '');
                agenda.eliminarContacto(contacto);
            }
            break;
        }

        case '6':
            if (agenda.agendaLlena()) {
                console.log('La agenda está llena.');
            } else {
                console.log('La agenda no está llena.');
            }
            break;

        case '7':
            agenda.huecosLibres();
            break;

        case '8':
            console.log('Saliendo del programa...');
            break;

        default:
            console.log('Opción inválida. Intente nuevamente.');
    }
} while (opcion !== '8');