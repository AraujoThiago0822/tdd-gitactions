module.exports = class Carrinho {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(nome, preco, quantidade) {
      this.itens.push({ nome, preco, quantidade });
    }
  
    removerItem(nome) {
      this.itens = this.itens.filter(item => item.nome !== nome);
    }
  
    listarItens() {
      return this.itens;
    }
  
    limparCarrinho() {
      this.itens = [];
    }
  
    atualizarQuantidade(nome, novaQuantidade) {
      const item = this.itens.find(item => item.nome === nome);
      if (item) {
        item.quantidade = novaQuantidade;
      }
    }
  
    calcularTotal() {
      return this.itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    }
  };
  