// Navegação suave com offset (desktop x mobile)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let target;
        // Se for link de contato, detecta mobile
        if (this.getAttribute('href') === '#contact-section') {
            const isMobile = window.innerWidth <= 768;
            target = document.querySelector(isMobile ? '#contact-form' : '#contact-section');
        } else {
            target = document.querySelector(this.getAttribute('href'));
        }

        if (!target) return;

        const navbarHeight = 80; // ajuste conforme a altura do seu navbar
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Efeito de scroll no navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-item, .contact-method').forEach(el => {
    observer.observe(el);
});

// Função de envio para WhatsApp
function enviarZap() {
    // Pegar os valores dos inputs e com .trim retirar os espaços em branco
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) return;
    if (!email.includes('@')) return;

    // Meu número do Zap
    const myNumber = '5534996848050';

    // Montar o texto que é enviado para meu WhatsApp
    // Adicionado quebras de linha para corrigir os problemas de formatação no WhatsApp
    const textoZap = encodeURIComponent(
        `Olá meu nome é ${name}, gostaria de conversar sobre ${subject},\n${message}\nMeu email é ${email}`
    );

    const linkZap = `https://wa.me/${myNumber}?text=${textoZap}`;

    window.open(linkZap, '_blank');
}
