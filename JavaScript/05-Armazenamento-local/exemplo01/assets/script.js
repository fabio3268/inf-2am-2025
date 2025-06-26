console.log("oi");

localStorage.setItem("name", "João");
localStorage.setItem("age", 23);

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));

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

console.log(JSON.stringify(students));
localStorage.setItem("studentsListMorning", JSON.stringify(students));

//const names = ["João", "Fábio", "Godofredo", "Maria"];
// JSON
//console.log(JSON.stringify(students, null, 2));
//localStorage.setItem("students", JSON.stringify(students, null, 2));