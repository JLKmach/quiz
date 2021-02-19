
//Local Storage to connect variables in other windows    
miStorage = window.localStorage;
var username = miStorage.getItem("nombre");
var fecha = new Date(); 
fecha=fecha.toDateString() +"; "+ fecha.toLocaleTimeString();
//console.log(username);
var score=0;

//Functions
//Build structure of the quiz Q & A
function createQuiz(){
    
    const displayingQuiz=[];
    const headerQuiz=[];
    headerQuiz.push(
        `<h3 class="text-secondary mb-0">Multiple Options</h3>
        <h2 class="mb-5">Quiz 1</h2>
        <h2 class="mb-5">ID: ${username}</h2>
        <h4 class="mb-5">Date: ${fecha}</h4>`
        );

    //for (i=0; i<allQuestions.length;i++){
        allQuestions.forEach(function(currentSection,index_Q,array){

                const answerToShow = [];

                //for (op in currentSection.ans){
                    answerToShow.push(
                        `<p class="mb-0 row h4">

                            <label for="exampleFormControlTextarea1">Insert answer ${index_Q+1}</label>
                            <textarea class="answer form-control" name="answer${index_Q}" rows="3"></textarea>

                        </p>`
                        );
                //}

                // add this question and its answers to the output
                displayingQuiz.push(
                `
                <hr class="bg-light">
                <div class="row no-gutters h2">
                    <div class="question col-lg-5"> ${currentSection.question}</div>
                </div>
                <div class="no-gutters h5"> ${answerToShow.join('')} </div>
                `
          );


            }
        );

    //}

    // finally combine our output list into one string of HTML and put it on the page
    examContainer.innerHTML = displayingQuiz.join('');
    headerContainer.innerHTML = headerQuiz.join('');
    

}

function checkQuiz(){
    const allAns = examContainer.querySelectorAll('.answer');
    console.log(allAns);
    const allQ = examContainer.querySelectorAll('.question');
    let numCorrect = 0;
    console.log(allQ);
    
    

    allQuestions.forEach(function(currentSection,index_Q,array){

     

            const anwersOfEachQ = allAns[index_Q];
            
            const answerSelected = (anwersOfEachQ || {}).value;
            console.log(answerSelected);
            
        
            //console.log(answerSelected,currentSection.correct);
            // if answer is correct
            if(answerSelected === currentSection.correct){
                
                // add to the number of correct answers
                numCorrect++;
        
                // color the answers green
                allQ[index_Q].style.color = 'lightgreen';
                allQ[index_Q].style.fontWeight= 'bold';
                allQ[index_Q].insertAdjacentHTML("beforeend",'<i class="fas fa-check"></i>');
                
                }
                // if answer is wrong or blank
                else{
                // color the answers red
                allQ[index_Q].style.color = 'rgb(187, 0, 0)';
                allQ[index_Q].style.fontWeight= 'bold';
                allQ[index_Q].insertAdjacentHTML("beforeend",'<i class="fas fa-times"></i>');

                }
    });
            
    // show number of correct answers out of total
    alert(`Grade: ${numCorrect} out of ${allQuestions.length}`);
    //resultsContainer.innerHTML = `${numCorrect} out of ${allQuestions.length}`;
    score=numCorrect;
    miStorage.setItem("grade1", `${numCorrect} / ${allQuestions.length}`);



}
    
const examContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const headerContainer = document.getElementById('headerQuiz');



var sec1={
    question : "¿  Q1  ?",
    ans : {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    correct : "a" 

};

var sec2={
    question : "¿  Q2  ?",
    ans : {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    correct : "b" 
};

var sec3={
    question : "¿  Q3  ?",
    ans : {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    correct : "c" 
};

var sec4={
    question : "¿  Q4  ?",
    ans : {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    correct : "d" 
};

const allQuestions = [];
allQuestions.push(sec1,sec2,sec3,sec4);


//Procedures
    //Build structure of the quiz Q & A
    
    createQuiz();

    // Esperar el click en el boton
    submitButton.addEventListener('click', checkQuiz);