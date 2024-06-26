const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let scoreA = 0;
let scoreB = 0;
let scoreC = 0;
let scoreD = 0;
let scoreE = 0;
let scoreF = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        questionNumber: "Question 1",
        question: "First Question thing thing ma bing?",
        answers: {
            choice1: "woah",
            choice2: "Hey slow down",
            choice3: "wait a min-",
            choice4: "I said hold ON a sec!!",
            choice5: "Ugghhh",
            choice6: "Fine whateves..."
        }
    },
    {
        questionNumber: "Question 2",
        question: "secondddddding thing ma bing?",
        answers: {
            choice1: "wofemfi",
            choice2: "Hnasjw down",
            choice3: "wlla min-",
            choice4: "I sfenifnsec!!",
            choice5: "Ucni",
            choice6: "Fineeves..."
        }
    },
    {
        questionNumber: "Question 3",
        question: "setthisssthirdma bing?",
        answers: {
            choice1: "trhefi",
            choice2: "fnisjdsiwn",
            choice3: "wlsdjcis",
            choice4: "I sfsissjadsma!",
            choice5: "Ucnnefnei",
            choice6: "Fineencjs."
        }
    },
    {
        questionNumber: "Question 4",
        question: "setforuthng?",
        answers: {
            choice1: "trdn fsji",
            choice2: "fn csmsmn",
            choice3: "kwjekjf s",
            choice4: "fjeifejjadsma!",
            choice5: "fjeofefnei",
            choice6: "Fkwpwjkedcjs."
        }
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

function start() {
    startGame();
    document.getElementById("game").style.display = "flex";
    document.getElementById("home").style.display = "none";
    document.getElementById("results").style.display = "none";
}

startGame = () => {
    questionCounter = 0;
    scoreA = 0;
    scoreB = 0;
    scoreC = 0;
    scoreD = 0;
    scoreE = 0;
    scoreF = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getResult = () => {
    
    if ((scoreA > scoreB) && (scoreA > scoreC) && (scoreA > scoreD) && (scoreA > scoreE) && (scoreA > scoreF)) {
        alert("A winssss");
    } else if ((scoreB > scoreA) && (scoreB > scoreC) && (scoreB > scoreD) && (scoreB > scoreE) && (scoreB > scoreF)) {
        alert("B wins")
    } else if ((scoreC > scoreA) && (scoreC > scoreB) && (scoreC > scoreD) && (scoreC > scoreE) && (scoreC > scoreF)) {
        alert("C wins")
    } else if ((scoreD > scoreA) && (scoreD > scoreB) && (scoreD > scoreC) && (scoreD > scoreE) && (scoreD > scoreF)) {
        alert("D wins")
    } else if ((scoreE > scoreA) && (scoreE > scoreB) && (scoreE > scoreC) && (scoreE > scoreD) && (scoreE > scoreF)) {
        alert("E wins")
    } else if ((scoreF > scoreA) && (scoreF > scoreB) && (scoreF > scoreC) && (scoreF > scoreD) && (scoreF > scoreE)) {
        alert("F wins")
    } else {
        alert("Your score was tied! Try a different answer!");
        location.reload();
    }
};

getNewQuestion = () => {
    
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //go to the end page
        getResult();
        //return window.location.assign("/end.html");
    };
    currentQuestion = availableQuestions[questionCounter];
    question.innerText = currentQuestion.question;
    questionNumber.innerText = currentQuestion.questionNumber;
    questionCounter++;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion.answers["choice" + number];
    });

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswers = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswers == currentQuestion.answers ? "selected" : "selected";
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);

        //add to scores
        if (selectedAnswers == 1) {
            scoreA++
        } else if (selectedAnswers == 2) {
            scoreB++
        } else if (selectedAnswers == 3) {
            scoreC++
        } else if (selectedAnswers == 4) {
            scoreD++
        } else if (selectedAnswers == 5) {
            scoreE++
        } else if (selectedAnswers == 6) {
            scoreF++
        } else {
        };
        console.log(scoreA, scoreB, scoreC, scoreD, scoreE, scoreF);
    });
});

startGame();