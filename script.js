const inputNome = document.querySelector("input");
const botao = document.getElementById("botao");
const elementoAnimacao = document.getElementById("animacao");

botao.addEventListener('click', () => {
    const nomeDigitado = inputNome.value.toLowerCase().trim();

    elementoAnimacao.classList.remove('sabre-jedi', 'sabre-sith');

    document.body.classList.remove('bg-jedi', 'bg-sith');

    if (nomeDigitado === "alexandre") {
        elementoAnimacao.classList.add('sabre-jedi');
        document.body.classList.add('bg-jedi');
        alert("Que a força esteja com você, Jedi!");
    } else if (nomeDigitado === "proa"){
        elementoAnimacao.classList.add('sabre-sith');
        document.body.classList.add('bg-sith');
        alert("Bem-vindo ao Lado Negro da Força, Darth Proa!");
    } else {
        alert("Opa! O C3PO não entendeu o que você disse")
    }
});