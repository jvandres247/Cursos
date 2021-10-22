let a = 10;

if (a >= 10) {
    console.log("A es mayor o igual a 10");
} else {
    console.log("A es menor a 10");
}

console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo, 1: Lunes, 2: Martes...

if (dia === 0) {
    console.log("Domingo");
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}

//Sin usar If/Else o switch, unicamente objetos, imprimir el dia de la semana
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}
console.log(diasLetras[dia] || 'Dia no definido');
