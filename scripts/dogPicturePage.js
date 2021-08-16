let dogPictureUrl = "https://random.dog/woof.json";

document.getElementById('dogFactsAndPicturesButton').addEventListener('click', function (event) {

let children = document.getElementById("dogPicturesContainer").children;
  for (var i = 0; i < children.length; i++) {
    let dogFactNode = children[i];

    if (dogFactNode.hasChildNodes) {
        let childNode = dogFactNode.firstChild;
        dogFactNode.removeChild(childNode);
    }

    fetch(dogPictureUrl)
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
                dogFactNode.appendChild(video);
            }
            else {
                const img = document.createElement('img');
                img.src = data.url;
                dogFactNode.appendChild(img);
            }
        })
        .catch(function () {
            const error = document.createElement('p');
            error.innerText = "Sorry, there was an error loading the image."
            dogFactNode.appendChild(error);
        });
  }
});
