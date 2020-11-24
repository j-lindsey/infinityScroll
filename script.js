const imageContainer = document.getElementById('image-Container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'yYS1Zb2s4l9Ki3cf7STaSYK398TDaPfLrW0NHEBFHM4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for Links & Photos, Add to DOM
function displayPhotosOnSite(){
    // Run function for each object in photosArray
    photosArray.forEach((photo=>{
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, them put both inside imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    }));
}

// Get photos from Unsplash API
async function getPhotosFromApi(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotosOnSite();
    }catch(error){

    }
}


// On Load
getPhotosFromApi();