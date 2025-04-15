const nombre='Fulanito';
let mutable='fulano 2';
mutable='otro nombre';

const personaje={
    nombre:'Cloud',
    arma:'Buster sword',
    limit: 'Octo-slash',
    edad: 20
};

console.table(personaje);
console.log('*******************************');
//This line of code will reference to previous object instead of creating a new copy
const personajeCopia=personaje;
personajeCopia.arma='Gloves';
console.table(personajeCopia);
console.table(personaje);
console.log('*******************************');

//This line of code will correctly create a new copy of the value and change some property
//const personaje3={...personaje,arma:'Gattling-gun'};

//Cand o the same thing by just copying the ovbject and changing property afterwards
const personaje3={...personaje};
personaje3.arma='Gattling-gun';
console.table(personaje3);
console.table(personaje);
console.log('*******************************');

console.log(` ${nombre} ${mutable} `);
console.log('Propiedad: '+personaje.poder);