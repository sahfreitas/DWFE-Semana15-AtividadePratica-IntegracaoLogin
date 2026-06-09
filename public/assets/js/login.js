export const usuarios = [
    { id: "u1", username: "admin", senha: "123" },
    { id: "u2", username: "user", senha: "123" }
];

function verificarCredenciais() {
    const usernameInformado = document.getElementById("username").value.trim();
    const senhaInformada = document.getElementById("senha").value;

    const usuario = usuarios.find((item) => item.username === usernameInformado);

    if (!usuario) {
        alert("Username informado incorretamente!");
        return;
    }

    if (senhaInformada === usuario.senha) {
        sessionStorage.setItem("usuarioLogado", JSON.stringify({ id: usuario.id, username: usuario.username }));
        window.location = "home.html";
    } else {
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