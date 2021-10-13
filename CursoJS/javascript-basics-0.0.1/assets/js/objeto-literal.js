let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log('Nombre: ', personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coords: ', personaje.coords);
console.log('Coords: ', personaje.coords.lat);

console.log('No de trajes: ', personaje.trajes.length);
console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo'
console.log('Vivo: ', personaje[x]);8

console.log('Ultima Pelicula: ', personaje['ultima-pelicula']);


//Mas Detalles!

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 10000000000;
personaje.casado = false;

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje)
console.log({propiedades, valores});



