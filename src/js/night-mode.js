//use query selector
let button = document.querySelector("#adeleyeayodeji");
//add event listener
button.addEventListener("change", () => {
  //check if button is checked
  if (button.checked) {
    //do something if the button is checked
    nightModeOn();
  } else {
    //do something if the button is not checked
    nightModeOff();
  }
});

//nightModeOn
let nightModeOn = () => {
  var documentElement = document.documentElement;
  //check if document element does not contain dark mode class
  if (!documentElement.classList.contains("dark-mode")) {
    //add dark mode class to document element
    documentElement.classList.add("dark-mode");
    //save dark mode to local storage
    localStorage.setItem("ERTdarkMode", "true");
  }
};

//nightModeOff
let nightModeOff = () => {
  var documentElement = document.documentElement;
  //check if document element contain dark mode class
  if (documentElement.classList.contains("dark-mode")) {
    //remove dark mode class from document element
    documentElement.classList.remove("dark-mode");
    //save dark mode to local storage
    localStorage.setItem("ERTdarkMode", "false");
  }
};

//init
let initDarkMode = () => {
  //get dark mode from local storage
  let darkMode = localStorage.getItem("ERTdarkMode");
  //check if dark mode is null
  if (darkMode === null) {
    //return false
    return false;
  }
  //check if dark mode is true
  if (darkMode === "true") {
    //add dark mode class to document element
    document.documentElement.classList.add("dark-mode");
    //check the button
    button.checked = true;
  }
};

//run init
initDarkMode();
