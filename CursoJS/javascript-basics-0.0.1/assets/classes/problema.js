const andres = {
    nombre: 'Andres',
    edad: 28,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const melissa = {
    nombre: 'Melissa',
    edad: 35
}

//andres.imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
console.log((maria));
maria.imprimir();