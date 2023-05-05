function altCor() {
    let r=0,g=0,b=0;
    r= Math.round(Math.random()*255);
    g= Math.round(Math.random()*255);
    b= Math.round(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}

function addNome() {
    const texto = document.getElementById("texto").value;
    const lista = document.getElementById("lista");
    const novoNome = document.createElement("li");
    novoNome.innerText = texto;
    lista.appendChild(novoNome);
    document.getElementById("texto").value = "";
  }