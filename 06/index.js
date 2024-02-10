// Exercício (06) - Geração nutella e geração raiz;

const users = [
    {
        name: "João",
        age: 25,
    },
    {
        name: "Ana",
        age: 18,
    },
    {
        name: "Beatriz",
        age: 15,
    },
    {
        name: "Carlos",
        age: 16,
    },
    {
        name: "Antonio",
        age: 32,
    },
];

const adults = [];
const youngs = [];

for (const search of users) {
    if(search.age < 18) {
        youngs.push(search);
    } else if (search.age >= 18) {
        adults.push(search);
    }
}

console.log(adults, youngs);