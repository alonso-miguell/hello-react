//************************ Arrays destructuration

const characters = ['Cloud', 'Tifa', 'Aeris', 'Barret'];

//Destructured elements will follow array's order
const [ char1, char2]= characters;
console.log(char1);
console.log(char2);

//We can skip elements by using ,
const [ , ,char3,char4]= characters;
console.log(char3);
console.log(char4);

//Since an array can hold multiple object's types we can have a variable and a function inside an array

//This function returns an array, first elemet the chars value and second onme a function
const _useState = (character) =>{
    return [ character, 
        () => { console.log('calling function within returned array, character: '+character);}
    ];
};

console.log(_useState('Zack'));

// We can at the same time destructure the returned array
const[ myChar1, setMyChar1 ] = _useState(char1);
//Basically this is a fucntion contained in a var
setMyChar1();
//We can also get acces tot he value
console.log(`Reading value: ${myChar1}`);