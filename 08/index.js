// Exercício (08) - Apresentação de pets;

const users = [
    {
        name: "João",
        pets: [],
    },
    {
        name: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        name: "Beatriz",
        pets: ["Lessie"],
    },
    {
        name: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        name: "Antonio",
        pets: ["Naninha"],
    },
];

for (search of users) {
    if (search.pets.length === 0) {
        console.log(`Hello, I'm ${search.name} and i not have pets.`);
    } else {
        console.log(`Hello, I'm ${search.name} and i have ${search.name.length} pets.`);
    }
}