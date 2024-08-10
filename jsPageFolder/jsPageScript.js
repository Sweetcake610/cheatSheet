const sideNavListJS = document.getElementById('jsSideNavList');


const sideNavLinks = [
    {id: 'jsIntro', name: 'JavaScript Intro'}, 
    {id: 'jsVariables', name: 'Basic JS Variables'},
    {id: 'controlFlow', name: 'Control Flow'}, 
    {id: 'functions', name: 'Intro to Functions'}, 
    {id: 'scope', name: 'Scope'}, 
    {id: 'arrays', name: 'Arrays'},
    {id: 'loops', name: 'Loops'}, 
    {id: 'iterators', name: 'Iterators'},
    {id: 'objects', name: 'Objects'}, 
    {id: 'classes', name: 'Classes'},
    {id: 'compaTrans', name: 'Browser Compatibility & Transpilation'}, 
    {id: 'modules', name: 'Modules'}, 
    {id: 'promises', name: 'Promises'}, 
    {id: 'asyncAwait', name: 'Async-Await'}, 
    {id: 'requests', name: 'Requests'}
];


sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${navItem.id}'>${navItem.name}</a>`;
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