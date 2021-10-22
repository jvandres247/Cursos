const regresaTrue = () => {
    console.log('regresa true');
    return true
}

const regresaFalse = () => {
    console.log('regresa false');
    return false
}

console.warn('Not o la negacion');
console.log(true); //true
console.log(!true); //false
console.log(false); //false
console.log(!false); //true

console.log(!regresaTrue()); //false
console.log(!regresaFalse()); //true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //true

console.log('================');
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('======== && ========');
regresaFalse() && regresaTrue()

console.log('4 Condiciones: ', true && true && true && false);

console.warn('OR'); //true si un elemento es true
console.log(true || true);
console.log(false || true);

console.log(regresaTrue() || regresaFalse());
console.log('4 Condiciones: ', true || true || true || false);

console.warn('Asignaciones');

const soyUndefinde = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo!' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso'

console.log({ a1, a2, a3 });