const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("focus", ()=>{
    inputEmail.setAttribute("style", "outline-color: #ff0000;");
});

const inputSenha = document.querySelector("#idSenha");
inputEmail.addEventListener("keyup", ()=>{
    
    const lblEmail = document.querySelector("label[for='idEmail']");
    
    if(inputEmail.value.length < 5) {
        inputEmail.setAttribute("style", "outline-color: #ff0000;");
        lblEmail.setAttribute("style", "color:#ff0000;");
        
    } else {
        inputEmail.setAttribute("style", "outline-color: #00ff00;");
        lblEmail.setAttribute("style", "color:#00ff00;");
    }
});

const eyePass = document.querySelector(".fa-eye");

eyePass.addEventListener("click", ()=>{
    

    if(inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text");
        eyePass.setAttribute("class", "fa fa-eye-slash");
    } else {
        inputSenha.setAttribute("type", "password");
        eyePass.setAttribute("class", "fa fa-eye");
    }
})

// const usuario1 = {
//     nomeCompleto : "Murilo Nogueira",
//     emailUsuario : "murilo@email.com",
//     senhaUsuario : "123456"
// }
// const usuario2 = {
//     nomeCompleto : "asfsaf Nogueira",
//     emailUsuario : "asfsaf@email.com",
//     senhaUsuario : "654321"
// }

// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);


let listaDeUsuarios = [

    {
        nomeCompleto : "Murilo Nogueira",
        emailUsuario : "murilo@email.com",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Junior Nogueira",
        emailUsuario : "junior@email.com",
        senhaUsuario : "654321"
    }
    ,
    {
        nomeCompleto : "Filho Nogueira",
        emailUsuario : "filho@email.com",
        senhaUsuario : "654321"
    }
    ,
    {
        nomeCompleto : "Neto Nogueira",
        emailUsuario : "neto@email.com",
        senhaUsuario : "654321"
    }
    ,
    {
        nomeCompleto : "Segundo Nogueira",
        emailUsuario : "segundo@email.com",
        senhaUsuario : "654321"
    }
]
    
    


const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{

let userValidado = {
        emailUsuarioValidado : inputEmail.value,
        senhaUsuarioValidado : inputEmail.value
    }

    try{
        listaDeUsuarios.forEach((usuario)=>{
            if(userValidado.emailUsuarioValidado == usuario.emailUsuario && userValidado.senhaUsuarioValidado == usuario.senhaUsuario) {
                userValidado = usuario;
                throw "VALIDADO";
            }
        });

        throw "SENHA INVALIDA"

    } catch (msg) {

        const msgStatus = document.querySelector("#msgStatus");

        if(msg == "VALIDADO") {
            msgStatus.setAttribute("style", "color: #00ff00");
            msgStatus.innerHTML = `<span> <strong>Usuario: ${userValidado.nomeCompleto},Login efetuado com sucesso! </strong> </span>`
        } else {
            msgStatus.setAttribute("style", "color: #ff0000");
            msgStatus.innerHTML = "<span> <strong>Nome de usuario ou senha invalidos! </strong> </span>"
        }
    }

    // listaDeUsuarios.forEach((usuario)=>{

    //     if(userValidado.emailUsuarioValidado == usuario.emailUsuario && userValidado.senhaUsuarioValidado == usuario.senhaUsuario) {
    //         userValidado = usuario;
    //     }
    // });

    // if(userValidado.emailUsuarioValidado == inputEmail.value && userValidado.senhaUsuarioValidado == inputSenha.value) {
    //     console.log("USUARIO VALIDADO!")
    // } else {
    //     console.log("SENHA OU NOME DE USUARIOS INVALIDOS!")
    // }

});