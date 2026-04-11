// Trocar tema
function trocarTema() {
  document.body.classList.toggle("tema-roxo");
  document.body.classList.toggle("tema-preto");

  const body = document.body;
  const btn = document.getElementById("botao-tema");
  if (body.classList.contains("tema-preto")) {
    btn.src = "img/navbar/darkTheme.png";
  } else {
    btn.src = "img/navbar/lightTheme.png";
  }
}

function girarLogo() {
  const logo = document.querySelector('.logo_02');
  logo.classList.toggle('girando');
}