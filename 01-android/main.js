const burguer = document.getElementById("burguer");
burguer.addEventListener("click", cliqueMenu => {
    const menu = document.getElementById("menu");

    if (menu.style.display === "none") {
        menu.style.display = "Block";
    } else {
        menu.style.display = "none";
    };
});

function larguraTela() {
    const menu = document.getElementById("menu")
    if (innerWidth > 768) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"
    }
}