// let frutas = ["banana", "limão","laranja", "tomate", "abacaxi", "melancia"];
// console.log(frutas);
// console.table(frutas);
// console.log(frutas[0]);
// console.log(frutas[6]);

// frutas.push("manga");
// console.log(frutas);

// frutas.unshift("pitaya");
// console.log(frutas);

// frutas.pop();
// console.log(frutas);

// frutas.shift();
// console.log(frutas);

// // let indice = frutas.indexOf("laranja");
// // console.log(`O indice encontrado foi: ${indice}`);
// // console.log(`O item buscado foi: ${frutas[indice]}`);

let indice = frutas.indexOf("melancia")
console.log(`O item encontrado no indice antes da remoção foi: ${frutas[indice]}`);
frutas.splice(indice,1);
console.log(frutas);
console.log(`o item encontrado no indice depois da remoção foi: ${frutas[indice]}`);
