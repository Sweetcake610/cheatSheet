const sideNavListHTML = document.getElementById('htmlSideNavList');


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


sideNavLinks.forEach(function(navItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${navItem.id}'>${navItem.name}</a>`;
    sideNavListHTML.appendChild(listItem);

});

const focusSideNavLink = function() {
    const sideLinks = sideNavListHTML.querySelectorAll('a');
    sideLinks[0].classList.add('focus');

    
    for (let i = 0; i < sideLinks.length; i++) {
        
        sideLinks[i].addEventListener('click', function(e) {
            e = sideLinks[i].classList.add('focus');
        }, false);

    }
    
}();



