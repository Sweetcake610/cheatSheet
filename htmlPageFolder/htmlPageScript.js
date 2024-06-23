const sideNavListHTML = document.getElementById('htmlSideNavList');


const sideNavLinks = ['HTML Intro', 'Body Elements', 'Link Elements', 
    'Extra Elements', 'Tables', 'Forms', 'Extra Markups', 'Images', 'Semantic HTML',
'Flash, Video and Audio'];


sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#'>${navItem}</a>`;
    sideNavListHTML.appendChild(listItem);
});
