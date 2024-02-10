// Exercício (10) - Organizando compras;

// consumer
const patricia = { name: "Patricia", cart: [] };
const carlos = { name: "Carlos", cart: [] };
const renato = { name: "Renato", cart: [] };
const jose = { name: "José", cart: [] };
const roberto = { name: "Roberto", cart: [] };

// products
const tv = { name: "TV Samsung 4K", valueinCents: 129900 };
const notebook = { name: "Notebook Dell", valueinCents: 399990 };
const mouse = { name: "Mouse MX Master 3", valueinCents: 23000 };
const teclado = { name: "Teclado Keychron K8", valueinCents: 50000 };
const caboUsb = { name: "Cabo USB 2 Metros", valueinCents: 1990 };
const carregador = { name: "Carregador portátil", valueinCents: 4590 };
const webcam = { name: "Webcam C920s", valueinCents: 80000 };
const monitor = { name: "Monitor LG 29 FHD", valueinCents: 129900 };

// a. Adicione uma tv, dois cabos usb e uma webcam para o José
jose.cart.push(tv, caboUsb, caboUsb, webcam);
// b. Adicione dois notebooks para o Carlos
carlos.cart.push(notebook, notebook);
// c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
patricia.cart.push(teclado, caboUsb, caboUsb, carregador, mouse, monitor);
// d. Adicione cinco webcams para o Renato
renato.cart.push(webcam, webcam, webcam, webcam, webcam);
// e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
roberto.cart.push(webcam, caboUsb, caboUsb, monitor);

// Imprime no console
console.log(jose, carlos, patricia, renato, roberto);