// Função para remover os acentos da pesquisa, assim podendo encontrar países que contenham acentuação também, exemplo: "Japão"
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p><b>O campo de busca não pode ser vazio ou conter apenas um caractere de espaço.</b></p>";
        return;
    }

    // Normaliza a string de pesquisa
    campoPesquisa = removerAcentos(campoPesquisa.toLowerCase());

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let pais = "";
    let pontosTuristicos = "";
    let curiosidades = "";
    let tags = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        pais = removerAcentos(dado.pais.toLowerCase());
        pontosTuristicos = removerAcentos(dado.pontosTuristicos.toLowerCase());
        curiosidades = removerAcentos(dado.curiosidades.toLowerCase());
        tags = removerAcentos(dado.tags.toLowerCase());

        // se titulo includes campoPesquisa
        if (pais.includes(campoPesquisa) || pontosTuristicos.includes(campoPesquisa) || curiosidades.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
            resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.pais}</a>
            </h2>
            <p class="descricao-meta"><b>Curiosidades: </b>${dado.curiosidades}</p>
            <p class="descricao-meta"><b>Pontos Turísticos: </b>${dado.pontosTuristicos}</p>
            <p class="descricao-meta"><b>Moeda Local: </b>${dado.moeda}</p>
            <p class="descricao-meta"><b>Cotação Atual: </b>${dado.cotacao}</p>
            <p class="descricao-meta"><b>Temperatura Média: </b>${dado.temperaturaMedia}</p>
            <p class="descricao-meta"><b>Gasto Semanal: </b>${dado.gastoSemanal}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p><b>Nenhum país foi encontrado!</b></p>";
    }
    // Atribui o HTML gerado para o conteúdo da seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}

const campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        pesquisar();
    }
});
