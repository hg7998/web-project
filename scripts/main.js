document.getElementById('dogsOrCatsSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    if (document.getElementById('Cats').checked) {
        document.getElementById('dogsOrCatsResponse').innerText = 'Wrong choice.'

        let i = 5;
        document.getElementById('dogsOrCatsResponse').innerText = 'Wrong choice. You will be redirected shortly... ';

        var timer = setInterval(function () {
            if (i <= 0) {
                clearInterval(timer);
            }
            document.getElementById('dogsOrCatsResponse').innerText = 'Wrong choice. You will be redirected shortly... ' + i;
            i--;
        }, 1000);

        setTimeout(function () {
            /*window.close();*/
        }, 6000);
    }
    else if (document.getElementById('Dogs').checked) {
        document.getElementById('dogsOrCatsResponse').innerText = 'You made the right choice!'
    }
});

let pictureUrl = "https://random.dog/woof.json";
let factUrl = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";

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
                video.setAttribute('id','video');
                document.getElementById('imageContainer').appendChild(video);
            }
            else {
                const img = document.createElement('img');
                img.src = data.url;
                document.getElementById('imageContainer').appendChild(img);
            }
        })
        .catch(function () {
            const error = document.createElement('p');
            error.innerText = "Sorry, there was an error loading the random fact."
            document.getElementById('imageContainer').appendChild(error);
        })
            fetch(factUrl) 
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("Could not fetch fact");
                    }
                    return response.json();
                })
                .then(function (obj) {
                    const fact = document.createElement('p');
                    fact.innerText = obj.fact;
                    document.getElementById('dogFactContainer').appendChild(fact);
                })
                .catch(function () {
                    const error = document.getElementById('error');
                    error.innerText = "Sorry, there was an error getting the image."
                    document.getElementById('dogFactContainer').appendChild(error);
                })
};

