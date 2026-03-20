const questions = [
  { q: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text", "None", "Tool"], answer: "Hyper Text Markup Language" },
  { q: "CSS is used for?", options: ["Logic", "Styling", "Structure", "None"], answer: "Styling" },
  { q: "JS stands for?", options: ["JavaScript", "JavaStyle", "None", "Script"], answer: "JavaScript" },
  { q: "Python keyword?", options: ["def", "function", "fun", "define"], answer: "def" },
  { q: "HTML link tag?", options: ["<a>", "<link>", "<url>", "<href>"], answer: "<a>" },
  { q: "CSS color property?", options: ["color", "bgcolor", "font", "style"], answer: "color" },
  { q: "JS used for?", options: ["Logic", "Style", "Structure", "None"], answer: "Logic" },
  { q: "Python extension?", options: [".py", ".js", ".html", ".css"], answer: ".py" },
  { q: "Image tag?", options: ["<img>", "<pic>", "<image>", "<src>"], answer: "<img>" },
  { q: "CSS full form?", options: ["Cascading Style Sheets", "Creative Style", "None", "Computer Style"], answer: "Cascading Style Sheets" }
];

let index = Number(localStorage.getItem("index")) || 0;
let score = Number(localStorage.getItem("score")) || 0;
let time = 10;
let timer;

function loadQuestion() {
  clearInterval(timer);
  time = 10;

  document.getElementById("timer").innerText = time;
  document.getElementById("timer").classList.remove("danger");

  document.getElementById("progress").innerText =
    "Question " + (index + 1) + " / " + questions.length;

  let q = questions[index];
  document.getElementById("question").innerText = q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      let allBtns = document.querySelectorAll("#options button");

      allBtns.forEach(b => {
        b.disabled = true;
        if (b.innerText === q.answer) {
          b.classList.add("correct");
        }
      });

      if (opt === q.answer) {
        btn.classList.add("correct");
        score++;
        localStorage.setItem("score", score);
      } else {
        btn.classList.add("wrong");
      }

      setTimeout(next, 1000);
    };

    optionsDiv.appendChild(btn);
  });

  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;

    if (time <= 3) {
      document.getElementById("timer").classList.add("danger");
    }

    if (time === 0) next();
  }, 1000);
}

function next() {
  clearInterval(timer);
  index++;
  localStorage.setItem("index", index);

  if (index < questions.length) {
    loadQuestion();
  } else {
    window.location.href = "result.html";
  }
}

loadQuestion();