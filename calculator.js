let equal_pressed = false;
// Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
// Refer input, equal, clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

// Access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed) {
      input.value = "";
      equal_pressed = false;
    }
    // Display values of each value
    input.value += button_class.value;
  });
});

// Solvethe user's input when clicked on equal sign
equal.addEventListener("click", () => {
  equal_pressed = true;
  let inp_val = input.value;
  try {
    // Evaluate user's input
    let solution = eval(inp_val);
    // True for natural numbers
    // False for decimals
    if(Number.isInteger(solution)){
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alert("Invalid Input");
  }
});

// Clear whole input
clear.addEventListener("click", () => {
  input.value = "";
});

// Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});