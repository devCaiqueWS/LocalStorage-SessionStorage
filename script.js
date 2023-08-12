//lista de usuarios
let listaDados = [];


//criando base (constructor)
function Campos(usuario, email, senha){
    this.usuario = usuario
    this.email = email
    this.senha = senha
}
//disparar botão com DOM
const btnEnviar = document.querySelector('#btnSubmit');



//Evento click
btnEnviar.addEventListener('click', ()=>{
    const inputUser = document.querySelector("#user");
    const inputMail = document.querySelector("#mail");
    const inputSenha = document.querySelector("#senha");

    //instanciando o construtor
    let info = new Campos(inputUser.value, inputMail.value, inputSenha.value);


    //recebendo objeto na lista de usuario
    listaDados.push(info)
    //armazenando lista de usuarios 
    localStorage.setItem('dados', JSON.stringify(listaDados))

    document.getElementById("result").innerHTML = JSON.stringify(listaDados)
})