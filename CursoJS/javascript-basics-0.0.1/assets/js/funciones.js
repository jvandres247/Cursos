//Funcion tradicional
function saludar(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 10;
}

const retornoDeSaludar = saludar("Andres!", 28, "Soltero", 'Mexico');
console.log({retornoDeSaludar});

//Funcion anonima 
const saludar2 = function( nombre ){
    console.log('Hola Mundo 2 ' + nombre);
}


saludar2("Andres2");

const saludarFlecha = () => {
    console.log('Hola Felcha!');
}

saludarFlecha();


const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha2("Flecha");

//Retorno de funciones

function sumar(a,b){
    return a + b;
}
console.log(sumar(1,2));

const sumar2 = (a,b) =>{
    return a + b;
}
console.log(sumar2(2,2));

const sumar3 = (a,b) =>  a + b;
console.log(sumar3(3,2));

function getAleatorio() {
    return Math.random();
}
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());