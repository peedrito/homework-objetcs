// Exercício (07) - Organizando livro;

const book = {
    name: 'O poder do hábito',
    chapters: [
        {
            number: 0,
            name: "O loop do hábito",
        },
        {
            number: 0,
            name: "O cérebro ansioso",
        },
        {
            number: 0,
            name: "A regra de ouro da mudança de hábito",
        },
        {
            number: 0,
            name: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            number: 0,
            name: "Starbucks e o hábito do sucesso",
        },
        {
            number: 0,
            name: "O poder de uma crise",
        },
        {
            number: 0,
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            number: 0,
            name: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            number: 0,
            name: "A neorologia do livre-arbítrio",
        },
    ]
};


for (let i = 0;i < book.chapters.length;i++) {
    book.chapters[i].number = 1 + i;
}

console.log(book);