const elements = document.getElementsByClassName('element');


for(const element of elements) {
    element.addEventListener('click', function() {
        element.children[1].classList.toggle('invisible');
        element.children[0].children[1].classList.toggle('invisible');
        element.children[0].children[2].classList.toggle('invisible');
    })
}