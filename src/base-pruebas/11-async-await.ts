

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

import {Gif, GiphyRandomResponse} from "../data/giphy.response";


export const getRandomGifUrl = async () =>{
    try {
        const apiKey = 'dLKT8mKiP2xYk5hQt2JB2x9m7zFB0nq5';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

        // we force data to have GiphyRandomResponse interface
        const {data}: GiphyRandomResponse  = await resp.json(); //can also be written like this
        // const { data }  = await resp.json() as GiphyRandomResponse;

        console.log(data);

        const {url} = data.images.original;
        return url;
    } catch (error) {
        // manejo del error
        console.error(error)
    }
};

export const setImagen = (url) => {
        console.log(url);

        const img=document.createElement("img");
        img.src=url;
        document.body.append(img);
};

// getRandomGifUrl().then( (url) => setImagen(url)); //can also be written like this
getRandomGifUrl().then( setImagen);


