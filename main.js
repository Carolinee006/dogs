
const imagemCachorro = document.getElementById('imagem-cachorro');
        const btnNovoCachorro = document.getElementById('btn-novo-cachorro');

        function obterNovaImagemDeCachorro() {
            const url = 'https://random.dog/woof.json';

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const imageUrl = data.url;
                    imagemCachorro.src = imageUrl;
                })
                .catch(error => {
                    console.error(`Ocorreu um erro: ${error.message}`);
                });
        }

        btnNovoCachorro.addEventListener('click', obterNovaImagemDeCachorro);

        // Carrega uma imagem de cachorro quando a página é carregada
        obterNovaImagemDeCachorro();
        
        



        
