//Unsplash API
const count = 10;
const apiKey = '6GsXbIRih9ipyhzcj72PuU_8GxGVc7_ca7i7RTU4BfY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Get photos from Unsplash API 
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
    } catch (error){
        //Catch Error Here
    }
}

//On Load
getPhotos();