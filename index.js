const axios = require('axios');

async function obterDadosDaAPI() {
  try {
    const resposta = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(resposta.data);
  } catch (erro) {
    console.error('Erro ao obter dados da API:', erro);
  }
}

obterDadosDaAPI();
