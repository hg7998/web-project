import { dogFactsArray } from './dogFacts.js';

let pictureUrl = "https://random.dog/woof.json";
const dogFactContainer = document.getElementById('dogFactContainer');
const dogsOrCats = document.getElementById('dogsOrCatsSubmit');
const dogsOrCatsResponse = document.getElementById('dogsOrCatsResponse');
const cats = document.getElementById('Cats');
const image = document.getElementById('imageContainer');


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};


function loadFact() {
    let k = randomIntFromInterval(0, 434);
    let dogFact = document.createElement('p');

    dogFact.innerText = dogFactsArray[k].fact;
    dogFactContainer.appendChild(dogFact);
}


dogsOrCats.addEventListener('click', function (event) {
    event.preventDefault();

    dogsOrCatsResponse.innerText = 'You will be redirected shortly... '

    let i = 5;

    var timer = setInterval(function () {
        if (i <= 0) {
            clearInterval(timer);
            if (cats.checked) {
                window.location.href = 'catgif.html';
            }
            else {
                window.location.href = 'doggif.html';
            }
        }
        dogsOrCatsResponse.innerText = 'You will be redirected shortly... ' + i;
        i--;
    }, 1000);

    setTimeout(function () {
    }, 6000);
});


window.onload = function () {
    fetch(pictureUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not fetch image");
            }
            return response.json();
        })

        .then(function (data) {
            let imageFormat = data.url.substring(data.url.length - 4);
            if (imageFormat === '.mp4' || imageFormat === 'webm') {
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = true;
                video.src = data.url;
                video.setAttribute('id', 'video');
                image.appendChild(video);
            }
            else {
                const img = document.createElement('img');
                img.src = data.url;
                image.appendChild(img);
            }
        })
        .catch(function () {
            const error = document.createElement('p');
            error.innerText = "Sorry, there was an error loading the image."
            image.appendChild(error);
        })
    
    loadFact();

};


