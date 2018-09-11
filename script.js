//* function generating
const colorGen = function() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

//* function to generate and append all internal elements of the div
function injectDom() {
  const color = colorGen();
  const myElement = document.createElement("div");
  myElement.className = "new-color";

  const paras = document.createElement("p");
  const input = document.createElement("input");
  input.type = "text";
  const copy = document.createElement("span");
  copy.classList.add("button", "copy-button");
  copy.innerHTML = "Copy";

  paras.innerHTML = color.toLocaleUpperCase();
  myElement.style.backgroundColor = color;
  input.value = color;

  const new_gen = document.querySelector(".new-gen");
  new_gen.appendChild(myElement);
  myElement.appendChild(paras);
  myElement.appendChild(input);
  myElement.appendChild(copy);

  copy.addEventListener("click", () => {
    input.focus();
    input.setSelectionRange(0, 9999);
    document.execCommand("copy");
  });
}

//* function that calls the generator x number of times
function callTimes(amount) {
  const new_gen = document.querySelector(".new-gen");
  new_gen.innerHTML = "";
  for (i = 0; i < amount; i++) {
    injectDom();
  }
}

//* event listener for Generate button works correctly
//! problem assinging value. right side works but when i assign the value is lost
//! solved by passing .value directly into the function
let staticInput = document.querySelector("#main-input");
const generate = document.querySelector("#generate");
generate.addEventListener("click", () => {
  if (staticInput.value < 5) {
    callTimes(5);
  } else {
    callTimes(staticInput.value);
  }
});
