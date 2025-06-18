const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const buttonAdd = document.querySelector("#add-user");
const buttonSort = document.querySelector("#sort-users");

let listUsers = [
    {
    name: "Fábio Luís",
    email: "fabiosantos@gmail.com",
    password: "23456"
    },
    {
        name: "Godofredo",
        email: "godofredo@gmail.com",
        password: "12345"
    }
    ];

let userId;

const listUsersUl = document.querySelector("#user-list");

function showUsers () {
    listUsersUl.innerHTML = "";
    listUsers.forEach((value, index) => {
        //console.log(value.name, value.email, index)
        const li = document.createElement("li");
        li.setAttribute("userId", index);
        li.innerHTML = `
              Name: ${value.name}, Email: ${value.email}
              <button class="delete">Excluir</button>
              <button class="edit">Editar</button>
        `;
        listUsersUl.appendChild(li);
    });


}

showUsers();

buttonAdd.addEventListener("click", () => {
    listUsers.push(
        {
            name: name.value,
            email: email.value,
            password: password.value
        }
    );
    //console.log(listUsers);
    //console.table(listUsers);
    showUsers();
});

buttonSort.addEventListener("click", () => {
    listUsers.sort((a, b) => a.name.localeCompare(b.name));
    showUsers();
});

listUsersUl.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName == "BUTTON") {

        console.log(event.target.parentElement.getAttribute("userId"));
        userId = event.target.parentElement.getAttribute("userId");
        console.log(listUsers[userId]);

        if(event.target.className == "edit") {
            console.log("vamos editar");
            name.value = listUsers[userId].name;
            email.value = listUsers[userId].email;
        }

        if(event.target.className == "delete") {
            console.log("vamos deletar");
            listUsers.splice(userId, 1);
            showUsers();
        }
    }
});
