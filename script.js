let itens = 0;
let total = 0;
let listaProdutos = [];

function adicionar(valor, nome) {

    itens++;
    total += valor;

    listaProdutos.push(nome);

    document.getElementById("itens").textContent = itens;
    document.getElementById("total").textContent = total.toFixed(2);

    alert(nome + " adicionado ao carrinho!");
}

function finalizar() {

    if (itens === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let resumo = "🛍️ Pedido TAKAY BRECHÓ 🇯🇵\n\n";

    listaProdutos.forEach(function(produto) {
        resumo += "• " + produto + "\n";
    });

    resumo += "\nItens: " + itens;
    resumo += "\nTotal: R$ " + total.toFixed(2);

    alert(resumo);

    itens = 0;
    total = 0;
    listaProdutos = [];

    document.getElementById("itens").textContent = "0";
    document.getElementById("total").textContent = "0.00";
}