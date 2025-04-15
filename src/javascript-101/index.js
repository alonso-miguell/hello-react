const api_key='dLKT8mKiP2xYk5hQt2JB2x9m7zFB0nq5';
const api_url=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

//const request=fetch(url);
const request = async () => {

    try{
    const response= await fetch(api_url);
    console.log(response);
    const json= await response.json();
    const data = json.data;
    console.log(data);
    
    const {url}=json.data.images.original;

    const img=document.createElement('img');
    img.src = url;

    document.body.append( img);
    console.log(url);
    }
    catch(error){
        console.warn('triggering catch block');
        console.warn(error);

    }
};

request();