// ================= LISTA DE JOGOS =================

const jogos = [
  {
    nome: "PEAK",
    preco: "R$ 29,90",
    img: "img/jogos/PEAK.png",
    promocao: false
  },
  {
    nome: "Gran Turismo 4",
    preco: "R$ 39,90",
    precoOriginal: "R$ 79,90",
    desconto: "-50%",
    img: "img/jogos/GranTurismo4.png",
    promocao: true
  },
  {
    nome: "Need For Speed Pro-Street",
    preco: "R$ 49,90",
    img: "img/jogos/needforspeedprostreet.png",
    promocao: false
  },
  {
    nome: "Need For Speed Underground 2",
    preco: "R$ 49,90",
    precoOriginal: "R$ 99,90",
    desconto: "-50%",
    img: "img/jogos/needforspeedunderground2.png",
    promocao: true
  },
  {
    nome: "BULLY: Scholarship Edition",
    preco: "R$ 69,90",
    img: "img/jogos/bully.png",
    promocao: false
  },
  {
    nome: "Destiny",
    preco: "R$ 79,90",
    precoOriginal: "R$ 119,90",
    desconto: "-33%",
    img: "img/jogos/destiny.png",
    promocao: true
  },
 
  {
    nome: "Overwatch",
    preco: "R$ 89,90",
    img: "img/jogos/Overwatch.png",
    promocao: false
  },
  {
    nome: "Dragon Ball Z Budokai Tenkaichi 3",
    preco: "R$ 39,90",
    img: "img/jogos/dragonballbudokaitenkaichi3.png",
    promocao: false
  },
  {
    nome: "For Honor",
    preco: "R$ 109,90",
    img: "img/jogos/forhonor.png",
    promocao: false
  },
  {
    nome: "GTA San Andreas",
    preco: "R$ 119,90",
    img: "img/jogos/gtasanandreas.png",
    promocao: false
  },
  {
    nome: "Transformers Fall of Cybertron",
    preco: "R$ 129,90",
    img: "img/jogos/transformersfallofcybertron.png",
    promocao: false
  },
  {
    nome: "South Park: The Fractured Butt Whole",
    preco: "R$ 139,90",
    img: "img/jogos/SouthParkAfendaqueAbundaforca.png",
    promocao: false
  }
];

// ================= RENDERIZAÇÃO =================

function renderJogos() {
  const listaJogos = document.getElementById("lista-jogos");

  //  evita erro se o elemento ainda não existir
  if (!listaJogos) return;

  let html = "";

  jogos.forEach(jogo => {
  html += `
    <div class="jogo-item">
      <div class="card jogo-card h-100">

        <img src="${jogo.img}" class="card-img-top">

        <div class="card-body">
          <h5>${jogo.nome}</h5>

          ${jogo.promocao ? `
            <div class="preco-container">

            
              <div class="precos">
                <p class="preco-final">${jogo.preco}</p>
                <p class="preco-original">${jogo.precoOriginal}</p>
              </div>


              <div class="estrela-desconto">
                ${jogo.desconto} OFF
              </div>

            </div>
          ` : `
            <p class="preco-normal">${jogo.preco}</p>
          `}
        </div>

      </div>
    </div>
  `;
  });

  listaJogos.innerHTML = html;
}

// ================= INICIALIZAÇÃO =================

// funciona em páginas normais
document.addEventListener("DOMContentLoaded", () => {
  renderJogos();
});

// função para usar quando carregar componente manualmente
function initJogos() {
  renderJogos();
}