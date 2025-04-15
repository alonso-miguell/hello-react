
//Destructuring assignment
const character={
    name: 'Aeris',
    age: 22,
    limit: 'Healing wind'
};

//we can extract the properties in variables by using const/let { propName1, propName2} = originalObject

let { name, limit}=character;
console.log(name);
console.log(limit);

//This will print undefined since randomProperty isn't defined in the obj
const{ randomProperty }= character;
console.log(randomProperty);

//We can use this for functions

//useContext is now reserved by react so, adding _ to name's function
const _useContext = (character) =>{
    return {
        characterName: character.name,
        characterAge: character.age,
    };
};
const{ characterName, characterAge} = _useContext(character);

console.log(`useContext - ${ characterName } is ${ characterAge } years old`);

//to pass new or default params

const _useContext2 = (character, weapon= 'Rod') =>{
    return {
        characterName: character.name,
        characterAge: character.age,
        characterWeapon: weapon
    };
};
let{ characterName2, characterWeapon} = _useContext2(character);
console.log(`useContext2 - ${ characterName } 's weapon is ${ characterWeapon }`);

//Note that for reassing elements we need to use () in the whole line
( { characterName2, characterWeapon} = _useContext2(character, 'gloves') );
console.log(`useContext2 - ${ characterName } 's weapon is ${ characterWeapon }`);

//We can also destructure when creating the function
const _useContext3 = ({ name, age, limit, weapon='Rod'}) =>{
    return {
        characterName3: name,
        characterAge3: age,
        characterWeapon3: weapon,
        characterLimit3: limit,
        data: { 
            town: 'Midgar',
            place: 'Church'
         }
    };
};

const { characterName3, characterLimit3, data: { town, place }} = _useContext3(character);

//For data we could have used this too:
//const { characterName3, characterLimit3, data} = _useContext3(character);
//const { town, place } =data;

console.log(` useContext3 - ${ characterName3}'s limit is: ${ characterLimit3 } and her town is ${ town} and place is ${ place }`);
