const assert = require('assert');
const Carrinho = require('../src/Carrinho');

describe('Carrinho de Compras', function() {
  let carrinho;

  beforeEach(function() {
    carrinho = new Carrinho();
  });

  it('deve adicionar item ao carrinho', function() {
    carrinho.adicionarItem('produto1', 10, 2);
    assert.deepStrictEqual(carrinho.listarItens(), [{ nome: 'produto1', preco: 10, quantidade: 2 }]);
  });

  it('deve calcular o total da compra', function() {
    carrinho.adicionarItem('produto1', 10, 2);
    carrinho.adicionarItem('produto2', 20, 1);
    assert.strictEqual(carrinho.calcularTotal(), 40);
  });

  it('deve remover um item do carrinho', function() {
    carrinho.adicionarItem('produto1', 10, 2);
    carrinho.removerItem('produto1');
    assert.deepStrictEqual(carrinho.listarItens(), []);
  });

  it('deve listar os itens do carrinho', function() {
    carrinho.adicionarItem('produto1', 10, 2);
    carrinho.adicionarItem('produto2', 20, 1);
    assert.deepStrictEqual(carrinho.listarItens(), [
      { nome: 'produto1', preco: 10, quantidade: 2 },
      { nome: 'produto2', preco: 20, quantidade: 1 }
    ]);
  });

  it('deve limpar o carrinho', function() {
    carrinho.adicionarItem('produto1', 10, 2);
    carrinho.limparCarrinho();
    assert.deepStrictEqual(carrinho.listarItens(), []);
  });

  it('deve atualizar a quantidade de um item', function() {
    carrinho.adicionarItem('produto1', 10, 2);
    carrinho.atualizarQuantidade('produto1', 5);
    assert.deepStrictEqual(carrinho.listarItens(), [{ nome: 'produto1', preco: 10, quantidade: 5 }]);
  });
});
