// Promo aleatória
const imagens = [
  "img/promo1.jpg",
  "img/promo2.jpg",
  "img/promo3.jpg"
];

document.getElementById("promo-img").src =
  imagens[Math.floor(Math.random() * imagens.length)];


// Fiz essa funçãozinha para carregar/fetch os componentes de uma outra pasta, assim fica 
// mais fácil implementarmos em conjunto, coloquem seus componentes aqui! :P   -Pedro
async function carregarComponente(id, caminho) {
  const el = document.getElementById(id);
  const html = await fetch(caminho).then(r => r.text());
  el.innerHTML = html;
}

async function carregarComponentes() {
  await carregarComponente("carousel-id", "components/carousel.html");
  await carregarComponente("navbar", "components/navbar.html");
  await carregarComponente("form-id", "components/form.html");
  await carregarComponente("footer-id", "components/footer.html");
  await carregarComponente("janelas-id", "components/janelas.html");
  await carregarComponente("grid-id", "components/grid.html");
  
  /* tive que transformar o js do carousel em função pois ele estava iniciando antes do html ser fetch - Perdo */
  iniciarCarousel();
}

carregarComponentes();

