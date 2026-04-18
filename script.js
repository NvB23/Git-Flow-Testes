const alerta = document.querySelector("#alerta");
alerta.style.color = 'red';

const botao = document.getElementById("botao");
botao.addEventListener('click', cadastrar);

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;

    let valido = true;
    let mensagemVazio = "Você deixou vazio os campos: ";

    if (nome.trim().length === 0) {
        mensagemVazio += "nome ";
        valido = false;
    }
    if (email.trim().length === 0) {
        mensagemVazio += "email ";
        valido = false;
    }
    if (telefone.trim().length === 0) {
        mensagemVazio += "telefone ";
        valido = false;
    }
    if (senha.trim().length === 0) {
        mensagemVazio += "senha ";
        valido = false;
    }

    if (!valido) {
        alerta.innerText = mensagemVazio;
        alerta.style.color = 'red';
        return;
    }

    if (senha.length < 8) {
        alerta.innerText = "A senha deve ter pelo menos 8 caracteres.";
        alerta.style.color = 'red';
        return;
    }

    alerta.style.color = 'green';
    alerta.innerText = "Informações válidas! Entrando...";
    
    window.location.href = "https://catolicapb.com.br/";
}