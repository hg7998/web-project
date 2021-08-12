let dogPictureUrl = "https://random.dog/woof.json";

document.getElementById('dogFactsAndPicturesButton').addEventListener('click', function (event) {

    fetch(dogPictureUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not fetch image");
            }
            return response.json();
        })
        .then(function (data) {

            if (document.getElementById("dogPictureOne").hasChildNodes) {
                var parentNode = document.getElementById("dogPictureOne");
                var childNode = parentNode.firstChild;
                parentNode.removeChild(childNode);
            }

            let imageFormat = data.url.substring(data.url.length - 4);
            if (imageFormat === '.mp4' || imageFormat === 'webm') {
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = true;
                video.src = data.url;
                video.setAttribute('id', 'video');
                document.getElementById('dogPictureOne').appendChild(video);
            }
            else {
                const img = document.createElement('img');
                img.src = data.url;
                document.getElementById('dogPictureOne').appendChild(img);
            }
        })
        .catch(function () {
            const error = document.createElement('p');
            error.innerText = "Sorry, there was an error loading the image."
            document.getElementById(dogPictureThree).appendChild(error);
        });

    fetch(dogPictureUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not fetch image");
            }
            return response.json();
        })
        .then(function (data) {

            if (document.getElementById("dogPictureTwo").hasChildNodes) {
                var parentNode = document.getElementById("dogPictureTwo");
                var childNode = parentNode.firstChild;
                parentNode.removeChild(childNode);
            }

            let imageFormat = data.url.substring(data.url.length - 4);
            if (imageFormat === '.mp4' || imageFormat === 'webm') {
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = true;
                video.src = data.url;
                video.setAttribute('id', 'video');
                document.getElementById('dogPictureTwo').appendChild(video);
            }
            else {
                const img = document.createElement('img');
                img.src = data.url;
                document.getElementById('dogPictureTwo').appendChild(img);
            }
        })
        .catch(function () {
            const error = document.createElement('p');
            error.innerText = "Sorry, there was an error loading the image."
            document.getElementById(dogPictureTwo).appendChild(error);
        });

    fetch(dogPictureUrl)
        .then(function (response) {
            if (response.ok) {
                throw new Error("Could not fetch image");
            }
            return response.json();
        })
        .then(function (data) {

            if (document.getElementById("dogPictureThree").hasChildNodes) {
                var parentNode = document.getElementById("dogPictureThree");
                var childNode = parentNode.firstChild;
                parentNode.removeChild(childNode);
            }

            let imageFormat = data.url.substring(data.url.length - 4);
            if (imageFormat === '.mp4' || imageFormat === 'webm') {
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = true;
                video.src = data.url;
                video.setAttribute('id', 'video');
                document.getElementById('dogPictureThree').appendChild(video);
            }
            else {
                const img = document.createElement('img');
                img.src = data.url;
                document.getElementById('dogPictureThree').appendChild(img);
            }
        })
        .catch(function () {
            const error = document.createElement('p');
            error.innerText = "Sorry, there was an error loading the image."
            document.getElementById(dogPictureOne).appendChild(error);
        });
});
