let input = document.querySelectorAll(".input-data")
let form = document.querySelector("#form-btn")

const details = {}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    for(data of input){
      details[data.name] = data.value
      
    }
    sessionStorage.setItem('getData' ,JSON.stringify(details))
    console.log(details)
})



// toogle menu display code 
let toggle = document.querySelector('#toggle');
let toggleList = document.querySelector('.toggle-list');
toggle.addEventListener('click', ()=> {
    toggleList.classList.toggle('toggle-display')
    
})