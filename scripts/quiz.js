
const quizForm = document.querySelector("#quizForm");
const questions = document.querySelectorAll(".qs");
const finalScore = document.querySelector("#finalScore");
const submitQuiz = document.querySelector("#submitQuiz");

const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3"];
let score= 0;

quizForm.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
       if(entry[1] == correctAns[index]){
        questions[index].style.backgroundColor = "lightgreen";
        score++;
       }
       else{
        questions[index].style.backgroundColor = "pink";
       }
        index++;
    }
    finalScore.innerText = score;
    submitQuiz.style.display= "none";
});
