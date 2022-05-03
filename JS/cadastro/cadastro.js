let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let valideNome = false;

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let valideUsuario = false;
let regex_validation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let valideSenha = false;
let regex_validation_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/i;

let confirmSenha = document.querySelector("#confirmSenha")
let labelconfirmSenha = document.querySelector("#labelconfirmSenha")
let valideconfirmSenha = false;

let msgError = document.querySelector("#msgError");

let msgSuccess = document.querySelector("#msgSuccess");

nome.addEventListener('keyup', ()=>{

    if(nome.value.length <= 2){

        labelNome.setAttribute('style', 'color: red');

        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'

        valideNome = false;

    }else{

        labelNome.setAttribute('style', 'color: #00ff88');

        labelNome.innerHTML = 'Nome'

        valideNome = true;

    }

});

usuario.addEventListener('keyup', ()=>{

    if(regex_validation.test(usuario.value) == false){

        labelUsuario.setAttribute('style', 'color: red');

        labelUsuario.innerHTML = 'Usuario *teste@teste.com'

        valideUsuario = false;

    }else{

        labelUsuario.setAttribute('style', 'color: #00ff88');

        labelUsuario.innerHTML = 'Usuário'

        valideUsuario = true;

    }

});

senha.addEventListener('keyup', ()=>{

    if(regex_validation_senha.test(senha.value) == false){

        labelSenha.setAttribute('style', 'color: red');

        labelSenha.innerHTML = '(6 caracteres) 1 maisculo e 1 numero'

        valideSenha = false;

    }else{

        labelSenha.setAttribute('style', 'color: #00ff88');

        labelSenha.innerHTML = 'Senha'

        valideSenha = true;

    }

});

confirmSenha.addEventListener('keyup', ()=>{

    if( confirmSenha.value != senha.value){

        labelconfirmSenha.setAttribute('style', 'color: red');

        labelconfirmSenha.innerHTML = 'As senhas não conferem'

        valideconfirmSenha = false;

    }else{

        labelconfirmSenha.setAttribute('style', 'color: #00ff88');

        labelconfirmSenha.innerHTML = 'Confirmar senha'

        valideconfirmSenha = true;

    }

});


function cadastrar(){

    if(valideNome && valideUsuario && valideSenha && valideconfirmSenha){

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({

            nome: nome.value,
            usuario: usuario.value,
            senha: senha.value

        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')

        msgSuccess.innerHTML = "Cadastrando com sucesso!";

        msgError.setAttribute('style', 'display: none')

        window.location.href = 'http://127.0.0.1:5500/index.html#';

        
    }else{

        msgError.setAttribute('style', 'display: block')

        msgError.innerHTML = "Preencha corretamente";

        msgSuccess.setAttribute('style', 'display: none')
    }

}





