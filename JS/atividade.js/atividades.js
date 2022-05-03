let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado')

logado.innerHTML = `${userLogado.user} <br> Olá ${userLogado.nome}`

if(localStorage.getItem('token') == null){

    alert('Você precisar estar logado pra acessar essa pagina')

    window.location.href = 'http://127.0.0.1:5500/index.html#';
    
}

function sair(){

    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = 'http://127.0.0.1:5500/index.html#';

}

