const questions = [
    {
        category: "World Geography",
        question: "What is the capital of France?",
        choices: ["Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        category: "Science",
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter"],
        answer: "Jupiter",
    },
    {
        category: "Literature",
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Mark Twain", "William Shakespeare", "Charles Dickens"],
        answer: "William Shakespeare",
    },
    {
        category: "General Knowledge",
        question: "Which food is represented by this emoji? 🍣",
        choices: ["Taco", "Sushi", "Salad"],
        answer: "Sushi",
    },
    {
        category: "Math",
        question: "What is the smallest prime number?",
        choices: ["1", "2", "3"],
        answer: "2",
    },
];

function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
};

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
};

function getResults(question,getRandomComputerChoice) {
    if (question.answer === getRandomComputerChoice) {
        return "The computer's choice is correct!";
    }
    else {
        return "The computer's choice is wrong. The correct answer is: " + question.answer;
    }

};

const randomQuestion = getRandomQuestion(questions);
console.log("Category:", randomQuestion.category);
console.log("Question:", randomQuestion.question);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's Choice:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));
