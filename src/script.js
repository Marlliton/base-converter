import { baseConverter } from "./logic/index.js";

const button = document.querySelector(".btn");
const decNumber = document.querySelector(".decNumber");
const base = document.querySelector(".base");
const screenResult = document.querySelector(".result p");

button.addEventListener("click", () => {
  let showResult = true;

  const fields = [decNumber, base];
  fields.forEach(field => {
    if (
      field.value == "" ||
      !(base.value == 2 || base.value == 16 || base.value == 8)
    ) {
      const validateError = document.querySelector(".right");
      validateError.classList.add("validateError");
      showResult = false;
    }
  });

  const formError = document.querySelector(".validateError");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName == "nono") {
        formError.classList.remove("validateError");
      }
    });
  }

  if (showResult) {
    const result = baseConverter(decNumber.value, base.value);
    screenResult.innerText = result;
    screenResult.style.opacity = "1";
  }
});

const ulNumbers = document.querySelector(".ulNumbers");

for (let i = 0; i < 30; i++) {
  const random = (max, min) => Math.random() * (max - min) + min;

  const digits = Math.floor(random(2, 0));
  const size = Math.floor(random(13, 2));
  const position = random(99, 1);
  const duration = random(30, 16);
  const delay = random(5, 0.1)

  const li = document.createElement("li");
  let text = document.createTextNode(`${digits}`);

  li.style.left = `${position}%`;
  li.style.fontSize = `${size}rem`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.bottom = `-${size}%`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  li.appendChild(text);

  ulNumbers.appendChild(li);
}
