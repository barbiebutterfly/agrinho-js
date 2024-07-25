document.addEventListener('DOMContentLoaded', () => {
    const verResultado = document.getElementById('verResultado');
    const textoResultado = document.querySelector('.texto-resultado');

    verResultado.addEventListener('click', () => {
        let resultado = '';
        const perguntas = document.querySelectorAll('table input[type="radio"]:checked');

        if (perguntas.length === 0) {
            textoResultado.textContent = 'Por favor, selecione uma resposta para cada pergunta.';
            return;
        }

        perguntas.forEach((pergunta) => {
            const perguntaId = pergunta.name;
            const resposta = pergunta.value;
            resultado += `Pergunta ${perguntaId.slice(-1)}: ${resposta}\n`;
        });

        textoResultado.textContent = resultado || 'Nenhuma resposta selecionada.';
    });
});
