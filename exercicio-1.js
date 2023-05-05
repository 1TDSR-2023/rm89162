const botao1 = document.getElementById('botao1');
const img = document.getElementById('img');
const botao2 = document.getElementById('botao2');
const msg = document.getElementById('msg');
const botao3 = document.getElementById('botao3');
const elemento = document.getElementById('oculto');

function altCor() {
    let r=0,g=0,b=0;
    r= Math.round(Math.random()*255);
    g= Math.round(Math.random()*255);
    b= Math.round(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
};

function addNome() {
    const texto = document.getElementById("texto").value;
    const lista = document.getElementById("lista");
    const novoNome = document.createElement("li");
    novoNome.innerText = texto;
    lista.appendChild(novoNome);
    document.getElementById("texto").value = "";
  };

  
  botao1.addEventListener('click', function() {
    if (img.getAttribute('src') === 'earth.svg') {
      img.setAttribute('src', 'luna.svg');
      img.setAttribute('alt', 'Imagem da lua');
      nome.textContent = 'Lua';
    } else if(img.getAttribute('src') === 'luna.svg') {
      img.setAttribute('src', 'neptune.svg');
      img.setAttribute('alt', 'Imagem da netuno');
      nome.textContent = 'Netuno';
    } else if(img.getAttribute('src') === 'neptune.svg') {
        img.setAttribute('src', 'earth.svg');
        img.setAttribute('alt', 'Imagem da terra');
        nome.textContent = 'Terra';
      }
  });

botao2.addEventListener('click', function() {
    if (msg.textContent === ' ') { 
      msg.textContent = 'Olá mundo';
    } else {
        msg.textContent = ' ';
    }
});

botao3.addEventListener('click', function() {
    oculto.style.display = 'none';
  });