import { fetchUser, getUser } from "./functions";

const user = fetchUser('XionOWO');
console.log(user);



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

        const user2 = getUser('Ana Odette');
        console.log(user2);

    }, 3000);
});

const wrappedPromise = (name, useReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            //similarly we can use reject for errors
            if (useReject == true)
                reject('Some error happened');

            //resolve will return the value, it's just like a return for promises
            const user = getUser(name);
            resolve(user);

        }, 3000);
    });
};


const promiseCall = wrappedPromise('Sephiroth').then((response) => { console.log(`worked fine ${response.mail}`) });
const promiseCall2 = wrappedPromise('Yuffie', true).then((response) => { console.log(`worked fine ${response}`) }).catch((error) => { console.log(`Catch block: ${error}`); });

