const input = document.querySelector("input");
const button = document.querySelector("button");
const delivered = document.querySelector("#delivered");

button.addEventListener("click", () => {
  if (input.value != "") {
    delivered.textContent = input.value;
    localStorage.setItem("msg", JSON.stringify(input.value));
    input.value = "";
  } else {
    alertfunc();
    setTimeout(() => {
      delivered.textContent = JSON.parse(localStorage.getItem("msg"));
      delivered.className = "";
    }, 3000);
  }
});
function alertfunc() {
  delivered.textContent = "Please Enter a Valid Message";
  delivered.className = "show";
}

document.addEventListener("DOMContentLoaded", () => {
  delivered.textContent = JSON.parse(localStorage.getItem("msg"));
});
