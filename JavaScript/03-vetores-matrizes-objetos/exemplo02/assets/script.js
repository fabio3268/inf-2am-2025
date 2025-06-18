console.log("olá");

let name = "João";
let email = "joao@gmail.com";

const user = {
    name: "Fábio",
    email: "fabio@gmail.com"
};

const userList = [];
userList.push(user);
console.log(userList);

user.name = "José";
user.email = "jose@gmail.com";
console.log(user);

userList.push({
    name: "Carlos",
    email: "carlos@gmail.com"
});

console.log(userList);