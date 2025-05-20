// Configuração da data inicial
const startDate = new Date('2024-05-25T22:25:00');

// Função para atualizar o contador
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    
    // Cálculo de tempo
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Atualização dos elementos HTML
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Atualização do texto da mensagem
    document.getElementById('days-text').textContent = days;
    document.getElementById('hours-text').textContent = hours;
    document.getElementById('minutes-text').textContent = minutes;
    document.getElementById('seconds-text').textContent = seconds;
}

// Atualizar o contador a cada segundo
setInterval(updateCounter, 1000);
updateCounter(); // Inicializar o contador imediatamente

// Configuração do carrossel
const images = [
    'images/imagem1.jpg',
    'images/imagem2.jpg',
    'images/imagem3.jpg',
    'images/imagem4.jpg',
    'images/imagem5.jpg'
];

let currentImageIndex = 0;
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

// Função para carregar as imagens no carrossel
function loadCarouselImages() {
    carousel.innerHTML = '';
    
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Foto do casal';
        img.loading = 'eager'; // Carregamento prioritário
        carousel.appendChild(img);
    });
    
    updateCarouselPosition();
}

// Função para atualizar a posição do carrossel
function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

// Função para avançar para a próxima imagem com transição suave
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCarouselPosition();
}

// Função para voltar para a imagem anterior com transição suave
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateCarouselPosition();
}

// Adicionar event listeners aos botões
nextButton.addEventListener('click', () => {
    clearInterval(carouselInterval);
    nextImage();
    carouselInterval = setInterval(nextImage, 5000);
});

prevButton.addEventListener('click', () => {
    clearInterval(carouselInterval);
    prevImage();
    carouselInterval = setInterval(nextImage, 5000);
});

// Iniciar o carrossel automático
let carouselInterval = setInterval(nextImage, 5000);

// Pausar o carrossel automático quando o mouse estiver sobre ele
carousel.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

// Retomar o carrossel automático quando o mouse sair
carousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextImage, 5000);
});

// Carregar as imagens quando a página for carregada
window.addEventListener('load', loadCarouselImages);

// Adicionar funcionalidade de swipe para dispositivos móveis
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(carouselInterval); // Pausar durante o toque
});

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    carouselInterval = setInterval(nextImage, 5000); // Retomar após o toque
});

function handleSwipe() {
    const swipeThreshold = 50; // Limiar para considerar como swipe
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe para a esquerda
        nextImage();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe para a direita
        prevImage();
    }
}

// Adicionar efeito de preload para as imagens
function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Precarregar imagens para melhor experiência
preloadImages();
