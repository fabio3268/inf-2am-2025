console.log("Exercício 01");

const myArrayNames = [];
let i = 0;
console.log(myArrayNames);

const button = document.querySelector("button");
const inputName = document.querySelector("input");

button.addEventListener("click", () => {
    myArrayNames[i] = inputName.value;
    console.log(myArrayNames);
    i++;
});