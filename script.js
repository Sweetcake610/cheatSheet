//Global Elements
const elements = document.getElementsByClassName('element');
const mainDiv = document.getElementById('homeMainContent');

//Main page objects
const htmlFrontPage = {
    title: 'HTML',
    description: 'HTML (HyperText Markup Language)- a markup language is a computer language that defines the structure and presentation of raw text.',
    image: '',
    feature: ''
}

const cssFrontPage = {
    title: 'CSS',
    description: 'CSS (Cascade Styling Sheet)- is a language that web developers use to style the html content on a webpage. To style elements you need to specify two things: the property and the value.',
    image: '',
    feature: ''
}

const jsFrontPage = {
    title: 'JavaScript',
    description: 'JavaScript- is a widely used web-based programming language that powers the dynamic behavior on most websites.',
    image: '',
    feature: ''
}


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