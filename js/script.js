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

// let indice = frutas.indexOf("melancia")
// console.log(`O item encontrado no indice antes da remoção foi: ${frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(frutas);
// console.log(`o item encontrado no indice depois da remoção foi: ${frutas[indice]}`);

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log("Array 1: " + nr1);
console.log("Array 2: " + nr2);

let nr3 = [...nr1,...nr2];
console.log("Array 3: " + nr3);

nr3.forEach((nr)=>{
        console.log("Items do array 3: " + nr);
});
