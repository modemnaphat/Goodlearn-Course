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

// var tot = quizzdata.length;
// console.log(tot);

// questionArr = quizzdata;
// quizContainer = document.getElementById(quiz_main_contianer);
// generateQuiz(questionArr, quizContainer);

// function generateQuiz(questionArr, quizContainer) {
//   addQuestion(questionArr, quizContainer);
//   addChoice(questionArr, quizContainer);

//   //   add question
//   function addQuestion(questionArr, quizContainer) {
//     for (let i = 0; i < questionArr.length; i++) {
//       quizContainer.innerHTML =
//         '<div id="quiz-container" class="max-w-4xl block bg-whisper-500 mx-auto border-2 border-slate-600/10 rounded-lg p-4">' +
//         '<div class="flex p-2 space-x-6 mb-6" class="quizz" id="quiz">' +
//         '<div class="text-2xl" name="question' +
//         i +
//         '">' +
//         i +
//         "</div>" +
//         '<div class="font-medium" class="question" id="question">' +
//         questionArr[i].question +
//         "</div>" +
//         "</div>";
//     }
//   }
//   function addChoice(questionArr, quizContainer) {}
// }

// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
// scripts here:

function submitQuiz() {
  console.log("submitted");

  // get each answer score
  function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        // do something with radiosNo
        var answerValue = Number(radiosNo[i].value);
      }
    }
    // change NaNs to zero
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  // calc score with answerScore function
  var calcScore =
    answerScore("q1") +
    answerScore("q2") +
    answerScore("q3") +
    answerScore("q4");
  console.log("CalcScore: " + calcScore); // it works!

  // function to return correct answer string
  function correctAnswer(correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber); // logs 1,2,3,4 after called below
    return (
      "The correct answer for question #" +
      qNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctStringNo).innerHTML +
      "</strong>"
    );
  }

  // print correct answers only if wrong (calls correctAnswer function)
  if (answerScore("q1") === 0) {
    document.getElementById("correctAnswer1").innerHTML = correctAnswer(
      "correctString1",
      1
    );
  }
  if (answerScore("q2") === 0) {
    document.getElementById("correctAnswer2").innerHTML = correctAnswer(
      "correctString2",
      2
    );
  }
  if (answerScore("q3") === 0) {
    document.getElementById("correctAnswer3").innerHTML = correctAnswer(
      "correctString3",
      3
    );
  }
  if (answerScore("q4") === 0) {
    document.getElementById("correctAnswer4").innerHTML = correctAnswer(
      "correctString4",
      4
    );
  }

  // calculate "possible score" integer
  var questionCountArray = document.getElementsByClassName("question");

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }

  // show score as "score/possible score"
  var showScore = "Your Score: " + calcScore + "/" + questionCounter;
  // if 4/4, "perfect score!"
  if (calcScore === questionCounter) {
    showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>";
  }
  document.getElementById("userScore").innerHTML = showScore;
}

$(document).ready(function () {
  $("#submitButton").click(function () {
    $(this).addClass("hide");
  });
});
