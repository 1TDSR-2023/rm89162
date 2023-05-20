const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("keyup", ()=>{

    const lblEmail = document.querySelector("label[for='idEmail']");

    if (inputEmail.value.length < 5){
        inputEmail.setAttribute("style", "outline-color:#ff0000;");
        lblEmail.setAttribute("style", "color:#ff0000;");
    } else {
        inputEmail.setAttribute("style", "outline-color:#00ff00;");
        lblEmail.setAttribute("style", "color:#00ff00;");
    }

    // inputEmail.setAttribute("style", "outline-color:#ff0000;");
});
// Mostrar visibilidade da senha
const inputSenha = document.querySelector("#idSenha");
const eyePass = document.querySelector(".fa-eye");

eyePass.addEventListener("click", ()=>{

    if(inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text");
        eyePass.setAttribute("class", "fa fa-eye-slash");
    } else {
        inputSenha.setAttribute("type", "password");
        eyePass.setAttribute("class", "fa fa-eye");
    }

});
//OBJETO

// const usuario1 = {
//     nomeCompleto : "Lucas das Couves", 
//     emailUsuario : "lucas@email.com",
//     senhaUsuario : "123456"
// }

// const usuario2 = {
//     nomeCompleto : "Juan Pelego", 
//     emailUsuario : "juan@email.com",
//     senhaUsuario : "123456"
// }

//Lista de usuários
// let listaDeUsuarios = [];

// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

// let listaDeUsuarios = [
//     {
//         nomeCompleto : "Lucas das Couves", 
//         emailUsuario : "lucas@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Juan Pelego", 
//         emailUsuario : "juan@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Caio Tulipa", 
//         emailUsuario : "tulipa@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Derick Gouvea", 
//         emailUsuario : "juan@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Matheuzim Danado", 
//         emailUsuario : "mateu@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Leonardo Camacho", 
//         emailUsuario : "leleu@email.com",
//         senhaUsuario : "123456"
//     }
// ];

// localStorage.setItem("lista",JSON.stringify(listaDeUsuarios));

const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=> {
    
    //Criando objeto de validação
    let userLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    };

    let userValidado = {

    }


try{

 //Criando iteração
    //Realizar validação com usuário informado
    //Recuperando do localStorage
    let listaDeUsuarios = JSON.parse(localStorage.getItem("lista"));
    listaDeUsuarios.forEach((usuario)=>{
        //Realizando a validação
        //Comparando cada objeto da lista com o objeto montado com os dados que vieram do formulário
        if(userLogado.emailUsuarioLogado == usuario.emailUsuario && userLogado.senhaUsuarioLogado == usuario.senhaUsuario){
            userLogado = usuario
            throw "VALIDADO";
        }

    });
    throw "SENHA OU NOME INVÁLIDO!";
} catch(msg) {
    
    const msgStatus = document.querySelector("#msgStatus");

    if(msg == "VALIDADO"){
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>Usuário: ${userValidado.nomeCompleto}</strong></span>`;

        //adicionando o usuario validado no local storage
        localStorage.setItem("user-validado", JSON.stringify(userValidado));
        const token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        alert(token);

        localStorage.setItem("user-token", token);

        setTimeout(()=> {
            window.location.href = "../home.html";
        },3000);
        //redirect

        
    } else{
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos!</strong></span>";
    }
}

    // if(userValidado.emailUsuarioValidado == inputEmail.value && userValidado.senhaUsuarioValidado == inputSenha.value) {
    //     console.log("USUARIO VALIDADO!");

    // } else{
    //     console.log("SENHA OU NOME DE USUÁRIO INCORRETO")
    // }

});