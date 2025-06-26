console.log("oi - Recuperação de dados do localStorage");

//console.log(localStorage.getItem("name"));
//console.log(localStorage.getItem("age"));
//console.log(localStorage.getItem("students"));

console.log(localStorage.getItem("studentsListMorning"));

let studentsListMorningString = localStorage.getItem("studentsListMorning");
console.log(JSON.parse(studentsListMorningString));
let studentsListMorning = JSON.parse(localStorage.getItem("studentsListMorning"));
console.log(studentsListMorning);