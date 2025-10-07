
        // Navegação suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
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

        function enviarZap() {
            //Pegar os valores dos inputs e com .trim retirar os espaços em branco
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
               // alert('Por favor, preencha todos os campos.');
                return;
            }

            if (!email.includes('@')) return;

            // Meu número do Zap
            const myNumber = '5534996848050';

            //montar o texto que é enviado para meu whatsapp
            //o %0A foi removido pois o encodeURIComponent codifica os textos antes de colocar na url
            //fpo adicionado quebras de linha para corrigir os problemas de formatação no whatsapp
            const textoZap = encodeURIComponent(`Olá meu nome é ${name}, gostaria de conversar sobre ${subject},\n${message}\nMeu email é ${email}`);

            const linkZap = `https://wa.me/${myNumber}?text=${textoZap}`;

            window.open(linkZap, '_blank');


            //codigo do gpt pra tentar arrumar o erro do site subindo
                        document.querySelectorAll('input, textarea').forEach(el => {
            el.addEventListener('focus', () => {
                setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300); // espera o teclado abrir
            });
            });

        }