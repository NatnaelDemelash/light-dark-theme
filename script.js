//DOM
const toggleSwitch = document.querySelector("input[type = 'checkbox']");
const toggleIcon = document.getElementById("toggle-icon");
const Image1 = document.getElementById("image1");
const Image2 = document.getElementById("image2");
const Image3 = document.getElementById("image3");

const darkMode = () => {
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
};

const lightMode = () => {
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
};

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}

//Event Listner
toggleSwitch.addEventListener("change", switchTheme);
