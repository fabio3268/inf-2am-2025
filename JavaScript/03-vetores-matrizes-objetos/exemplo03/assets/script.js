const pessoas = [
    {
        nome: 'João',
        idade: 16,
        email: 'joao.silva@gmail.com',
    },
    {
        nome: 'Marcelo',
        idade: 38,
        email: 'marcelozucca@gmail.com',
    },
    {
        nome: 'Maria',
        idade: 19,
        email: 'mama2001@gmail.com',
    },
    {
        nome: 'Rafaela',
        idade: 12,
        email: 'rafafanti@gmail.com',
    },
    {
        nome: 'Guilherme',
        idade: 24,
        email: 'guilhermecardoso@gmail.com',
    },
];
/*
const array = [1, 2, 3, 4, 5, 6];
console.log(array);

array.forEach((value,index,vet) => {
    console.log(index, value);
    vet[index] = vet[index] + 2;
});
console.log(array);
*/

//console.log(pessoas);

pessoas.forEach((value, index, vet) => {
    console.log(value.nome, value.idade);
    value.idade++;
    //vet[index].idade++;
});

//console.log(pessoas);