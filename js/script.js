let input=document.querySelector(".input")
let button=document.querySelector(".button")
let result=document.querySelector(".result")
let error=document.querySelector(".error")

button.addEventListener('click' , ()=>{
    if(input.value==''){
        error.innerHTML="Plese enter any text"
        // error.innerHTML=''
    } 
    else{
        error.innerHTML=''
        console.log(input.value)
        result.innerHTML=input.value
        input.value=''
    }
})