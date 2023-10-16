// API Endpoint
const api_url = "https://652d7903f9afa8ef4b277e77.mockapi.io/Tasks";

// Global Variables
const date = new Date();
const options = { month: "long", day: "numeric", year: "numeric" };
const audio = new Audio("assets/audio/ping.mp3");

// Logo Animation
anime({
  targets: ".loading",
  direction: "alternate",
  loop: false,
  duration: 1000,
  easing: "easeInOutCirc",
  update: function (animation) {
    document.querySelector(".percentage").innerHTML =
      Math.round(animation.progress) + "%";
  },
});

setTimeout(() => {
  document.getElementsByClassName("loading")[0].style.display = "none";
}, 1000);

// Dark Mode
if (localStorage.getItem("preferDark") == "1") {
  enableDarkMode();
}

function enableDarkMode() {
  document.body.classList.toggle("dark");
  const darkMode = document.getElementById("dark-mode");
  document.getElementById("loading").style.backgroundColor = "#121212";
  document.querySelector(".percentage").style.color = "#FFF";
  darkMode.innerHTML === "Enable Dark Mode"
    ? (darkMode.innerHTML = "Disable Dark Mode")
    : (darkMode.innerHTML = "Enable Dark Mode");
}

document.getElementById("dark-mode").addEventListener("click", function () {
  enableDarkMode();
  localStorage.getItem("preferDark") == "1" ? localStorage.setItem("preferDark", "0") : localStorage.setItem("preferDark", "1");
});

// Set Date
document.getElementById("date").innerHTML = date.toLocaleDateString("en-US", options);
document.getElementById("due-date").valueAsDate = date;