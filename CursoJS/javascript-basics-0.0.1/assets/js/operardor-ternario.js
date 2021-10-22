/**
 * Dias de la semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy...
const dia = 1 //0:domingo, 1:lunes...
const horaActual = 11

let horaApertura;
let mensaje; //Abierto, Cerrado, Hoy abrimos a las xx

// if (dia === 0 || dia === 6) {
if ([0, 6].includes(dia)) {
    console.log('Fin de Semana');
    horaApertura = 9
} else {
    console.log('Entre Semana');
    horaApertura = 11
}

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

if (horaActual >= horaApertura) {
    mensaje = 'Esta Abierto'
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`
}

mensaje = (horaActual >= horaApertura) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`
console.log({ horaApertura, mensaje });