const sideNavListHTML = document.getElementById('htmlSideNavList');

//Side Navigation Links for the HTML page
const sideNavLinks = [
    {id:'htmlIntro', name:'HTML Intro'}, 
    {id:'bodyEle', name:'Body Elements'}, 
    {id:'linkEle', name:'Link Elements'}, 
    {id:'extraEle', name:'Extra Elements'}, 
    {id:'tables', name:'Tables'}, 
    {id:'forms', name:'Forms'},
    {id:'markups', name:'Extra Markups'}, 
    {id:'images', name:'Images'}, 
    {id:'semantic', name:'Semantic HTML'},
    {id:'videoAudio', name:'Flash, Video and Audio'}
];

//Adds each object from the sideNavLinks to the HTML page under the sideNavListHTML div section.
sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${navItem.id}'>${navItem.name}</a>`;
    sideNavListHTML.appendChild(listItem);

});

//Function adds color background and text change under class focus to the side nav link element that is click.
//It then goes through all the other links in the sideNavListHTML and remove focus if it is not the current event target of the click.

const addFocusToSideLinks = function() {
    let mainPageSideLink = sideNavListHTML.children[0].firstChild;
    let allPageSideLinks = sideNavListHTML.children;
   
    mainPageSideLink.classList.add('focus');

    sideNavListHTML.addEventListener('click', function(evt) {
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





