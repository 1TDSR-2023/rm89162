// var nome1 = "Petroni";
// let nome2 = "Derick";
// const nome3 = "Juan";

// if(nome1 != "") {
// let nome1 = "Geovana";
// }

// console.log(nome1);

let botao = document.getElementById("meu-btn");
botao.addEventListener("click", function(){
    // console.log(this.textContent);
    let r=0,g=0,b=0;
    r= Math.round(Math.random()*255);
    g= Math.round(Math.random()*255);
    b= Math.round(Math.random()*255);

    // this.setAttribute("style","background-color:rgb("+r+", "+g+", "+b+");");
    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
} );
