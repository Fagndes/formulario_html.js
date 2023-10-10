const form = document.getElementById('contatos');
        const nomeCompleto = document.getElementById('nome-completo');
        const telefone = document.getElementById('telefone');
        let linhas = '';
        
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            adicionarLinha();
          
        })

        function adicionarLinha() {
            let linha = '<tr>';
            linha += `<td>${nomeCompleto.value}</td>`;
            linha += `<td>${telefone.value}</td>`;
            linha += `<td id="varificar"><img class="varificar" src="./images/verificar.png" alt="icone varificar"></td>`;
            linha += `</tr>`;
            linhas += linha;

            const corpoLista = document.querySelector('tbody');
            corpoLista.innerHTML = linhas;

            nomeCompleto.value = '';
            telefone.value = '';
        }
