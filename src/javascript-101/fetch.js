const api_key='dLKT8mKiP2xYk5hQt2JB2x9m7zFB0nq5';
const url=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

const request=fetch(url);
request
    .then((response)=>response.json())
    .then( (json) => {
        console.log(json.data);
        const {url}=json.data.images.original;

        const img=document.createElement('img');
        img.src = url;

        document.body.append( img);

    })
    .catch( (error) => {
        console.warn('triggering catch block');
        console.warn(error);
    });
