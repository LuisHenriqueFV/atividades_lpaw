// Animação com AnimeJS para o título e botão
anime({
    targets: '.game-title',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutBounce'
});

anime({
    targets: '.start-button',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1000,
    delay: 500,
    easing: 'easeOutElastic(1, .8)'
});

// Evento de clique para iniciar o jogo
document.getElementById('start-btn').addEventListener('click', function() {
    // Oculta o botão e a descrição, mostra o canvas
    document.querySelector('.game-description').style.display = 'none';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'block';

    // Animação de fade in no canvas
    anime({
        targets: '#gameCanvas',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad'
    });

    // Chama a função para inicializar o jogo no canvas
    initGame();
});

// Função de inicialização do jogo no Canvas
function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Ajusta o tamanho do canvas para ocupar toda a área disponível
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100; // Ajuste conforme necessário para o layout

  

}
