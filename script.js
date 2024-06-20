//Import 
import { htmlFrontPage, cssFrontPage, jsFrontPage } from "./modules/mainPageModes";

const elements = document.getElementsByClassName('element');
const mainDiv = document.getElementById('homeMainContent');



const loadFrontPageText = function(obj) {
    let subMainDiv = document.createElement('div');
    subMainDiv.classList.add('homeMainText');
    subMainDiv.innerHTML = `<h2>${obj.title}</h2> <p>${obj.description}</p> <img src='${obj.image}' alt='icon'>`;
    mainDiv.appendChild(subMainDiv);
}


for(const element of elements) {
    element.addEventListener('click', function() {
        element.children[1].classList.toggle('invisible');
        element.children[0].children[1].classList.toggle('invisible');
        element.children[0].children[2].classList.toggle('invisible');
    })
}

loadFrontPageText(htmlFrontPage);
loadFrontPageText(cssFrontPage);
loadFrontPageText(jsFrontPage);