let dados = [
  {
    pais: "Chile",
    pontosTuristicos: "Santiago, Atacama, Torres del Paine",
    moeda: "Peso Chileno",
    cotacao: 0.012,
    temperaturaMedia: "Varia entre 5°C e 25°C",
    gastoSemanal: "R$ 3.000 - R$ 5.000",
    curiosidades: "Lar do deserto mais seco do mundo (Atacama) e da Cordilheira dos Andes.",
    tags: "Chile Cordilheiras Andes Santiago Atacama"
  },

  {
    pais: "Argentina",
    pontosTuristicos: "Buenos Aires, Ushuaia, Cataratas do Iguaçu",
    moeda: "Peso Argentino",
    cotacao: 0.025,
    temperaturaMedia: "Varia entre 5°C e 25°C",
    gastoSemanal: "R$ 2.500 - R$ 4.000",
    curiosidades: "Tango, futebol e mate são símbolos da cultura argentina.",
    tags: "Buenos Aires Cataratas Boca Juniors River Plate"
  },

  {
    pais: "China",
    pontosTuristicos: "Grande Muralha, Cidade Proibida, Xangai",
    moeda: "Yuan Chinês",
    cotacao: 0.69,
    temperaturaMedia: "Varia entre -10°C e 35°C",
    gastoSemanal: "R$ 4.000 - R$ 6.000",
    curiosidades: "A China é o país mais populoso do mundo e tem uma história milenar.",
    tags: "China Grande Muralha Cidade Proibida Xangai Beijing"
  },

  {
    pais: "Coreia do Sul",
    pontosTuristicos: "Seul, Jeju Island, Busan",
    moeda: "Won Sul-coreano",
    cotacao: 0.0039,
    temperaturaMedia: "Varia entre -5°C e 30°C",
    gastoSemanal: "R$ 3.500 - R$ 5.500",
    curiosidades: "Conhecida por sua cultura pop (K-pop) e tecnologia avançada.",
    tags: "Coreia do Sul Seul K-pop Tecnologia Jeju Busan"
  },

  {
    pais: "Japão",
    pontosTuristicos: "Tóquio, Kyoto, Monte Fuji",
    moeda: "Iene Japonês",
    cotacao: 0.035,
    temperaturaMedia: "Varia entre -5°C e 30°C",
    gastoSemanal: "R$ 4.500 - R$ 7.000",
    curiosidades: "Mistura única de tradição e modernidade, famoso por sua culinária e cultura samurai.",
    tags: "Japão Tóquio Kyoto Monte Fuji Anime Samurais"
  },

  {
    pais: "Itália",
    pontosTuristicos: "Roma, Veneza, Florença",
    moeda: "Euro",
    cotacao: 5.35,
    temperaturaMedia: "Varia entre 0°C e 30°C",
    gastoSemanal: "R$ 5.000 - R$ 8.000",
    curiosidades: "Berço do Império Romano e do Renascimento, famosa por sua culinária.",
    tags: "Itália Roma Veneza Florença Coliseu Pizza"
  },

  {
    pais: "Espanha",
    pontosTuristicos: "Barcelona, Madri, Sevilha",
    moeda: "Euro",
    cotacao: 5.35,
    temperaturaMedia: "Varia entre 5°C e 35°C",
    gastoSemanal: "R$ 4.500 - R$ 7.500",
    curiosidades: "País com rica história, famoso por sua arquitetura, flamenco e culinária.",
    tags: "Espanha Barcelona Madri Flamenco Gaudí La Sagrada Família"
  },

  {
    pais: "Portugal",
    pontosTuristicos: "Lisboa, Porto, Algarve",
    moeda: "Euro",
    cotacao: 5.35,
    temperaturaMedia: "Varia entre 5°C e 30°C",
    gastoSemanal: "R$ 4.000 - R$ 6.500",
    curiosidades: "Famoso por seus vinhos, Fado e a história dos descobrimentos marítimos.",
    tags: "Portugal Lisboa Porto Algarve Fado Vinhos",
  },

  {
    pais: "Egito",
    pontosTuristicos: "Cairo, Luxor, Aswan",
    moeda: "Libra Egípcia",
    cotacao: 0.16,
    temperaturaMedia: "Varia entre 10°C e 40°C",
    gastoSemanal: "R$ 3.000 - R$ 5.000",
    curiosidades: "Lar das antigas pirâmides e rica herança faraônica.",
    tags: "Egito Pirâmides Cairo Luxor Rio Nilo Faraós"
  },

  {
    pais: "África do Sul",
    pontosTuristicos: "Cidade do Cabo, Kruger National Park, Joanesburgo",
    moeda: "Rand Sul-Africano",
    cotacao: 0.27,
    temperaturaMedia: "Varia entre 10°C e 30°C",
    gastoSemanal: "R$ 3.500 - R$ 6.000",
    curiosidades: "Diversidade cultural e natural, famosa por seus safáris e paisagens.",
    tags: "África do Sul Cidade do Cabo Joanesburgo Safári Kruger"
  },

  {
    pais: "Austrália",
    pontosTuristicos: "Sydney, Grande Barreira de Corais, Melbourne",
    moeda: "Dólar Australiano",
    cotacao: 3.27,
    temperaturaMedia: "Varia entre 10°C e 35°C",
    gastoSemanal: "R$ 6.000 - R$ 9.000",
    curiosidades: "Famosa por suas paisagens naturais e vida selvagem única.",
    tags: "Austrália Sydney Grande Barreira Corais Opera House Canguru"
  },

  {
    pais: "Nova Zelândia",
    pontosTuristicos: "Auckland, Queenstown, Rotorua",
    moeda: "Dólar Neozelandês",
    cotacao: 3.03,
    temperaturaMedia: "Varia entre 5°C e 25°C",
    gastoSemanal: "R$ 5.000 - R$ 8.000",
    curiosidades: "Conhecida por suas paisagens de tirar o fôlego, como os cenários de 'O Senhor dos Anéis'.",
    tags: "Nova Zelândia Auckland Queenstown Rotorua Natureza Hobbit"
  },

  {
    pais: "Estados Unidos",
    pontosTuristicos: "Nova York, Los Angeles, Grand Canyon",
    moeda: "Dólar Americano",
    cotacao: 5.25,
    temperaturaMedia: "Varia entre -10°C e 35°C",
    gastoSemanal: "R$ 7.000 - R$ 12.000",
    curiosidades: "País de grande diversidade cultural e natural, centro econômico global.",
    tags: "Estados Unidos Nova York Los Angeles Grand Canyon Hollywood"
  },

  {
    pais: "México",
    pontosTuristicos: "Cidade do México, Cancún, Chichen Itzá",
    moeda: "Peso Mexicano",
    cotacao: 0.27,
    temperaturaMedia: "Varia entre 10°C e 35°C",
    gastoSemanal: "R$ 3.000 - R$ 5.500",
    curiosidades: "Famoso por sua cultura vibrante, gastronomia e história pré-colombiana.",
    tags: "México Cidade do México Cancún Chichen Itzá Mariachi Tacos"
  }
];