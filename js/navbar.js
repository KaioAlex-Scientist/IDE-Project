function trocarTema() {
  document.body.classList.toggle("tema-roxo");
  document.body.classList.toggle("tema-preto");

  const body = document.body;
  const btn = document.getElementById("botao-tema");

  if (btn) {
    if (body.classList.contains("tema-preto")) {
      btn.src = "img/navbar/darkTheme.png";
    } else {
      btn.src = "img/navbar/lightTheme.png";
    }
  }

  const btnMobile = document.getElementById("botao-tema-mobile");

  if (btnMobile) {
    if (body.classList.contains("tema-preto")) {
      btnMobile.src = "img/navbar/darkTheme.png";
    } else {
      btnMobile.src = "img/navbar/lightTheme.png";
    }
  }
}

function girarLogo() {
  const logo = document.querySelector(".logo_02");
  if (logo) {
    logo.classList.toggle("girando");
  }
}

localStorage.setItem("favoritos-count", "0");
function toggleFavorito(btn, nomeJogo) {
    const favoritado = btn.dataset.favoritado === "true";
    btn.dataset.favoritado = !favoritado;
    btn.src = favoritado ? "img/navbar/coracaoVazio.png" : "img/navbar/coracaoCheio.png";
    btn.style.filter = favoritado ? "" : "brightness(0) saturate(50%) invert(18%) sepia(100%) saturate(900%) hue-rotate(330deg) brightness(1.7)";
    btn.style.opacity = !favoritado ? "1" : "";

    let count = parseInt(localStorage.getItem("favoritos-count") || "0");
    count = favoritado ? count - 1 : count + 1;
    localStorage.setItem("favoritos-count", count);

    console.log("Favoritos:", count); // remove depois
}

function toggleBadge(btn) {
    const badge = btn.nextElementSibling;
    const count = localStorage.getItem("favoritos-count") || "0";
    badge.textContent = count === "0" ? "Nenhum Jogo Favoritado" : `${count} Jogos nos Favoritos!`;

    badge.classList.remove("badge-saindo");
    badge.classList.add("badge-visivel");
    void badge.offsetWidth;

    clearTimeout(badge._timeout);
    badge._timeout = setTimeout(() => {
        badge.classList.add("badge-saindo");
        setTimeout(() => {
            badge.classList.remove("badge-visivel", "badge-saindo");
        }, 400);
    }, 3000);
}