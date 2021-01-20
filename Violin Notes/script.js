const startWindow = document.querySelector("#start-window");
let oldRandom = -1;
const bottom = document.getElementById("bottom");
const happy = document.getElementById("happy-face");
const sad = document.getElementById("sad-face");
const answer = document.getElementById("answer-button");
const answerImage = document.getElementById("answer-image");
const restart = document.getElementById("restart");
const pickString = document.querySelectorAll(".pick-string");

pickString.forEach((item) => {
  item.addEventListener("click", () => {
    stringPicked = item.id;
    noteNameButtons = document.querySelectorAll(
      `.${stringPicked}` + "-note-name-button"
    );
    startGame();
  });
});

function startGame() {
  startWindow.classList.add("hidden");
  answer.classList.remove("hidden");
  restart.classList.remove("hidden");
  randomNote();
  showNoteNames();
}

//randomly pick a note and display
function randomNote() {
  let newRandom = Math.floor(Math.random() * 4);
  if (newRandom !== oldRandom) {
    randomNoteId = stringPicked + `${newRandom}`;
    displayImage = document.getElementById(`${randomNoteId}`);
    displayImage.classList.remove("hidden");
    showNoteNames();
    oldRandom = newRandom;
  } else randomNote();
}

function checkAnswer(e) {
  answerImage.classList.add("hidden");
  if (e.target.dataset.notename === displayImage.dataset.notename) {
    confetti.start(1000);
    showHappy();
    setTimeout(() => {
      hideHappy();
      hideAll();
      randomNote();
    }, 700);
  } else {
    showSad();
    setTimeout(() => {
      hideSad();
    }, 700);
  }
}

function hideAll() {
  displayImage.classList.add("hidden");
  for (i = 0; i < noteNameButtons.length; i++) {
    noteNameButtons[i].classList.add("hidden");
  }
}

function showNoteNames() {
  for (i = 0; i < noteNameButtons.length; i++) {
    noteNameButtons[i].classList.remove("hidden");
  }
}

function showHappy() {
  happy.classList.remove("hidden");
}

function hideHappy() {
  happy.classList.add("hidden");
}

function showSad() {
  sad.classList.remove("hidden");
}

function hideSad() {
  sad.classList.add("hidden");
}

answer.addEventListener("click", () => {
  document.getElementById("answer-image").classList.toggle("hidden");
});

restart.addEventListener("click", () => {
  hideAll();
  startWindow.classList.remove("hidden");
  answer.classList.add("hidden");
  restart.classList.add("hidden");
});
