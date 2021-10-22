//Todos los primitivos se pasan por valor
//Todos los objetos se pasan por referencia


//REST: ... cuando esta dentro de los parentesis como argumento en un arrow function 
//y uno todos los argumentos en una sola variable y los transforma en un arreglo
//SPREAD: ... cuando se usa fuera y simboliza, separa los elementos y rompe la referencia de js 

let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'juan' }
let ana = { ...juan };

ana.nombre + 'ana';
console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'tony'
    return persona;
}

let peter = { nombre: 'Peter' }
let tony = cambiaNombre(peter)

console.log({ peter, tony });

//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');


console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('mango');

console.table({ frutas, otrasFrutas })
