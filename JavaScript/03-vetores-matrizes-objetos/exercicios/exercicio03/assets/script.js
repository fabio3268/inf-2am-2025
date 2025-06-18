let arrayNames = [];
let myIndex;
const nameList = document.querySelector("#name-list");
const name = document.querySelector("#name");
const buttonAdd = document.querySelector("#add");
const buttonRemove = document.querySelector("#remove");

function showList () {
    nameList.textContent = "";
    for(let i = 0; i < arrayNames.length; i++){
        const newName = document.createElement("li");
        newName.textContent = arrayNames[i];
        newName.setAttribute("index", i);
        nameList.appendChild(newName);
        console.log(newName);
    }
}

buttonAdd.addEventListener("click", () => {
    arrayNames.push(name.value);
    showList();
});

buttonRemove.addEventListener("click", (event) => {
    // remover a posição myIndex do vetor arrayNames
    // pesquisar uma função no JS que remove uma posição específica de um array
    console.log(myIndex);
    showList();
});

nameList.addEventListener("click", (event) => {
    console.log(event.target.getAttribute("index"));
    myIndex = event.target.getAttribute("index");
});