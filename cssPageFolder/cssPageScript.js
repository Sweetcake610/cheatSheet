const sideNavListCSS = document.getElementById('cssSideNavList');


const sideNavLinks = [
    {id: 'cssIntro', name: 'CSS Intro'}, 
    {id: 'selectorP', name: 'Selector Properties'}, 
    {id: 'color', name: 'Color is CSS'}, 
    {id: 'font', name:'Fonts in CSS'}, 
    {id: 'boxModel', name: 'Box Model'}, 
    {id: 'disPos', name:'Display & Position'}, 
    {id: 'gridE', name:'Grid Essentials'}, 
    {id: 'gridA', name: 'Grid Advanced'}, 
    {id: 'css3', name: 'CSS Additions and CSS3 Properties'},
    {id: 'imageRollSprite', name: 'Image, Rollovers & Sprites'}
];


sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${navItem.id}'>${navItem.name}</a>`;
    sideNavListCSS.appendChild(listItem);
});