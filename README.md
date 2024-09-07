# Mochileiro Digital

## Para Executar Este Projeto:

-  **Acesse:** http://andersonteste.educacao.ws/

Este projeto web, intitulado **Mochileiro Digital**, tem como objetivo auxiliar viajantes na pesquisa de destinos. E foi feito com base no aprendizado durante as aulas do projeto de **Imersão da Alura + Google Gemini**. Ao inserir o nome de um país no campo de busca, o usuário obtém informações detalhadas sobre o local, incluindo:

- **Pontos turísticos**: Uma breve descrição dos principais pontos de interesse.
- **Curiosidades**: Fatos interessantes sobre a cultura e a história do país.
- **Comidas típicas**: Uma lista de pratos tradicionais.
- **Moeda local e cotação**: Informações sobre a moeda e sua conversão para o real.
- **Temperatura média**: Uma estimativa da temperatura média anual.
- **Gasto semanal**: Uma estimativa de gastos semanais para a viagem.
- **Carrossel de imagens**: Uma galeria de fotos para visualizar os destinos.
- **Link para mais informações**: Um link para a página da Wikipédia do país para aprofundar os conhecimentos.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página web.
- **CSS**: Estilização da página, incluindo o carrossel de imagens.
- **JavaScript**: Lógica da aplicação, incluindo a função de pesquisa e a renderização dos resultados.
- **Bootstrap**: Framework CSS para facilitar o desenvolvimento responsivo e a estilização.
- **Font Awesome**: Biblioteca de ícones para as redes sociais.
- **jQuery**: Biblioteca JavaScript para manipulação do DOM.

## Melhorias em Relação ao Código Original

- **Validação de campos**: A função de pesquisa agora verifica se o campo de pesquisa está vazio ou contém apenas espaços em branco, exibindo uma mensagem de erro caso isso ocorra.
- **Tecla Enter**: Foi adicionado um `addEventListener` ao campo de pesquisa para permitir que o usuário inicie a pesquisa pressionando a tecla Enter.
- **Carrossel de imagens**: Implementamos um carrossel de imagens para cada país, permitindo que o usuário visualize diferentes fotos do destino.
- **Estilizações CSS**: Foram feitas melhorias nas estilizações CSS para tornar a interface mais visualmente agradável e intuitiva.

### Explicação das Melhorias

- **`.trim()`**: O método `trim()` remove espaços em branco no início e no final de uma string, garantindo que a pesquisa seja feita apenas com o texto relevante.
- **`addEventListener`**: O evento `keypress` é utilizado para detectar quando a tecla Enter é pressionada no campo de pesquisa.
- **Carrossel**: O Bootstrap oferece componentes prontos para a criação de carrosséis. A lógica JavaScript itera sobre as imagens de cada país e gera o HTML necessário para o carrossel.
- **Estilizações CSS**: As melhorias nas estilizações incluem a definição de cores, fontes, espaçamentos e layout para criar uma interface mais agradável.

## Próximos Passos

- **Funcionalidades adicionais**: Implementar filtros para a pesquisa (por exemplo, por continente, clima ou orçamento).
- **Banco de dados**: Utilizar um banco de dados para armazenar as informações dos países, permitindo uma maior flexibilidade e escalabilidade.
- **API externa**: Integrar com APIs de viagens para obter informações mais atualizadas sobre preços de passagens, hospedagem e atividades.
- **Melhorias na interface**: Criar uma interface mais interativa e responsiva, adaptando-se a diferentes dispositivos.

> **Observação**: Este projeto serve como um ponto de partida para o desenvolvimento de uma aplicação web mais completa para auxiliar viajantes. As melhorias sugeridas podem ser implementadas gradualmente para aprimorar a funcionalidade e a experiência do usuário.

- Fique a vontade para contribuir com o projeto, onde este é um projeto Open-Source e que pode ser dado fork para utilização do código-fonte.

- Meus singelos agradecimentos por todos conhecimentos passados durante a imersão pelos excelentes professores Rafaella Ballerini, Guilherme Lima e Luciano Martins. O curso como um todo foi excelente e bem explicativo, me ajudou muito no aprendizado destas ferramentas de busca, bem como em melhorias em boas práticas de códigos e em desenvolvimento JavaScript e estilizações em CSS. **
