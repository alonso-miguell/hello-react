const nombre='Fulanito';
let mutable='fulano 2';
mutable='otro nombre';

const personaje={
    nombre:'Cloud',
    arma:'Buster sword',
    limit: 'Octo-slash',
    edad: 20,
    materiaOrder: {
        fire: 1,
        ice: 2,
        heal: 3
    }
};

console.log('********** TABLE *********************');

console.table(personaje);
console.log('********** expresion *********************');

console.log({personaje});
console.log('************ COPYING OBJECT, SAME REFERENCE*******************');
//This line of code will reference to previous object instead of creating a new copy
const personajeCopia=personaje;
personajeCopia.arma='Gloves';
console.table(personajeCopia);
console.table(personaje);
console.log('************ CORRECTLY COPIED NEW OBJECT*******************');

//This line of code will correctly create a new copy of the value and change some property
//const personaje3={...personaje,arma:'Gattling-gun'};

//Cand o the same thing by just copying the ovbject and changing property afterwards
const barret={...personaje};
barret.arma='Gattling-gun';
barret.nombre='Barret';
barret.materiaOrder.fire=3; //this will overwrite the same reference in Cloud
console.table(barret);
console.table(personaje);
console.log('*******************************');

console.log(` ${nombre} ${mutable} `);
console.log('Propiedad: '+personaje.poder);

/** However using ... (spread operator) doesn't include object properties within other objects...
 * for that we should use structuredClone
 */

const vincent=structuredClone(personaje);
vincent.nombre='Vincent';
vincent.materiaOrder.fire=2; //this won't overwrite the same reference in Barrety since we used structuredClone

console.log({vincent});