const sideNavListCSS = document.getElementById('cssSideNavList');


const sideNavLinks = ['CSS Intro', 'Selector Properties', 'Color is CSS', 
    'Fonts in CSS', 'Box Model', 'Display & Position', 'Grid Essentials', 'Grid Advanced', 'CSS Additions and CSS3 Properties',
'Image, Rollovers & Sprites'];


sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#'>${navItem}</a>`;
    sideNavListCSS.appendChild(listItem);
});