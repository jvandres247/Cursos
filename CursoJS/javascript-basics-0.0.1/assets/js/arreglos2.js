let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger'];

console.log('Largo', juegos.length);

let ultimo = juegos[juegos.length -1];

console.log(ultimo);

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});


let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});

//Pasar valores por referencia

