const quizData = [
    {
        question: "Qu'est-ce que l'impôt sur le revenu?",
        a: "Un impôt prélevé sur les entreprises uniquement",
        b: "Un impôt sur les bénéfices des sociétés",
        c: "Un impôt prélevé sur les revenus des personnes physiques",
        d: "Un impôt sur les transactions immobilières",
        correct: "c"
    },
    {
        question: "Quelle est la date limite habituelle pour déclarer ses revenus en France?",
        a: "31 décembre",
        b: "1er janvier",
        c: "30 avril",
        d: "31 mai",
        correct: "d"
    },
    {
        question: "Quel est le taux standard de TVA en France en 2024?",
        a: "15%",
        b: "20%",
        c: "10%",
        d: "25%",
        correct: "b"
    },
    // Ajoute d'autres questions ici
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion) {
            if (letter !== "question" && letter !== "correct") {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion[letter]}
                    </label>`
                );
            }
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });
    quiz.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quiz.querySelectorAll('.answers');
    let numCorrect = 0;
    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} sur ${quizData.length} correct`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
