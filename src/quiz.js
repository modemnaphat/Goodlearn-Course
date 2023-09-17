const quizdata = [
  {
    num: "1",
    question: "Inside which HTML element do we put the JavaScript?",
    choices: {
      a: "<js>",
      b: "<scripting>",
      c: "<script>",
      d: "<javascript>",
    },
    correct: 3,
  },
  {
    num: "2",
    question:
      "What is the correct syntax for referring to an external script called xxx.js?",
    choices: {
      a: '<script name="xxx.js">',
      b: '<script href="xxx.js"',
      c: '<script src="xxx.js>',
      d: '<script title="xxx.js">',
    },
    correct: 3,
  },
  {
    num: "3",
    question: 'How do you write "Hello World" in an alert box?',
    choices: {
      a: 'msgBox("Hello World")',
      b: 'alert("Hello World")',
      c: 'alertBox("Hello World")',
      d: 'msg("Hello World")',
    },
    correct: 2,
  },
  {
    num: "4",
    question: "How do you create a function in JavaScript?",
    choices: {
      a: "function myFunction()",
      b: "function:myFunction()",
      c: "function = myFunction()",
      d: "myFunction() = ",
    },
    correct: 1,
  },
  {
    num: "5",
    question: 'How do you call a function named "myFunction"?',
    choices: {
      a: "call myFunction",
      b: "myFunction()",
      c: "call function myFunction()",
      d: "myFunction.call()",
    },
    correct: 2,
  },
  {
    num: "6",
    question: "How to write an IF statement in JavaScript?",
    choices: {
      a: "if ( a == 5 ) {}",
      b: "if a == 5 then:",
      c: "if i = 5",
      d: "if i == 5 then",
    },
    correct: 1,
  },
  {
    num: "7",
    question: "How does a FOR loop start?",
    choices: {
      a: "for ( i = 0; i <= 5 )",
      b: "for ( i <= 5; i++)",
      c: "for (i = 0; i <= 5; i++)",
      d: "for i = 1,i <= 5",
    },
    correct: 3,
  },
  {
    num: "8",
    question: "How can you add a comment in a JavaScript?",
    choices: {
      a: "<!-- comment -->",
      b: "#comment",
      c: "//comment",
      d: "||comment",
    },
    correct: 3,
  },
  {
    num: "9",
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: { a: "onchange", b: "onscroll", c: "onmouseover", d: "onclick" },
    correct: 4,
  },
  {
    num: "10",
    question: "How do you declare a JavaScript variable?",
    choices: {
      a: "variable name",
      b: "const nameli",
      c: "v score",
      d: "int 50",
    },
    correct: 2,
  },
];

var sumscore = 0;

// quizzcreater
var score = 0;
let tot = quizdata.length;
let mainQUiz = document.getElementById("quiz_main_contianer");
const submited = document.getElementById("submit");
const scorecontain = document.getElementById("scorecontain");

let choicelist = ["a", "b", "c", "d"];
let questionArr = quizdata;

let selected = [];
console.log(selected);
let anslist = [];
for (let i = 0; i < 10; i++) {
  anslist[i] = questionArr[i].correct;
}

createQuestion();
function createQuestion() {
  for (let i = 0; i < questionArr.length; i++) {
    mainQUiz.innerHTML +=
      `
        <div
            id="quiz-container"
            class="max-w-4xl block bg-whisper-500 mx-auto border-2 border-slate-600/10 rounded-lg p-4 my-6"
        >
            <div class="flex p-2 space-x-6 mb-6" class="quizz" id="quiz">
                <div class="text-2xl" id="` +
      ("q" + i) +
      `">` +
      (i + 1) +
      `</div>
                <div class="font-medium" class="question" id="question">` +
      questionArr[i].question +
      `</div>
            </div>
            <div class="mb-4">
                <div id="answer-block" class="px-8 pl-12">
                    <div class="block space-y-2 pb-4">
                    <!-- test -->
                    <div class="space-y-2" id="` +
      ("choiceContainer" + i) +
      `"></div>
        </div>
    `;
  }
}

addQuestion();
addanswer(questionArr);

function getchoiceid(j) {
  targetchoice = document.getElementById("choiceContainer" + [j]);
  return targetchoice;
}

function getanswer(b, c) {
  answer = document.getElementById("labelfor" + (b + 1) + `-` + (c + 1));
}

function addQuestion() {
  for (const key in choicelist) {
    if (Object.hasOwnProperty.call(choicelist, key)) {
      console.log(questionArr[1].choices.key);
    }
  }
  for (let j = 0; j < 10; j++) {
    for (let l = 0; l < 4; l++) {
      getchoiceid(j).innerHTML +=
        `
    <div
        id="choice` +
        (l + 1) +
        `"
        class="flex items-center pl-4 w-full bg-white border-2 border-slate-600/10 rounded-lg"
    >
        <input
            id="answerfor` +
        (j + 1) +
        `-` +
        (l + 1) +
        `"
            type="radio"
            value="` +
        (l + 1) +
        `"
            name="answerfor` +
        (j + 1) +
        `-` +
        `"
            class="w-4 h-5 text-sunglow-500 bg-white border-gray-300 accent-whisper-900"
        />
        <label
            for="answerfor` +
        (j + 1) +
        `-` +
        (l + 1) +
        `"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900"
            class="choice-text"
            data-number="` +
        (l + 1) +
        `"
        id="labelfor` +
        (j + 1) +
        `-` +
        (l + 1) +
        `"
        ></label>
    </div>
    `;
    }
  }
}

function addanswerA() {
  for (let j = 0; j < 10; j++) {
    document.getElementById("labelfor" + (j + 1) + `-` + 1).innerText +=
      questionArr[j].choices.a;
  }
}

function addanswerB() {
  for (let j = 0; j < 10; j++) {
    document.getElementById("labelfor" + (j + 1) + `-` + 2).innerText +=
      questionArr[j].choices.b;
  }
}

function addanswerC() {
  for (let j = 0; j < 10; j++) {
    document.getElementById("labelfor" + (j + 1) + `-` + 3).innerText +=
      questionArr[j].choices.c;
  }
}

function addanswerD() {
  for (let j = 0; j < 10; j++) {
    document.getElementById("labelfor" + (j + 1) + `-` + 4).innerText +=
      questionArr[j].choices.d;
  }
}

function addanswer() {
  addanswerA();
  addanswerB();
  addanswerC();
  addanswerD();
}
displayscore();
function displayscore() {
  for (let i = 0; i < 10; i++) {
    var select = document.getElementsByName("answerfor" + (i + 1) + `-`);
    for (let j = 0; j < select.length; j++) {
      if (select[j].checked) {
        console.log(select[j].value);
      }
    }
  }
}

function displayRadioValue() {
  for (let j = 0; j < 10; j++) {
    var ele = document.getElementsByName("answerfor" + (j + 1) + "-");

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        selected[j] = ele[i].value;
        if (ele[i].value == anslist[j]) {
          score += 1;
        }
      }

      // document.getElementById("result").innerHTML +=
      //   "Gender: " + ele[i].value;
    }
  }

  console.log(score);
}

function submit() {
  mainQUiz.classList.add("hidden");
  submited.classList.add("hidden");
}

function displaysumscore() {
  console.log(score);
  s = document.getElementById("scoredisplay");
  s.innerHTML = score + "/" + tot;
  scorecontain.classList.toggle("hidden");
}

function percantage() {
  if (score > 9) {
    bar = document.getElementById("progress");
    bar.classList.toggle("w-1/4");
    bar.classList.toggle("w-1/2");
  }
}
