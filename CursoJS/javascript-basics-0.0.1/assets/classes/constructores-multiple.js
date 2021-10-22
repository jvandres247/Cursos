class Persona {


    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }


    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }   

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const nombre1= 'Andres',
      apellido1 = 'Velazquez'
      pais1 = 'Mexico'

const juan = {
    nombre: 'Juan',
    apellido: 'Cruz',
    pais: 'Mexico'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(juan);



persona1.getInfo()
persona2.getInfo()