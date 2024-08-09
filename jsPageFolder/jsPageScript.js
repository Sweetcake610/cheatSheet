const sideNavListJS = document.getElementById('jsSideNavList');


const sideNavLinks = ['JavaScript Intro', 'Basic JS Variables', 'Control Flow', 
    'Intro to Functions', 'Scope', 'Arrays', 'Loops', 'Iterators', 'Objects', 'Classes',
'Browser Compatibility & Transpilation', 'Modules', 'Promises', 'Async-Await', 'Requests'];


sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#'>${navItem}</a>`;
    sideNavListJS.appendChild(listItem);
});

//Function adds color background and text change under class focus to the side nav link element that is click.
//It then goes through all the other links in the sideNavListJS and remove focus if it is not the current event target of the click.
const addFocusToSideLinks = function() {
    let mainPageSideLink = sideNavListJS .children[0].firstChild;
    let allPageSideLinks = sideNavListJS .children;
   
    mainPageSideLink.classList.add('focus');

    sideNavListJS.addEventListener('click', function(evt) {
        let currentLink = evt.target;

        if (currentLink) {
            currentLink.classList.add('focus'); 
            for (let i = 0; i < allPageSideLinks.length; i++) {
                if (allPageSideLinks[i].firstChild !== currentLink) {
                    allPageSideLinks[i].firstChild.classList.remove('focus');
                }
                
            }
        } 

       
    });
}();