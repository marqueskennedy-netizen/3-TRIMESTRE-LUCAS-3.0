let colecaoMidia = []

async function carregarCatalogo(){
    //Acessa a tag que exibirá os cards
    //Emite mensagem de espera
    const container_card = document.getElementById('catalogo-grid');
    container_card.innerHTML = "<p> Carregando intes, aguarde. aguarde.</p>";
    
    try{
        //método GET. fetch() já posuib get como padrão
        const resposta = await  fetch('dados.json',);
        if(!resposta.ok) throw new Error('Erro ao buscar dados');
        //
    }
}