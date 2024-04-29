const quizData=[

    {
        question:"Which language is runs on web browser?",
        a:"java",
        b:"c++",
        c:"html",
        d:"javascript",
        correct:"d",

    },

    {

        question:"what does  CSS stand for?",
        a:"CasCading Style Sheet ",
        b:"Central style sheet",
        c:" Cascading simple sheet",
        d:" None of these",
        correct:"a",
    },

    {
        question:"What does HTML stands for?",
        a:"Hyper Text Manipulation Language",
        b:"Hyper Text Markup Language",
        c:"High Text Manipulation Language",
        d:"All of these",
        correct:"b",
        
    },


    {
question:"Javascript is an _______ language?",
      a:"Object-Oriented",
      b:" object-based",
      c:"Procedural",
      d:"All of these",
      correct:"a",

    },


    {
    question:"Which of the following keywords is used to define a variable in Javascript?",

    a:"let",
    b:"var",
    c:"Both a & b",
    d:" None of these",
    correct:"c",


 },
 {
     question:" The function  let  and  var  are known as:",
    
    a:"keywords",
    b:"Datatypes",
    c:"Declaration statements",
    d:"prototypes",
    correct:"c",
    
    
     },
     {
    question:"Which one of the following is the correct way for calling the JavaScript code?",
        
    a:"function/method",
    b:"Preprocessor",
    c:"Triggering Event",
    d:"RMI",
    correct:"a",
        
        
},
       
             {
                
        question:"Where is the correct place to insert a JavaScript?",
                
        a:"the body section",
        b:"the head section",
        c:"both  body and  head section",
        d:"None of these",

        correct:"c"
                
                
        },

        {
         question:"How do you write hello World in an alert box?",
                    
        a:"msgBox(hello world)",
        b:"alert(hello world)",
        c:"alertBox(hello world)",
        d:"msg(hello world)",
        correct:"b"
                    
                    
         },

   
         {

         question:"How do you create a function in JavaScript?",
                        
        a:"function:functionName()",
        b:"function=functionName()",
        c:"function functionName()",
        d:"All of These",
        correct:"c"
                        
                        
                         },



];

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll
(".answer");
const questionEl=document.getElementById("question");

const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();


function deselectAnswer()
{
    answerEls.forEach(answerEl =>answerEl.checked =false)  
}

function loadQuiz(){
    
    deselectAnswer()
    
    const currentQuizData= quizData[currentQuiz]
    questionEl.innerHTML=currentQuizData.question
    a_text.innerHTML =currentQuizData.a
    b_text.innerHTML =currentQuizData.b
    c_text.innerHTML =currentQuizData.c
    d_text.innerHTML =currentQuizData.d
}




function deselectAnswer() {
    answerEls.forEach(answerEls => 
        answerEls.checked=false)
    }
    function getSelected(){
        let answer;
        answerEls.forEach(answerEl => {
            if(answerEl.checked){
                answer=answerEl.id
            }
        })
        return answer
    }
    
    
    submitBtn.addEventListener("click",()=>{
        const answer= getSelected()
        if(answer){
            if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
        
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=
            `<h2>you answered ${score}/${quizData.length} questions correctly </h2>
            
            <button onclick = "location.reload()"> Reload 
            </button>`
        }
        
    }
 })