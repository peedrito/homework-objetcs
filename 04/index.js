// Exercício (04) - Mudando valor boleando com loop;


const users = [
    {
        name: "João",
        age: 25,    
        isLegalAge: false,
    },
    {
        name: "Ana",
        age: 18,
        isLegalAge: false,
    },
    {
        name: "Beatriz",
        age: 15,
        isLegalAge: false,
    },
    {
        name: "Carlos",
        age: 16,
        isLegalAge: false,
    },
    {
        name: "Antonio",
        age: 32,
        isLegalAge: false,
    },
];

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        users[i].isLegalAge = true;
    }
}

console.log(users);