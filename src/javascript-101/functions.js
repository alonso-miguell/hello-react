/***************** **************** traditional js function *************************/
export function getUser(name){
    return {
        uuid: 123456,
        mail: `${name}@gmail.com`
    };
}

const user=getUser('novus');
console.log(user);

//However we can change getUser by assigning random types to it

//getUser=20;
//console.log(getUser);

//getUser gets redefined so next line throwns an error
//console.log(getUser('novus'));

/********************************* Recommended way for REACT to prevent that issue *************************/
export const fetchUser=function(userName){
    return {
        uuid: 123456,
        mail: `${userName}@gmail.com`
    };
};
//In this way, the function will become a constant and prevent redeclaration
//fetchUser=30; //throwns error
console.log(fetchUser('xion'));

/********************************* Arrow function *************************/
const fetchUser2=(username) => ({ uuid: 45343, mail: `${username}@gmail.com`});
const newUser=fetchUser2('xion');
console.log(newUser);



