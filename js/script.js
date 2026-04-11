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

// Promo aleatória
const imagens = [
  "img/promo1.jpg",
  "img/promo2.jpg",
  "img/promo3.jpg"
];

document.getElementById("promo-img").src =
  imagens[Math.floor(Math.random() * imagens.length)];


// Popup fake
function popup(tipo) {
  alert(tipo + " (texto fictício)");
}