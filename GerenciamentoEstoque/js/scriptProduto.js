const product = {
    name: "nome do produto",
    valor: 50,
    quantidade: 15,
};


const nome_produto = document.createElement("h2"); // <h2>
const valor_produto = document.createElement("h3"); // <h3>
const quantidade_produto = document.createElement("h3"); // <h3>
const listProduct = document.querySelector(".main-item");

nome_produto.textContent = product.name;
nome_produto.classList.add("main-nome");

valor_produto.textContent = "Valor: R$ " + product.valor.toString();
valor_produto.classList.add("main-valor");

quantidade_produto.textContent = "Quantidade: " + product.quantidade.toString();
quantidade_produto.classList.add("main-quantidade");

listProduct.insertAdjacentElement("beforeend",nome_produto);
listProduct.insertAdjacentElement("beforeend",valor_produto);
listProduct.insertAdjacentElement("beforeend",quantidade_produto);





