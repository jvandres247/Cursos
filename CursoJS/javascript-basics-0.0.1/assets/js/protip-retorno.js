function crearPersona(nombre, apellido){
    return {
        nombre,
        apellido
    }
}

const persona = crearPersona('Andres', 'Velazquez');
console.log(persona);


const crearPersona2 = (nombre, apellido) => ({nombre, apellido})
const persona2 = crearPersona2('Andres', 'Velazquez');
console.log(persona2);

function imprimeArgumentos(){
    console.log(arguments);
}
imprimeArgumentos(10, true, false, 'Andres', 'Hola');

const imprimeArgumentos2 = (edad, ...args) =>{
    console.log(edad, args);
    return args;
}

const argumentos = imprimeArgumentos2(10, true, false, 'Andres', 'Hola');

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Andres', 'Hola');
console.log({casado, vivo, nombre, saludo});


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulbuster' ],
};

const imprimeProdiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimeProdiedades(tony)