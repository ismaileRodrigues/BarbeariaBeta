document.addEventListener('DOMContentLoaded', function() {
    const agendamentoForm = document.getElementById('agendamentoForm');

    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // --- Obter dados do formulário ---
            const barbeiro = document.getElementById('barbeiro').value;
            const dataInput = document.getElementById('data').value; // Formato YYYY-MM-DD
            const hora = document.getElementById('hora').value; // Formato HH:MM
            const nomeCliente = document.getElementById('nomeCliente').value;

            // --- Formatar Data (DD/MM/YYYY) ---
            let dataFormatada = '';
            if (dataInput) {
                const [ano, mes, dia] = dataInput.split('-');
                dataFormatada = `${dia}/${mes}/${ano}`;
            }

            // --- Número de WhatsApp da Barbearia (Substitua pelo número real) ---
            // IMPORTANTE: Inclua o código do país (55 para Brasil) sem o '+' ou zeros à esquerda.
            const numeroWhatsAppBarbearia = '5511999999999'; // Exemplo: 55 DDD NUMERO

            // --- Montar a mensagem ---
            let mensagem = `Olá! Gostaria de agendar um horário na Barbearia Beta:\n\n`;
            mensagem += `*Barbeiro:* ${barbeiro}\n`;
            mensagem += `*Data:* ${dataFormatada}\n`;
            mensagem += `*Horário:* ${hora}\n`;
            mensagem += `*Nome:* ${nomeCliente}\n\n`;
            mensagem += `Aguardo confirmação. Obrigado!`;

            // --- Codificar a mensagem para URL ---
            const mensagemCodificada = encodeURIComponent(mensagem);

            // --- Criar o link do WhatsApp ---
            const linkWhatsApp = `https://wa.me/${numeroWhatsAppBarbearia}?text=${mensagemCodificada}`;

            // --- Redirecionar o usuário para o WhatsApp ---
            window.open(linkWhatsApp, '_blank');

            // Opcional: Limpar o formulário após o envio
            // agendamentoForm.reset(); 
            // ou exibir uma mensagem de sucesso na página
            // alert('Você será redirecionado para o WhatsApp para enviar sua solicitação.');
        });
    }

    // Adiciona classe 'active' ao link de navegação da página atual (opcional, mas bom para UX)
    const currentPage = window.location.pathname.split('/').pop(); // Pega o nome do arquivo (ex: 'sobre.html')
    if (currentPage) {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active'); // Garante que apenas o link atual esteja ativo
            }
        });
        // Caso especial para index.html (se a URL for apenas '/' ou '/index.html')
        if (currentPage === 'index.html' || window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
             const homeLink = document.querySelector('nav ul li a[href="index.html"]');
             if(homeLink) homeLink.classList.add('active');
        }
    }
});

