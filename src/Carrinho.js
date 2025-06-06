module.exports = class Carrinho {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(nome, preco, quantidade) {
      //TODO: Verificar se o item já existe no carrinho
    }
  
    removerItem(nome) {
      //TODO: Verificar se o item existe no carrinho
    }
  
    listarItens() {
      //TODO: Retornar a lista de itens no carrinho
    }
  
    limparCarrinho() {
      //TODO: Limpar todos os itens do carrinho
    }
  
    atualizarQuantidade(nome, novaQuantidade) {
      //TODO: Atualizar a quantidade de um item no carrinho
    }
  
    calcularTotal() {
      //TODO: Calcular o total do carrinho
    }
  };