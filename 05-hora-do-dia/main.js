const horaAtual = new Date().getHours();
const minAtual = new Date().getMinutes();
//let res = document.getElementById("res");

function resultado(mensagem) {
    document.getElementById("res").innerHTML = mensagem;
};

resultado(`Agora são exatamente ${horaAtual} horas e ${minAtual} minutos`);

const divImg = document.getElementById("img");
let img = document.createElement("img");

divImg.appendChild(img);
//img.setAttribute("src", "img/manha.jpg");

if (horaAtual > 0 && horaAtual < 12) {
    img.setAttribute("src", "img/manha.jpg");
    document.body.style.backgroundColor="#BED6E0";
    document.getElementById("saudacao").innerHTML = "Bom Dia!"
   
} else if (horaAtual <= 18) {
    img.setAttribute("src", "img/tarde.jpg");
    document.body.style.backgroundColor="#B18958";
    document.getElementById("saudacao").innerHTML = "Boa Tarde!"
} else {
    img.setAttribute("src", "img/noite.jpg")
    document.body.style.backgroundColor="#3184C1";
    document.getElementById("saudacao").innerHTML = "Bom Noite!";
}





