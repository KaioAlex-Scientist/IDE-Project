const jogos = [
  {
    nome: "PEAK",
    preco: "R$ 29,90",
    img: "img/jogos/PEAK.png"
  },
  {
    nome: "Gran Turismo 4",
    preco: "R$ 39,90",
    img: "img/jogos/GranTurismo4.png"
  },
  {
    nome: "Need For Speed Pro-Street",
    preco: "R$ 49,90",
    img: "img/jogos/needforspeedprostreet.png"
  },
  {
    nome: "Need For Speed Underground 2",
    preco: "R$ 49,90",
    img: "img/jogos/needforspeedunderground2.png"
  },
  {
    nome: "BULLY: Scholarship Edition",
    preco: "R$ 69,90",
    img: "img/jogos/bully.png"
  },
  {
    nome: "Destiny",
    preco: "R$ 79,90",
    img: "img/jogos/destiny.png"
  },
  {
    nome: "Overwatch",
    preco: "R$ 89,90",
    img: "img/jogos/Overwatch.png"
  },
  {
    nome: "Dragon Ball Z Budokai Tenkaichi 3",
    preco: "R$ 39,90",
    img: "img/jogos/dragonballbudokaitenkaichi3.png"
  }
];

const listaJogos = document.getElementById("lista-jogos");

jogos.forEach(jogo => {
  listaJogos.innerHTML += `
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="card jogo-card h-100">
        <img src="${jogo.img}" class="card-img-top">
        <div class="card-body">
          <h5>${jogo.nome}</h5>
          <p>${jogo.preco}</p>
        </div>
      </div>
    </div>
  `;
});