const hamButton = document.querySelector(".ham-container");
    const hamMenu = document.querySelector(".ham-nav");

    hamButton.addEventListener ("click", ()=>{


        hamMenu.classList.toggle("clicked");
        




        // if(hamMenu.style.display === "none"){
        //     hamMenu.style.display = "flex"
        // }else{
        //     hamMenu.style.display = "none"
        // }
        

        
    })

        document.getElementById('menu').addEventListener('click', function () {
this.classList.toggle('close');
});

const socials = document.querySelectorAll(".fa-brands");


socials[0].addEventListener("click", function(){
    console.log('wjhfdkhg')
    // Replace 'your_twitter_username' with your actual Twitter username
        let twitterUrl = 'https://twitter.com/codewithopebiyi';

        // Open a new tab/window with the Twitter page
        window.open(twitterUrl, '_blank');
})

socials[1].addEventListener("click", function(){
    // Replace 'your_twitter_username' with your actual Twitter username
        let githubUrl = 'https://github.com/femiopebiyi';

        // Open a new tab/window with the github page
        window.open(githubUrl, '_blank');
})

socials[2].addEventListener("click", function(){
    
        let whatsappUrl = 'https://wa.me/qr/BY7ISG27JTMUM1';

        // Open a new tab/window with the whatsapp page
        window.open(whatsappUrl, '_blank');
})


const links = document.querySelectorAll(".navlink")
const story = document.querySelector(".story")

if(story.innerHTML){
    links[1].style.color = 'white'
} else{
    links[1].style.color = 'black'
}

const logo = document.querySelector(".logo");

logo.addEventListener("click", function(){
    const link = "index.html"

    window.location.href = link
})


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