


const myArray = [];
// solicitar 10 nomes para o usuário e armazená-los no myArrayUser
const myArrayUser = [];

let value = 10;

for (let i = 0; i <= 9; i++){
    myArray[i] = value;
    value += 10;
}

console.log(myArray);
console.log(myArrayUser);