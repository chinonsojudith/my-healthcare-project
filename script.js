// toogle menu display code 
let toggle = document.querySelector('#toggle');
let toggleList = document.querySelector('.toggle-list');
toggle.addEventListener('click', ()=> {
    toggleList.classList.toggle('toggle-display')
    
})
