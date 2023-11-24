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

if(document.title === "Contact"){
    links[2].style.color = 'white'
} else{
    links[2].style.color = 'black'
}

submit.addEventListener("click", function(){
    if(!firstName.value || !lastName.value || !email.value || !message.value){
        error.innerHTML = 'all fields must be filled'
        
    } else{

        
        error.innerHTML = ''
        let mailtoLink = "mailto:opebiyibiodun10@gmail.com?subject=Forwarded Message&body=" + encodeURIComponent(`My name is ${lastName.value} ${firstName.value} and this is my suggestion: ${message.value}`);

            // Open the default email client
            window.location.href = mailtoLink;
    }

    
})