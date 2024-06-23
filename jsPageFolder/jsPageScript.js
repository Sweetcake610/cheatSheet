const sideNavListJS = document.getElementById('jsSideNavList');


const sideNavLinks = ['JavaScript Intro', 'Basic JS Variables', 'Control Flow', 
    'Intro to Functions', 'Scope', 'Arrays', 'Loops', 'Iterators', 'Objects', 'Classes',
'Browser Compatibility & Transpilation', 'Modules', 'Promises', 'Async-Await', 'Requests'];


sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#'>${navItem}</a>`;
    sideNavListJS.appendChild(listItem);
});