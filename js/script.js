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

function girarLogo() {
  const logo = document.querySelector('.logo_02');
  logo.classList.toggle('girando');
}

// Fiz essa funçãozinha para carregar/fetch os componentes de uma outra pasta, assim fica 
// mais fácil implementarmos em conjunto, coloquem seus componentes aqui! :P   -Pedro
async function carregarComponentes() {
  document.getElementById("navbar").innerHTML =
    await fetch("components/navbar.html").then(r => r.text());
}
carregarComponentes();

