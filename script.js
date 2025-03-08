// Ativar/desativar glitch ao passar o mouse
document.querySelector('.glitch').addEventListener('mouseenter', function() {
    this.style.animation = 'glitch 0.8s infinite';
});

document.querySelector('.glitch').addEventListener('mouseleave', function() {
    this.style.animation = 'glitch 3s infinite';
});
const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let input = [];

window.addEventListener('keyup', (e) => {
    input.push(e.key);
    input.splice(-konamiCode.length - 1, input.length - konamiCode.length);
    
    if (input.join('') === konamiCode.join('')) {
        document.body.classList.add('bat-signal-active');
        setTimeout(() => document.body.classList.remove('bat-signal-active'), 5000);
    }
});

// Exemplo: Morcegos mais rápidos e numerosos
const batConfig = {
    count: 12,
    speed: 3,
    opacity: 0.2,
    color: '#FF4500', // Laranjeira
    size: 32,
    flapSpeed: 300
};
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = 200;
});
