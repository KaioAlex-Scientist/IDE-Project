// Carousel
function iniciarCarousel() {
const imagensCarousel = [
   {
    src: "img/carousel/jogo1.jpg",
    preco: "R$ 199,90",
    desconto: "-50%",
    precoFinal: "R$ 99,90",
    categorias: ["Anime", "RPG", "Turnos"]
  },
  {
    src: "img/carousel/jogo2.jpg",
    preco: "R$ 149,90",
    desconto: "-30%",
    precoFinal: "R$ 104,90",
    categorias: ["Ação", "Stealth", "Mundo-Aberto"]
  },
  {
    src: "img/carousel/jogo3.jpg",
    preco: "R$ 99,90",
    desconto: "-20%",
    precoFinal: "R$ 79,90",
    categorias: ["RPG", "Escolhas", "Rica-História"]
  },
  {
    src: "img/carousel/jogo4.jpg",
    preco: "R$ 199,90",
    desconto: "-50%",
    precoFinal: "R$ 99,90",
    categorias: ["Ação", "FPS", "Singleplayer"]
  },
  {
    src: "img/carousel/jogo5.jpg",
    preco: "R$ 149,90",
    desconto: "-30%",
    precoFinal: "R$ 104,90",
    categorias: ["Pós-Apocalipse", "Sobrevivência", "Exploração"]
  },
  {
    src: "img/carousel/jogo6.jpg",
    preco: "R$ 99,90",
    desconto: "-20%",
    precoFinal: "R$ 79,90",
    categorias: ["Comédia", "Tiros", "Roleplay"]
  }, 
  {
    src: "img/carousel/jogo7.jpg",
    preco: "R$ 199,90",
    desconto: "-50%",
    precoFinal: "R$ 99,90",
    categorias: ["Terror", "Cartunesco", "Singleplayer"]
  },
  {
    src: "img/carousel/jogo8.jpg",
    preco: "R$ 149,90",
    desconto: "-30%",
    precoFinal: "R$ 104,90",
    categorias: ["Ação", "FPS", "Singleplayer"]
  },
  {
    src: "img/carousel/jogo9.jpg",
    preco: "R$ 99,90",
    desconto: "-20%",
    precoFinal: "R$ 79,90",
    categorias: ["Rica-História", "Hack&Slash", "Mitologia"]
  },
  {
    src: "img/carousel/jogo10.jpg",
    preco: "R$ 99,90",
    desconto: "-20%",
    precoFinal: "R$ 79,90",
    categorias: ["Relacionamentos", "Turnos", "Anime"]
  }
];

const inner = document.getElementById("carousel-inner");
const indicators = document.getElementById("carousel-indicators");

let slidesHTML = "";
let indicatorsHTML = "";

imagensCarousel.forEach((img, index) => {
  slidesHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <img src="${img.src}" class="d-block w-100">
    </div>
  `;

  indicatorsHTML += `
    <button type="button"
      data-bs-target="#carouselExample"
      data-bs-slide-to="${index}"
      class="${index === 0 ? "active" : ""}">
    </button>
  `;
});

inner.innerHTML = slidesHTML;
indicators.innerHTML = indicatorsHTML;



function atualizarCard(index) {
  const jogo = imagensCarousel[index];

  document.getElementById("preco-original").textContent = jogo.preco;
  document.getElementById("desconto").textContent = jogo.desconto;
  document.getElementById("preco-final").textContent = jogo.precoFinal;

  // Categorias
  const categoriasDiv = document.getElementById("categorias");


let categoriasHTML = "";
jogo.categorias.forEach(cat => {
  categoriasHTML += `
    <div class="categoria-item">${cat}</div>
  `;
  });

  categoriasDiv.innerHTML = categoriasHTML;
}


const carousel = document.getElementById("carouselExample");
carousel.addEventListener("slid.bs.carousel", (event) => {
  atualizarCard(event.to);
});

// Inicializa com o primeiro
atualizarCard(0);
}