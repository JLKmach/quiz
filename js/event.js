
const SignInButton = document.getElementById("SignInButton");
SignInButton.addEventListener('click', registerUser);
var uname = undefined;
var miStorage = window.localStorage;
var fecha = new Date(); 
fecha=fecha.toDateString() +"; "+ fecha.toLocaleTimeString();




const unameEl = document.getElementById("userID");
const welcome_m = document.getElementById("welcome");

const logoutB = document.getElementById("log_out");
logoutB.style.visibility='hidden';
logoutB.addEventListener('click', refresh);

//Hide before logging in
const sectServices = document.getElementById("services");
const sectEvaluations = document.getElementById("evaluations");
sectEvaluations.style.visibility='hidden';
const sectResults = document.getElementById("results");
sectResults.style.visibility='hidden';

const item1 = document.getElementById("navbar_services");
const item2 = document.getElementById("navbar_evaluations");
item2.style.visibility='hidden';
const item3 = document.getElementById("navbar_results");
item3.style.visibility='hidden';



function refresh(){
    alert("Logged out");
    location.reload();
    miStorage.clear();
    
}

function registerUser(){
    miStorage.clear();
    console.log("You clicked sign in");
    SignInButton.style.display='none';
    uname = prompt("Inser your username");
    unameEl.innerText=" "+uname;
    welcome_m.innerText="Welcome "+uname;

    logoutB.style.visibility='initial';
    sectServices.style.display='none';
    sectEvaluations.style.visibility='initial';
    sectResults.style.visibility='initial';

    item1.style.display='none';
    item2.style.visibility='initial';
    item3.style.visibility='initial';

    miStorage.setItem("nombre",uname);
}

var openQButton1 = document.getElementById("op_qB");
openQButton1.addEventListener('click', NewQuizWindow1);

var openQButton2 = document.getElementById("multi_optB");
openQButton2.addEventListener('click', NewQuizWindow2);

var openQButton3 = document.getElementById("im_cB");
openQButton3.addEventListener('click', NewQuizWindow3);

var openQButton4 = document.getElementById("wB");
openQButton4.addEventListener('click', NewQuizWindow4);


var resultButton = document.getElementById("resultB");
resultButton.addEventListener('click', showResults);

var clearStorageButton = document.getElementById("clearStorage");
clearStorageButton.addEventListener('click', ClearData);

const ResulContainer = document.getElementById('resultBody');
const ResulTitleContainer = document.getElementById('exampleModalLongTitle');



function showResults(){
  
    score1=miStorage.getItem("grade1") ? miStorage.getItem("grade1") : "pendent" ;
    score2=miStorage.getItem("grade2") ? miStorage.getItem("grade2") : "pendent" ;
    score3=miStorage.getItem("grade3") ? miStorage.getItem("grade3") : "pendent" ;
    score4=miStorage.getItem("grade4") ? miStorage.getItem("grade4") : "pendent" ;
    ResulContainer.innerHTML=
    `
    <div class="row">

      <div class="col">
      Quiz 1
      </div>

      <div class="col">
        Score: ${score1}
      </div>

    </div>

    <div class="row">

      <div class="col">
      Quiz 2
      </div>

      <div class="col">
        Score: ${score2}
      </div>

    </div>

    <div class="row">

      <div class="col">
      Quiz 3
      </div>

      <div class="col">
        Score: ${score3}
      </div>

    </div>

    <div class="row">

      <div class="col">
      Quiz 4
      </div>

      <div class="col">
        Score: ${score4}
      </div>

    </div>

  
    `;

    ResulTitleContainer.innerHTML=`ID: ${uname} Date: ${fecha}`;
    
}




function NewQuizWindow1(){
    window.open("rc/op_q.html");
}

function NewQuizWindow2(){
    window.open("rc/multiple_op.html");
}

function NewQuizWindow3(){
    window.open("rc/im_c.html");
}

function NewQuizWindow4(){
    window.open("rc/w.html");
}

function ClearData(){
    miStorage.clear();
    showResults();
    miStorage.setItem("nombre",uname);
}

//Create PDf from HTML...

const downloadButton = document.getElementById("downloadB");
downloadButton.addEventListener('click', CreatePDFfromHTML);

function CreatePDFfromHTML() {
  showResults();
  console.log("Creando PDF");
  
    const elementoParaConvertir = document.getElementById("rTable");
    html2pdf()
      .set({
        margin:1,
        filename: 'results.pdf',
        image: {
          type: 'jpeg',
          quality: 0.98
        },

        html2canvas: {
          scale: 3,
          letterRendering: true,
        },

        jsPDF: {
          unit: "in",
          format: "a3",
          orientation: 'portrait'
        }

      })

      .from(elementoParaConvertir)
      .save()
      .catch(err => console.log(err));

  
  

}