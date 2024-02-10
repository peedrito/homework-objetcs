// Exercício (09) - Procure carlos;


const party = [
    { name: "João" },
    { name: "Ana" },
    { name: "Beatriz" },
    { name: "Maria" },
    { name: "Ana Clara" },
    { name: "Joana" },
    { name: "Augusto" },
    { name: "Renan" },
    { name: "Patricia" },
    { name: "Carlos" },
    { name: "Renato" },
    { name: "José" },
    { name: "Roberto" },
    { name: "Sara" },
    { name: "Junior" },
    { name: "Pedro" },
    { name: "Vitor" },
    { name: "Antonio" },
];

for (index in party) {
    const name = party[index].name
    if (name === "Carlos") {
        console.log(`Galera... O Carlos está na posição ${index}, corre lá!`)
    }
}