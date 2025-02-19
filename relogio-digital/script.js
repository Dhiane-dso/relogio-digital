//Atualiza o relogio
function atualizarRelogio(){
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    //Adiciona zero à esquerda se for menor que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("clock").textContent = `${horas}:${minutos}:${segundos}`;
}

// Função modo escuro e claro
function alternarModo() {
    const body = document.body;
    body.classList.toggle("light-mode"); // Adiciona ou remove a classe

    // Atualiza o texto do botão
    const botao = document.getElementById("toggle-mode");
    if (body.classList.contains("light-mode")) {
        botao.textContent = "Modo Escuro";
        localStorage.setItem("modo", "claro"); // Salva no armazenamento local
    } else {
        botao.textContent = "Modo Claro";
        localStorage.setItem("modo", "escuro"); // Salva no armazenamento local
    }
}

// Mantém o modo salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("modo") === "claro") {
        document.body.classList.add("light-mode");
        document.getElementById("toggle-mode").textContent = "Modo Escuro";
    }
    atualizarRelogio(); // Chama a função do relógio ao iniciar
    setInterval(atualizarRelogio, 1000); // Atualiza a cada segundo
});

// Adiciona o evento de clique ao botão
document.getElementById("toggle-mode").addEventListener("click", alternarModo);
