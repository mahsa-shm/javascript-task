// BMI CALCULATOR
const bmi = () => {
  const height = document.getElementById("Height-input");
  const weight = document.getElementById("Weight-input");
  const result = document.getElementById("bmi-result");
  const status = document.getElementById("bmi-status");

  const heightSpan = document.getElementById("Height-span");
  const weightSpan = document.getElementById("Weight-span");

  heightSpan.innerText = height.value;
  weightSpan.innerText = weight.value;

  let bmi = (weight.value / Math.pow(height.value / 100, 2)).toFixed(1);
  result.innerText = bmi + " kg/m2";

  if (bmi <= 18.4) {
    status.innerText = "Underweight";
    status.style.color = " rgb(136, 127, 9)";
    status.style.borderBottom = "1px solid  rgb(136, 127, 9)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status.innerText = "Normal";
    status.style.color = "green";
    status.style.borderBottom = "1px solid green";
  } else if (bmi >= 25.0 && bmi <= 39.9) {
    status.innerText = "Overweight";
    status.style.borderBottom = "1px solid darkOrange";
    status.style.color = "darkOrange";
  } else if (bmi >= 40.0) {
    status.innerText = "Obese";
    status.style.borderBottom = "1px solid red";
    status.style.color = "red";
  }
};
/*********************************************************************** */
// MUSIC PLAYER

/*********************************************************************** */
// COUNTDOWN AND TIMER

// const day = document.getElementById("day");
// const hour = document.getElementById("hour");
// const minute = document.getElementById("minute");
// const second = document.getElementById("second");
// const start = 10;
// let sec = start * 60; //we want to have all the seconds
// setInterval(countdown, 1000);
// function countdown() {
//   // let myDay = me
//   let myMinute = Math.floor(sec / 60);
//   let mySecond = sec % 60;
//   // let myDay =  ;
//   // let myHour = ;
//   mySecond = mySecond < 10 ? "0" + mySecond : mySecond;
//   minute.innerText = `${myMinute}`;
//   second.innerText = `${mySecond}`;
//   sec--;
// }

// ******************************************************
// FORM VALIDATION

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Repassword = document.getElementById("re-password");

const usernameError = document.getElementById("username-e");
const emailError = document.getElementById("email-e");
const passwordError = document.getElementById("password-e");
const RepasswordError = document.getElementById("re-password-e");
const RepasswordError2 = document.getElementById("re-password-e-2");
const allLabels = document.querySelectorAll("label");
const AllInputs = document.querySelectorAll(".input-div input");
const errors = document.querySelectorAll(".invalid");

username.addEventListener("input", (e) => {
  const { value } = e.target;
  if (value.length < 6) {
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
  }
});
// -----------------------------------------------------
email.addEventListener("input", (e) => {
  const { value } = e.target;
  let emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  var checkEmailRegEx = emailRegEx.test(value);

  if (!checkEmailRegEx) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});
//-------------------------------------------------------
password.addEventListener("input", (e) => {
  const { value } = e.target;
  let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  var checkPasswordRegEx = passwordRegEx.test(value);

  if (!checkPasswordRegEx || value.length < 8) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});
//-------------------------------------------------------
Repassword.addEventListener("input", (e) => {
  const { value } = e.target;
  const passwordValue = password.value;

  if (password.value.length == 0) {
    password.focus();
    RepasswordError2.style.display = "block";
    Repassword.value = null;
  } else if (value !== passwordValue) {
    RepasswordError.style.display = "block";
    RepasswordError2.style.display = "none";
  } else {
    RepasswordError.style.display = "none";
  }
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value.length == 0) {
    username.focus();

    return;
  }

  if (email.value.length == 0) {
    email.focus();
    return;
  }
  if (password.value.length == 0) {
    password.focus();
    return;
  }
  if (Repassword.value.length == 0) {
    Repassword.focus();
    return;
  }
});
///---------------------------------------------------
AllInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const { value } = e.target;
    if (value !== null) {
      allLabels.forEach((label) => {
        if (label.htmlFor == input.id) {
          label.classList.add("label-focus");
        } else if (value === null) {
          label.classList.remove("label-focus");
        }
      });
    }
  });
});

