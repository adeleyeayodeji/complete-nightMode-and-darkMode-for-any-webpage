//use query selector
let button = document.querySelector("#nightMode");
//add event listener
button.addEventListener("click", () => {
  var documentElement = document.documentElement;
  //check if document element contain dark mode class
  if (documentElement.classList.contains("dark-mode")) {
    //remove dark mode class from document element
    documentElement.classList.remove("dark-mode");
    //set button text to dark mode
    button.textContent = "Toggle dark mode";
    //save dark mode to local storage
    localStorage.setItem("ERTdarkMode", "false");
  } else {
    //add dark mode class to document element
    documentElement.classList.add("dark-mode");
    //set button text to light mode
    button.textContent = "Toggle light mode";
    //save dark mode to local storage
    localStorage.setItem("ERTdarkMode", "true");
  }
});

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
    //set button text to light mode
    button.textContent = "Toggle light mode";
  }
};

//run init
initDarkMode();
