// Lista de objetos para armazenar os alunos
let students = [
    {
        name: "Fábio",
        grade: 10
    },
    {
        name: "Godofredo",
        grade: 7
    },
    {
        name: "Maria",
        grade: 8
    }
];

console.log("Olá, Exemplo 01!");

const inputName = document.querySelector("#studentName");
const inputGrade = document.querySelector("#studentGrade");
const buttonInsert = document.querySelector("#insert");

const studentList = document.querySelector(".students-list");

function renderStudentsList () {
    studentList.innerHTML = "";

    console.log(students.length);

    if(students.length === 0) {
        studentList.innerHTML = "<div class=\"empty-state\">\n" +
            "                Nenhum estudante cadastrado...\n" +
            "            </div>";
        return;
    }

    students.forEach((student, index) => {
        //console.log(student.name, student.grade);
        const cardStudent = document.createElement("div");
        cardStudent.classList.add("student-card");
        cardStudent.innerHTML = `
                <span class="student-name">${student.name}</span>
                <span class="student-grade">${student.grade}</span>
                <button class="btn-delete" idStudent="${index}" title="Excluir aluno">
                    🗑️ Excluir
                </button>
`;
//console.log(cardStudent);
        studentList.appendChild(cardStudent);
    });
}


const errorMessage = document.querySelector(".error-message");

buttonInsert.addEventListener("click", () => {
    //console.log(inputName.value, inputGrade.value);
    if(inputName.value === "" || inputGrade.value === "") {
        errorMessage.textContent = "Informe nome e nota do aluno!";
        //return;
    } else {
        students.push(
            {
                name: inputName.value,
                grade: inputGrade.value
            }
        );
        //console.table(students);
        renderStudentsList();
        inputName.value = "";
        inputGrade.value = "";
        errorMessage.textContent = "";
    }

});

studentList.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName === "BUTTON") {
        //console.log("Oi, estou clicando na lista de estudantes");
        //console.log(event.target.tagName);
        //console.log(event.target.getAttribute("idStudent"));
        students.splice(event.target.getAttribute("idStudent"),1);
        renderStudentsList();
        //console.log(students);
    }

});