// ******************************************************
// Music Player
const audio = document.createElement("audio");
const cover = document.querySelector("#song-cover");
const title = document.querySelector("#song-title");
const artist = document.querySelector("#song-artist");
const playpauseBtn = document.querySelector("#playPauseBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const progressBar = document.querySelector("#progress");
const shuffleBtn = document.querySelector("#shuffleBtn");
const repeatBtn = document.querySelector("#repeatBtn");

let index = 0;
let isPlaying = false;
let isShuffle = false;
let updateTimer;

const playList = [
  {
    title: "The Color Violet",
    artist: "Tory Lanez",
    img: "images/The Color Violet.png",
    song: "https://ts16.tarafdari.com/contents/user300048/content-sound/the_color_violet_-_tory_lanez_320.mp3",
  },
  {
    title: "Style",
    artist: "Taylor Swift",
    img: "images/style.png",
    song: "https://ts1.tarafdari.com/contents/user196737/content-sound/03_style.mp3",
  },
  {
    title: "Blinding Lights",
    artist: "The Weekend",
    img: "images/Blinding Lights.png",
    song: "https://ts11.tarafdari.com/contents/user760078/content-sound/blinding_lights.mp3",
  },
  {
    title: "Radioactive",
    artist: "Imagine Dragons",
    img: "images/Radioactive.jpeg",
    song: "https://ts2.tarafdari.com/contents/user376534/content-sound/imagine_dragons_-_radioactive_-_320_2.mp3",
  },
];
playSong(index);

function playSong(song) {
  clearInterval(updateTimer);
  reset();

  audio.src = playList[song].song;
  audio.load();
  cover.src = playList[song].img;
  artist.textContent = playList[song].artist;
  title.textContent = playList[song].title;

  updateTimer = setInterval(setUpdate, 1000);

  audio.addEventListener("ended", nextSong);
}

function shuffleSong() {
  isShuffle ? pauseRandom() : playRandom();
}
function playRandom() {
  isShuffle = true;
  shuffleBtn.innerHTML = `<i class="bi bi-arrow-left-right"></i>`;
}
function pauseRandom() {
  isShuffle = false;
  shuffleBtn.innerHTML = `<i class="bi bi-shuffle"></i>`;
}
function repeatSong() {
  let index = index; 
}

function playpauseSong() {
  isPlaying ? pauseS() : playS();
}
function playS() {
  audio.play();
  isPlaying = true;
  playpauseBtn.innerHTML = `<i class="bi bi-pause-btn"></i>`;
}
function pauseS() {
  audio.pause();
  isPlaying = false;
  playpauseBtn.innerHTML = `<i class="bi bi-play-btn"></i>`;
}

function nextSong() {
  if (index < playList.length - 1 && isShuffle === false) {
    index++;
  } else if (index < playList.length - 1 && isShuffle === true) {
    let randomIndex = Number.parseInt(Math.random() * playList.length);
    index = randomIndex;
  } else {
    index = 0;
  }
  playSong(index);
  playS();
}
function prevSong() {
  if (index > 0) {
    index--;
  } else {
    index = playList.length - 1;
  }
  playSong(index);
  playS();
}
function repeatSong() {
  let currIndex = index;
  playSong(currIndex);
  playS();
}
function progress() {
  let seek = audio.duration * (progressBar.value / 100);
  audio.currentTime = seek;
}
function reset() {
  progressBar.value = 0;
}

function setUpdate() {
  let progressPosition = 0;
  if (!isNaN(audio.duration)) {
    progressPosition = audio.currentTime * (100 / audio.duration);
    progressBar.value = progressPosition;
  }
}
// *******************************************
//ContDown and Timer
const Day = document.getElementById("day");
const Hour = document.getElementById("hour");
const Minute = document.getElementById("minute");
const Second = document.getElementById("second");

let theEnd = getMyData();

if (!theEnd) {
  const now = new Date();
  now.setDate(now.getDate() + 5);
  theEnd = now.toISOString();
  saveMyData(theEnd);
} else {
  theEnd = new Date(theEnd);
}

function updateTime() {
  const now = new Date().getTime();
  const distance = new Date(theEnd) - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  Day.innerHTML = days;
  Hour.innerHTML = hours;
  Minute.innerHTML = minutes;
  Second.innerText = seconds;

  if (distance < 0) {
    clearInterval(timeInterval);
    Day.innerHTML = "00";
    Hour.innerHTML = "00";
    Minute.innerHTML = "00";
    Second.innerHTML = "00";
  }
}
function saveMyData(myData) {
  localStorage.setItem("theEnd", myData);
}
function getMyData() {
  return localStorage.getItem("theEnd");
}

updateTime();
const timeInterval = setInterval(updateTime, 1000);
