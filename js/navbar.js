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

function trocarTemaMobile() {
  trocarTema();
}

function girarLogo() {
  const logo = document.querySelector(".logo_02");
  if (logo) {
    logo.classList.toggle("girando");
  }
}