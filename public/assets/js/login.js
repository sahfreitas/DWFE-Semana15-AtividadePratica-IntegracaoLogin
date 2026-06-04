export const usuarios = [
    { username: "admin", senha: "123" },
    { username: "user", senha: "123" }
];

function verificarCredenciais(){
    const usernameInformado = document.getElementById("username").value.trim();
    const senhaInformada = document.getElementById("senha").value;

    const usuario = usuarios.find((item) => item.username === usernameInformado);

    if(!usuario){
        alert("Username informado incorretamente!");
        return;
    }

    alert("Username informado corretamente!");

    if(senhaInformada === usuario.senha){
        alert("Senha informada corretamente!");
        window.location = "home.html";
    } else{
        alert("Senha informada incorretamente!");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarCredenciais();
    });
});