//DOM
const toggleSwitch = document.querySelector("input[type = 'checkbox']");

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

//Event Listner
toggleSwitch.addEventListener("change", switchTheme);
