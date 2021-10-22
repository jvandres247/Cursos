
class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias!'
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';


    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase= 'Sin Frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }   


    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorrita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`Soy ${this.codigo} y mi frase es ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'SpiderMan', 'Tu amigable vecino');
const ironMan = new Persona('Tony Stark', 'Iron Man', 'Yo soy IronMan');




// spiderman.quienSoy();
//ironMan.quienSoy();

spiderman.setComidaFavorita = 'Pizza'

// console.log(spiderman.getComidaFavorrita);
// console.log(spiderman);

// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo!';
console.log(Persona.propiedadExterna);
console.log(Persona);
