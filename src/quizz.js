const quizzdata = [
  {
    num: "1",
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<js>",
    b: "<scripting>",
    c: "<script>",
    d: "<javascript>",
    correct: "c",
  },
  {
    num: "2",
    question:
      "What is the correct syntax for referring to an external script called xxx.js?",
    a: '<script name="xxx.js">',
    b: '<script href="xxx.js"',
    c: '<script src="xxx.js>',
    d: '<script title="xxx.js">',
    correct: "c",
  },
  {
    num: "3",
    question: 'How do you write "Hello World" in an alert box?',
    a: 'msgBox("Hello World")',
    b: 'alert("Hello World"',
    c: 'alertBox("Hello World")',
    d: 'msg("Hello World")',
    correct: "b",
  },
  {
    num: "4",
    question: "How do you create a function in JavaScript?",
    a: "function myFunction()",
    b: "function:myFunction()",
    c: "function = myFunction()",
    d: "myFunction() = ",
    correct: "a",
  },
  {
    num: "5",
    question: 'How do you call a function named "myFunction"?',
    a: "call myFunction",
    b: "myFunction()",
    c: "call function myFunction()",
    d: "myFunction.call()",
    correct: "b",
  },
  {
    num: "6",
    question: "How to write an IF statement in JavaScript?",
    a: "if ( a == 5 ) {}",
    b: "if a == 5 then:",
    c: "if i = 5",
    d: "if i == 5 then",
    correct: "a",
  },
  {
    num: "7",
    question: "How does a FOR loop start?",
    a: "for ( i = 0; i <= 5 )",
    b: "for ( i <= 5; i++)",
    c: "for (i = 0; i <= 5; i++",
    d: "for i = 1,i <= 5",
    correct: "",
  },
  {
    num: "8",
    question: "How can you add a comment in a JavaScript?",
    a: "<!-- comment -->",
    b: "#comment",
    c: "//comment",
    d: "||comment",
    correct: "c",
  },
  {
    num: "9",
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onchange",
    b: "onscroll",
    c: "onmouseover",
    d: "onclick",
    correct: "",
  },
  {
    num: "10",
    question: "How do you declare a JavaScript variable?",
    a: "variable name",
    b: "const nameli",
    c: "v score",
    d: "int 50",
    correct: "b",
  },
];

var myQuestions = [
  {
    question: "What is 10/2?",
    answers: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctAnswer: "b",
  },
  {
    question: "What is 30/3?",
    answers: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctAnswer: "c",
  },
];

// Variables
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];

(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
          <div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
    });

    let outputjoin = "1";
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output;
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
