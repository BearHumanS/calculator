const btns = document.querySelectorAll("button");
const expression = document.querySelector("#expression");
const history = document.querySelector("#history");
let prevCalculation = "";

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.id === "btnClear") {
      expression.value = expression.value.slice(0, -1);
    } else if (btn.id === "btnAC") {
      expression.value = "";
      history.innerHTML = "";
      prevCalculation = "";
    } else if (btn.id === "btnCE") {
      expression.value = "";
    } else if (btn.id === "btnPercent") {
      expression.value = expression.value / 100;
    } else if (btn.id === "btnEquals") {
      let result = eval(expression.value);
      prevCalculation = expression.value + " = " + result;
      expression.value = ""; // Reset the input value to empty string
      history.innerHTML +=
        '<li><a href="#">' +
        prevCalculation +
        '</a> <button class="btnErase">x</button></li>';
    } else {
      expression.value += btn.textContent;
    }
  });
});

history.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    expression.value = e.target.textContent.split(" = ")[0];
  } else if (e.target.className === "btnErase") {
    e.target.parentNode.remove();
  }
});
