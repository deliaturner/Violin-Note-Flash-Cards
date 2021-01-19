const start = document.getElementById("start-button");
const startWindow = document.querySelector("#start");
const noteNameButtons = document.querySelectorAll(".note-name-button");
let oldRandom = -1;
const bottom = document.getElementById("bottom");
const happy = document.getElementById("happy-face");
const sad = document.getElementById("sad-face");

// Click on Start to remove Start Page, Display Note Names
start.addEventListener("click", function () {
  startWindow.classList.add("hidden");
  randomNote();
  showNoteNames();
});

//randomly pick a note and display
function randomNote() {
  let newRandom = Math.floor(Math.random() * 4);
  if (newRandom !== oldRandom) {
    randomNoteId = "a" + `${newRandom}`;
    displayImage = document.getElementById(`${randomNoteId}`);
    displayImage.classList.remove("hidden");
    showNoteNames();
    oldRandom = newRandom;
  } else randomNote();
}

function checkAnswer(e) {
  if (e.target.dataset.notename === displayImage.dataset.notename) {
    console.log("YAY");
    //set Time out for congrats window, setTimeout, reset and randomNote
    confetti.start(1000);
    showHappy();
    setTimeout(() => {
      hideHappy();
      hideAll();
      randomNote();
    }, 700);
  } else {
    console.log("BOO");
    showSad();
    setTimeout(() => {
      hideSad();
    }, 700);
    //sad, try again, setTimeout do not reset
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
