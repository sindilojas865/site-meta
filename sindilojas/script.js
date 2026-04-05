document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a, .btn-contact-header');
    const header = document.getElementById('header');

    // Menu Mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
            document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Fechar menu ao clicar num link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Efeito Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Integração do Formulário com o WhatsApp
const formWhatsapp = document.getElementById('form-whatsapp');

if (formWhatsapp) {
    formWhatsapp.addEventListener('submit', function(e) {
        // Impede o recarregamento da página (comportamento padrão do form)
        e.preventDefault();

        // Número do WhatsApp do Sindilojas (Coloque o número real aqui, com código do país e DDD, sem espaços ou traços)
        const numeroWhatsApp = '555530284634'; 

        // Captura os valores dos inputs
        const cnpj = document.getElementById('cnpj').value;
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        // Monta a mensagem que chegará no WhatsApp
        const mensagem = `Olá! Tenho interesse em associar minha empresa ao Sindilojas RS.%0A%0A*Meus Dados:*%0A- *Nome:* ${nome}%0A- *CNPJ:* ${cnpj}%0A- *Contato:* ${telefone}%0A%0AAguardo retorno para prosseguirmos!`;

        // Cria o link da API do WhatsApp
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

        // Redireciona o usuário (abre em uma nova aba)
        window.open(url, '_blank');
    });
}