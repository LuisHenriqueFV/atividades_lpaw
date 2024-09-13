window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Ajusta o tamanho do canvas para ocupar toda a área disponível
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;

    // Exibe a imagem logo.png no canvas ao carregar a página
    const backgroundImage = new Image();
    backgroundImage.src = '../atividade_2/logo.png'

    // Quando a imagem carregar, desenha-a no canvas
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };

    // Evento de clique para o botão "Iniciar Jogo"
    document.getElementById('start-btn').addEventListener('click', function() {
        // Limpa o canvas e substitui o conteúdo
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Exibe o novo conteúdo no canvas (aqui você pode inserir a lógica do jogo)
        initGame(); // Sua lógica de jogo vai aqui
    });
};

function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Desenhe algo novo no canvas quando o jogo começar (substitua isso com sua lógica)
    // ctx.fillStyle = "#ff6b6b";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Outras lógicas do jogo podem ser adicionadas aqui
}
