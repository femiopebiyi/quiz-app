const questionDisplay = document.querySelector(".question p")
const checkboxes = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const checkButton = document.querySelector(".check")
const resultDisplay = document.querySelector(".result")
const nextButton = document.querySelector(".next")
const resultImg =  document.querySelector(".result-img")



checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                // Uncheck all other checkboxes when one is checked
                checkboxes.forEach(function(otherCheckbox) {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            });
        });



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let correctAns;

async function fetchQuiz (){
    try{
        const api = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple");
        const quiz = await api.json()

        console.log(quiz)

        const resultBody = quiz.results[0]
        const {correct_answer, incorrect_answers, question} = resultBody;
        
        const correctAnswer = correct_answer
        correctAns = correctAnswer
        var decodedText = document.createElement('textarea');
        decodedText.innerHTML = correctAns;
        var readableText = decodedText.value;
        correctAns =  readableText
        console.log(`this is the answer "${correctAnswer}"`)
        questionDisplay.innerHTML = question
        incorrect_answers.push(correct_answer);
        
        shuffleArray(incorrect_answers)
        console.log(correct_answer, incorrect_answers, question);
        for(let i = 0; i<labels.length; i++){
            labels[i].innerHTML = incorrect_answers[i]
        }
        
        
        } 
    catch(error){
        console.log(error, 'cant retrieve question')
    }
}


fetchQuiz()


checkButton.addEventListener("click", function(){
    checkboxes.forEach((item)=>{
        if(!item.checked) return

        let clicked = getCheckedCheckboxLabel()

        console.log(clicked)
        
        if(correctAns.trim() === clicked.trim()){
            resultDisplay.innerHTML = "you got it right!!!!";
            resultImg.src = 'checkmark.svg'
            countdown(5)
            // setTimeout(()=>{
            //     resultDisplay.innerHTML = ""
            //     // uncheckAll()
            //     // fetchQuiz()
                
            // }, 3000)
            

        } else {
            resultDisplay.innerHTML = "you got it wrong!! try again";
            resultImg.src = 'xmark-solid (1).svg'
            setTimeout(()=>{
                resultDisplay.innerHTML = ""
                resultImg.src = ''
            }, 1500)
        }
    })
    
})

function uncheckAll(){
    checkboxes.forEach((item)=>{
        item.checked = false;
    })
}



function getCheckedCheckboxLabel() {
            // Loop through each checkbox
            for (var i = 1; i <= 4; i++) {
                // Get the checkbox element
                let checkbox = document.getElementById('checkbox' + i);

                // Check if the checkbox is checked
                if (checkbox.checked) {
                    // Get the label using the 'for' attribute
                    let label = document.querySelector('label[for="' + checkbox.id + '"]');

                    // Check if the label is found
                    if (label) {
                        return label.innerText;
                    } else {
                        alert('Label not found for the checked checkbox.');
                    }

                    // Break out of the loop since we found the checked checkbox
                    break;
                }
            }
        }

    


        document.getElementById('menu').addEventListener('click', function () {
  this.classList.toggle('close');
});

    

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
    


const timer = document.querySelector(".count")
const timerText = document.querySelector(".text")


function countdown(seconds) {
timer.innerHTML = seconds;

if (seconds > 0) {
    timer.style.visibility = 'visible'
    timerText.style.visibility = 'visible'
    checkButton.disabled = true
// Decrement the seconds and call the countdown function recursively after 1000 milliseconds (1 second)
setTimeout(function() {
    countdown(seconds - 1);
    
}, 1000);
} else if(seconds<=0){
timer.style.visibility = 'hidden'
timerText.style.visibility = 'hidden'
console.log("Time's up!");
uncheckAll()
fetchQuiz()
resultDisplay.innerHTML = "";
resultImg.src = ''
checkButton.disabled = false;
}
}

// Start the countdown from 5 seconds




const buttons = document.querySelectorAll(".category button");
buttons[0].classList.add("checked")

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        button.classList.add('checked')
        buttons.forEach(function(otherButton){
            if(otherButton !== button){
                otherButton.classList.remove('checked')
            }
        })
    })
})