const toggleButton = document.querySelector(".toggle-btn");
const toggleCircle = document.getElementById("circle");
const body = document.body;
const heading = document.querySelector(".white");

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    toggleCircle.style.left = "5px";
    heading.style.color = "rgb(33, 33, 33)";
  } else {
    body.classList.add("dark-mode");
    toggleCircle.style.left = "70px";
    heading.style.color = "white";
  }
});
