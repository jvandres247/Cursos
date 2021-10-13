const arr = new Array(10);
console.log(arr);

const arr2 = []
console.log(arr2);


let videoJuegos = ['Mario 3', 'Megaman', 'Zelda'];
console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true, 
    123, 
    'Andres', 
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Ligth']
];

console.log(arregloCosas);
console.log(arregloCosas[7]);
console.log(arregloCosas[7][3]);

let megaman = arregloCosas[7];

console.log(megaman[3]);