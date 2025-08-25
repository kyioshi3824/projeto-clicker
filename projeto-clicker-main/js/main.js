const areajogo = document.querySelector('#arena-jogo');
const pontosDisplay = document.querySelector('#pontos');
const listaHistorico = document.querySelector('#lista-historico');

let pontos = 0;
const emojis = ['😺', '🐶', '🚀', '🍕', '🦁', '🌮'];
const mensagensZoeiras = [
    'mandou ver',
    'olha o click',
    'zoeira nivel maximo',
    'emoji pegpo',
    'clicks campeoes'
    'o brabo',
];
//funcçao para adicionar historico
function adicionarHistorico(texto){
    const li = document.createElement('li');
    const horario = new Date().toLocaleTimeString('pt-BR');
    li.textContent = `${horario} - ${texto}`;
    li.classList.add('zoeiro');
    listaHistorico.appendChild(li);

    if (listaHistorico.children.lenght > 10){
        listaHistorico.removeChild(listaHistorico.firstChild);
    }
}

//funçao para criar o emoji
function criarEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    const indiceAleatorio = Math.floor(Math.random() * emojis.length);
    emoji.textContent = emojis[indiceAleatorio];

    const maxX = areajogo.offsetWidth - 50;
    const maxY = areajogo.offsetWidth - 50;

    emoji.style.left = `${Math.random() * maxX}px`;
    emoji.style.top = `${Math.random() * maxY}px`;

    //clique no emoji


}