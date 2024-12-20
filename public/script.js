document.getElementById('prosseguir').addEventListener('click', async function () {
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome && email && senha && idade && sexo && altura && peso) {
        const dados = { idade, sexo, altura, peso, nome, email, senha };

        try {
            const response = await fetch('http://localhost:3000/salvar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            if (response.ok) {
                alert('Dados enviados e salvos com sucesso!');
            } else {
                alert('Erro ao salvar os dados. Tente novamente.');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao conectar com o servidor.');
        }
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
