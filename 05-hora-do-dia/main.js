

function resultado(mensagem) {
    document.getElementById("res").innerHTML = mensagem;
};

function atualizarRelogio() {
    const horaAtual = new Date().getHours().toString().padStart(2, '0');
    const minAtual = new Date().getMinutes().toString().padStart(2, '0');
    const segundos = new Date().getSeconds().toString().padStart(2, '0');

    //formata a hora
    const horaFormatada = `${horaAtual}:${minAtual}:${segundos}`;


    resultado(`<h3>Agora são exatamente <strong style="color: red">${horaFormatada}</strong></h3>`);
}

setInterval(atualizarRelogio, 1000);

function AtualizarImagem() {
    const divImg = document.getElementById("img");
    const img = document.createElement("img");
    divImg.appendChild(img);

    const horaAtual = new Date().getHours();

    if (horaAtual > 0 && horaAtual <= 12) {
        img.src = "img/manha.jpg";
        document.body.style.backgroundColor = "#CDD3D2";
        document.getElementById("saudacao").innerHTML = "Bom Dia!";


    } else if (horaAtual <= 18) {
        img.setAttribute("src", "img/tarde.jpg");
        document.body.style.backgroundColor = "#C28741";
        document.getElementById("saudacao").innerHTML = "Boa Tarde!";

    } else {
        img.src = "img/noite.jpg";
        document.body.style.backgroundColor = "#0B4167"
        document.getElementById("saudacao").innerHTML = "Boa Noite!";
    };
}
//chama a função atualiza imagem
AtualizarImagem();








