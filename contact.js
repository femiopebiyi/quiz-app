const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

const submit = document.querySelector("button");

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
    inputs.forEach((item)=>{
        if(!item.value.trim() || !textarea.value.trim()){
            return
        }
    })

    let mailtoLink = "mailto:opebiyibiodun10@gmail.com?subject=Forwarded Message&body=" + encodeURIComponent(`My name is ${inputs[1].value} ${inputs[0].value} and this is my suggestion: ${textarea.value}`);

            // Open the default email client
            window.location.href = mailtoLink;
})