// Trocar tema
function trocarTema() {
  document.body.classList.toggle("tema-roxo");
  document.body.classList.toggle("tema-preto");
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

// Fiz essa funçãozinha para carregar/fetch os componentes de uma outra pasta, assim fica 
// mais fácil implementarmos em conjunto, coloquem seus componentes aqui! :P   -Pedro
async function carregarComponentes() {
  document.getElementById("navbar").innerHTML =
    await fetch("components/navbar.html").then(r => r.text());
}
carregarComponentes();