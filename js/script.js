let input=document.querySelector(".input")
let button=document.querySelector(".button")
let result=document.querySelector(".result")
let error=doc.querySelector(".error")

button.addEventListener('click' , ()=>{
    if(input.value==''){
        error.innerHTML="Plese enter amy text"
    } 
})