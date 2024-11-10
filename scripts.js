function searchProducts(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const query = document.getElementById('search-input').value.toLowerCase(); // Obtém o valor da entrada de pesquisa
    const products = document.querySelectorAll('.product'); // Seleciona todos os produtos
    let firstMatch = null; // Variável para armazenar o primeiro produto encontrado

    products.forEach(product => {
        const productName = product.querySelector('p').textContent.toLowerCase(); // Obtém o nome do produto
        if (productName.includes(query)) {
            product.style.display = 'block'; // Exibe o produto se corresponder à pesquisa
            if (!firstMatch) {
                firstMatch = product; // Armazena o primeiro produto encontrado
            }
        } else {
            product.style.display = 'none'; // Oculta o produto se não corresponder à pesquisa
        }
    });

    // Se houver um produto correspondente, rola a página até ele
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: 'smooth' });
    }
}
