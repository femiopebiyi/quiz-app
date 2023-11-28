var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var email = document.getElementById("email")
var message = document.getElementById("message")
const submit = document.querySelector("button");
const error = document.querySelector(".error")
// const details = {
//     firstName: inputs[0].value,
//     lastName: inputs[1].value,
//     email: inputs[2].value,
//     message: textarea.value
// }

document.body.addEventListener("click", function(event){
    const hamMenu = document.querySelector(".ham-nav");
    const hamButton = document.querySelector(".ham-container");
    if(hamMenu.contains(event.target)===true || hamButton.contains(event.target)=== true){
        console.log("clicked outside")
    } else{
        if(hamButton.classList.contains("close")){
            hamButton.click()
        }

    }
})


if(document.title === "Contact"){
    links[2].style.color = 'white'
} else{
    links[2].style.color = 'black'
}

submit.addEventListener("click", function(){
    if(!firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !message.value.trim()){
        error.innerHTML = 'all fields must be filled'
        
    } else{

        
        error.innerHTML = ''
        let mailtoLink = "mailto:opebiyibiodun10@gmail.com?subject=message&body=" + encodeURIComponent(`My name is ${lastName.value} ${firstName.value} and this is my message: ${message.value}`);

            // Open the default email client
            window.location.href = mailtoLink;
    }

    
})

const log = document.querySelector(".logo");


log.addEventListener("click", function(){
    const link = "index.html"

    window.location.href = link
})
