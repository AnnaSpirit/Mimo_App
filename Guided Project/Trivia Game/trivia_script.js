const questions = [
    {
        question: "What planet is known as the 'Red Planet'?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Which planet is the largest in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Neptune"],
        answer: "Jupiter"
    },
    {
        question: "Which planet has the most famous rings?",
        choices: ["Saturn", "Mars", "Venus", "Mercury"],
        answer: "Saturn"
    },
    {
        question: "Which planet is closest to the Sun?",
        choices: ["Neptune", "Mercury", "Earth", "Jupiter"],
        answer: "Mercury"
    },
    {
        question: "Which planet is known for its strong winds and blue color?",
        choices: ["Neptune", "Saturn", "Mars", "Venus"],
        answer: "Neptune"
    }
    // {
    //     question: "Your question here?",
    //     choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
    //     answer: "Choice B"
    // }

];

let currentIndex = 0;

function displayQuestion() {
    const currentQuestion = questions[currentIndex];
    // document.getElementById("question").innerHTML = currentQuestion.question;
    // document.getElementById("question_counter").innerHTML = 
    //     `Question ${currentIndex + 1} / ${questions.length}`;
    const questionElement = document.getElementById("question");
    const counterElement = document.getElementById("question_counter");

    questionElement.innerHTML = currentQuestion.question;
    counterElement.innerHTML = `Question ${currentIndex + 1} / ${questions.length}`;


    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById("choice" + (i + 1));
        btn.innerHTML = currentQuestion.choices[i];
        btn.value = currentQuestion.choices[i];
    }

    for (let i = 1; i <= 4; i++) {
        document.getElementById("choice" + i).disabled = false;
    }
}
// utilisation d' un algorithme de mélange
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        const temp = questions[i];
        questions[i] = questions[randomIndex];
        questions[randomIndex] = temp;
    }
}

function checkAnswer(button) {
    if (button.value === questions[currentIndex].answer) {
        document.getElementById("result").innerHTML = "👍Correct!";
    } else {
        document.getElementById("result").innerHTML = "👎Wrong!";
    }

    for (let i = 1; i <= 4; i++) {
        document.getElementById(`choice${i}`).disabled = true;
    }

    currentIndex++;
    if (currentIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("result").innerHTML = "🏁 Game Over!";
    }
}
shuffleQuestions();
displayQuestion();