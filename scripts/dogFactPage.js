import { dogFactsArray } from './dogFacts.js';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

document.getElementById('dogFactsAndPicturesButton').addEventListener('click', function (event) {


  let children = document.getElementById("dogFactsContainer").children;
  for (var k = 0; k < children.length; k++) {
    let childNode = children[k];
    let i = randomIntFromInterval(0, 434);
    childNode.innerText = dogFactsArray[i].fact;
  }
});

