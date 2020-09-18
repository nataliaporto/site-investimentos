
	
function buscaInfo() {
    // essa variavel pega no html o valor que esta dentro do id valorDinheiro e tranfere para dentro da mesma
    var valorEmDinheiro = document.getElementById('valorDinheiro').value;
    // essa variavel pega no html o valor que esta dentro do id moedas e transfere para dentro da mesma
    var moeda = document.getElementById('moedas').value;
    //cont main armazena o valor contido no buscaInformacao
    const main = document.getElementById('buscaInformacao');
    //utiliza as informacoes disponibilizadas pela api para converter o valor e tipo de acordo com as variaveis criadas para criar uma nova variavel
	var url = "https://blockchain.info/tobtc?currency="+moeda+"&value="+valorEmDinheiro;

    var xhttp = new XMLHttpRequest();
    //cria variavel para chamar api
     xhttp.open("GET", url, false);
    //usa a ferramenta criada para abrir uma conexao e pegar informacao da plataforma blockchain
      xhttp.send();
    //envia as informacoes do meu cod para a plataforma blockchain.info
      const externalHTML = `<p><h2>` + xhttp.responseText+" BTC"+`</h2></p>`;
      //criando uma resposta com com o valor q ele obtem da api em html 
      main.innerHTML = externalHTML;
     // injeta na variavel main o conteudo da variavel externalHTML
}

