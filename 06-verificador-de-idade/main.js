const verificar = document.getElementsByTagName("button")[0];
const divImg = document.getElementById("divImg");
const img = document.createElement("img");
divImg.appendChild(img);


function resultado(mensagem) {
    document.getElementById("res").innerHTML = mensagem;
}


verificar.addEventListener("click", minhaFuncao => {
    const anoAtual = new Date().getFullYear();
    const inputNum = document.getElementById('iano');
    let anoDigitado = Number.parseInt(inputNum.value);
    (anoAtual.l)

   if (inputNum.value == 0 || anoDigitado < 1904 || anoDigitado > anoAtual) {
        alert("[ERRO] Digite um ano válido!");
   } else {
    let idade = anoAtual - anoDigitado;
        let radsex = document.getElementsByName("radsex");
        let sexo;

        if (radsex[0].checked) {
            sexo = "Homem";
            if (idade < 12) {
                img.src="img/menino.jpg";
            } else if (idade <= 21) {
                img.src="img/jovem-home.jpg";
            } else if (idade < 55) {
                img.src="img/homem-adulto.jpg";
            } else {
                img.src="img/homem-idoso.jpg";
            }

        } else {
            sexo = "Mulher";
            if (idade < 12) {
                img.src="img/menina.jpg"
            } else if (idade <= 21) {
                img.src="img/jovem-mulher.jpg";
            } else if (idade < 55) {
                img.src="img/mulher-adulta.jpg";
            } else {
                img.src="img/mulher-idosa.jpg";
            }
        }

        document.getElementById("iano").value= "";
        resultado(`Detectamos ${sexo} com ${idade} anos.`)
   }

   

   
})