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

//Function adds color background and text change under class focus to the side nav link element that is click.
//It then goes through all the other links in the sideNavListCSS and remove focus if it is not the current event target of the click.

const addFocusToSideLinks = function() {
    let mainPageSideLink = sideNavListCSS.children[0].firstChild;
    let allPageSideLinks = sideNavListCSS.children;
   
    mainPageSideLink.classList.add('focus');

    sideNavListCSS.addEventListener('click', function(evt) {
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