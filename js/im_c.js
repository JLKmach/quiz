
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
                    `
                    <div class="container">
                    <div class="row no-gutters">
                      <div class="col-lg-6">
                        <a class="portfolio-item" value='a' href="#!" id="${index_Q}im1" onclick="fnChangeBorder(${index_Q},'${index_Q}im1')">
                          <div class="caption">
                            <div class="caption-content">
                              <div class="h2">Option A</div>
                              <p class="mb-0">Simple description of the photo</p>
                            </div>
                          </div>
                          <img class="img-fluid" src="../img/portfolio-1.jpg" alt="">
                        </a>
                      </div>
                      <div class="col-lg-6">
                        <a class="portfolio-item" href="#!" id="${index_Q}im2" onclick="fnChangeBorder(${index_Q},'${index_Q}im2')">
                          <div class="caption">
                            <div class="caption-content">
                              <div class="h2">Option B</div>
                              <p class="mb-0">Simple description of the photo</p>
                            </div>
                          </div>
                          <img class="img-fluid" src="../img/portfolio-2.jpg" alt="">
                        </a>
                      </div>
                      <div class="col-lg-6">
                        <a class="portfolio-item" href="#!" id="${index_Q}im3" onclick="fnChangeBorder(${index_Q},'${index_Q}im3')">
                          <div class="caption">
                            <div class="caption-content">
                              <div class="h2">Option C</div>
                              <p class="mb-0">Simple description of the photo</p>
                            </div>
                          </div>
                          <img class="img-fluid" src="../img/portfolio-3.jpg" alt="">
                        </a>
                      </div>
                      <div class="col-lg-6">
                        <a class="portfolio-item" href="#!" id="${index_Q}im4" onclick="fnChangeBorder(${index_Q},'${index_Q}im4')">
                          <div class="caption">
                            <div class="caption-content">
                              <div class="h2">Option D</div>
                              <p class="mb-0">Simple description of the photo</p>
                            </div>
                          </div>
                          <img class="img-fluid" src="../img/portfolio-4.jpg" alt="">
                        </a>
                      </div>
                    </div>
                  </div>
                    `
                    );
            //}

            // add this question and its answers to the output
            displayingQuiz.push(
            `
            <hr class="bg-light">
            <div class="row no-gutters h2">
                <div class="question col-lg-5"> ${currentSection.question}</div>
            </div>
            <div class="answers no-gutters h5"> ${answerToShow.join('')} </div>
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
    const allAns = examContainer.querySelectorAll('.portfolio-item');
    //console.log(allAns);
    const allQ = examContainer.querySelectorAll('.question');
    let numCorrect = 0;
    //console.log(allQ);
    
    

    allQuestions.forEach(function(currentSection,index_Q,array){

            var anwersOfEachQ;
            var answerSelected;
            for(i=index_Q*4; i<index_Q*4+4; i++){
                anwersOfEachQ = allAns[i];

                if(anwersOfEachQ.style.border == "solid rgb(0, 100, 50)"){
                    
                    answerSelected=i;
                    //console.log(answerSelected);
                }


            }
            console.log("AnsSel");
            answerSelected=1+answerSelected-(index_Q*4);
            console.log(answerSelected);
            
            
            
        
            //console.log(answerSelected,currentSection.correct);
            // if answer is correct
            if(answerSelected == currentSection.correct){
                
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
    miStorage.setItem("grade3", `${numCorrect} / ${allQuestions.length}`);



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
    correct : 1 

};

var sec2={
    question : "¿  Q2  ?",
    ans : {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    correct : 2 
};

var sec3={
    question : "¿  Q3  ?",
    ans : {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    correct : 3 
};

var sec4={
    question : "¿  Q4  ?",
    ans : {
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    },
    correct : 4 
};

const allQuestions = [];
allQuestions.push(sec1,sec2,sec3,sec4);


//Procedures
    //Build structure of the quiz Q & A
    
    createQuiz();

    // Esperar el click en el boton
    submitButton.addEventListener('click', checkQuiz);

    function fnChangeBorder(inx,boxId){
        var borde = document.getElementById(boxId);
        console.log(inx);

        //Quitar otros bordes
        var im 
        im=document.getElementById(inx+"im1");
        //console.log(inx+"im1");
        im.style.border = "none";
        im=document.getElementById(inx+"im2");
        im.style.border = "none";
        im=document.getElementById(inx+"im3");
        im.style.border = "none";
        im=document.getElementById(inx+"im4");
        im.style.border = "none";
        
        if (borde.style.border == "solid rgb(0, 100, 50)")
        {
            
            borde.style.border = "none";
            console.log(borde.style.border);
        }
        else{
            
            borde.style.border = "solid rgb(0, 100, 50)";
            console.log(borde.style.border);
        }
        
    }