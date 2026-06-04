const data = {
    produtos: [
        {
            id: 1,
            nome: "Gloss Labial Dior Addict Lip Glow Oil",
            preco: 289,
            categoria: "Lábios",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw010bafac/images/Color%20BR/DIOR/2026/oiladdict/001/1.3348901792226.jpg?sw=1200&sh=1200&sm=fit",
            descricao: "Lábios brilhantes, hidratados e belos são os benefícios do Gloss Labial Dior Addict Lip Glow Oil. Sua fórmula é enriquecida com óleo de cereja, ingrediente-chave para envolver a pele em uma película protetora contra desidratação e outras agressões.",
            emEstoque: true
        },
        {
            id: 2,
            nome: "Delineador Lancôme Idôle",
            preco: 269,
            categoria: "Olhos",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw32791de4/images/Color%20BR/lancome/2024/Delineador_Idole/BROWN/Image.png?sw=1200&sh=1200&sm=fit",
            descricao: "O aliado perfeito para finalmente alcançar o delineado ideal. Sua ponta ultrafina proporciona uma linha fina de até 0,1 mm com uma fórmula de tinta sobrecarregada com pigmentos pretos luminosos em fibra de carbono.",
            emEstoque: true
        },
        {
            id: 3,
            nome: "Base Líquida Matte Estée Lauder Longa Duração Double Wear",
            preco: 389,
            categoria: "Rosto",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwb964819d/images/Color%20BR/ESTEELAUDER/2026/BASE/4N1/887167495036_p.jpg?sw=1200&sh=1200&sm=fit",
            descricao: "O novo matte cheio de vida. Esta base de longa duração, respirável e com cobertura personalizável foi criada para ir além. Até 36 horas de cor fiel. Equilibra a pele com controle da oleosidade e hidratação.",
            emEstoque: false
        },
        {
            id: 4,
            nome: "Blush Líquido Rare Beauty Soft Pinch",
            preco: 269,
            categoria: "Rosto",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw78a65605/images/Color%20BR/RARE%20BEAUTY/soft_pinch_blush/BLUSH-RARE%20BEAUTY-SOFT%20PINCH%20-%20MATTE%20LIQUID%20BLUSH%20-%20LOVE840122900075_1500px.jpg?sw=1200&sh=1200&sm=fit",
            descricao: "Descubra a beleza da naturalidade com o Blush Líquido Rare Beauty Soft Pinch. Formulado para proporcionar um toque de cor suave e duradoura, este blush de textura líquida se mistura perfeitamente à pele, oferecendo um acabamento fresco e radiante.",
            emEstoque: true
        },
        {
            id: 5,
            nome: "Hidratante Facial em Gel The Ordinary Natural Moisturizing Factors + Beta Glucan",
            preco: 109,
            categoria: "Skincare",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw9dfe4420/images/hi-res-BR/Merchandising2%20-%20Skin/The%20Ordinary/769915232400/2022-10-28-ORD-Visual-Product-NMF%20BG-100ml-HMH-ARA-Photoroom.png?sw=1200&sh=1200&sm=fit",
            descricao: "O Hidratante Facial em Gel com Beta-Glucana proporciona hidratação ao longo do dia com apenas uma aplicação. Com uma combinação de fatores naturais de hidratação, beta-glucana e ceramidas, também ajuda a fortalecer a barreira natural da pele.",
            emEstoque: false
        },
        {
            id: 6,
            nome: "Tônico Facial Hidratante Laneige Cream Skin",
            preco: 269,
            categoria: "Skincare",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw5ba01312/images/hi-res-BR/Merchandising2%20-%20Skin/Laneige/731540%201.png?sw=1200&sh=1200&sm=fit",
            descricao: "Saída diretamente de nossos laboratórios de alta tecnologia na Coreia, esta inovadora fórmula 2 em 1 combina os benefícios de um creme hidratante com a leveza de um tônico facial líquido para hidratar, nutrir e acalmar a pele.",
            emEstoque: true
        },
        {
            id: 7,
            nome: "Lip Pencil MAC",
            preco: 139,
            categoria: "Lábios",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwcd3b6796/images/Color%20BR/MAC/2024/lip_pencil/chili/773602736003_1.jpg?sw=1200&sh=1200&sm=fit",
            descricao: "Nosso icônico lápis labial faz muito mais do que desenhar os lábios. Elogiado pelos profissionais e amado por você, esse item indispensável em todos os estojos de maquiagem apresenta uma textura suave e cremosa para modelar, preencher e delinear os lábios, sem repuxar ou falhar.",
            emEstoque: true
        },
        {
            id: 8,
            nome: "Máscara De Cílios Rabanne Rockstar Deepest Black",
            preco: 199,
            categoria: "Olhos",
            imagem: "https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw90f126dc/images/Color%20BR/RABANNE_MAKE/2025/mascara_rockstar/8ml/_3349668642243_0065215341_0_1000px.jpg?sw=1200&sh=1200&sm=fit",
            descricao: "Liberte o rockstar que existe em você com a Máscara Rockstar, o novo ícone que revela o olhar mais impactante de todos os tempos. Com 220% mais volume*, sua fórmula ultra-rica é construível, mas permanece leve, oferecendo desempenho e conforto por até 24 horas*.",
            emEstoque: true
        }
    ]
};

function formatPrice(preco) {
    return `R$ ${preco.toFixed(2)}`;
}

const productDetails = document.getElementById("product-details");

if (productDetails && !document.getElementById("product-list")) {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const produto = data.produtos.find(p => p.id === id);

    if (produto) {
        productDetails.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div>
                <span>${produto.categoria}</span>
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p class="details-price">${formatPrice(produto.preco)}</p>
                <p class="details-stock ${produto.emEstoque ? 'em-estoque' : 'indisponivel'}">
                    ${produto.emEstoque ? "Em estoque" : "Indisponível"}
                </p>
            </div>
        `;
    } else {
        productDetails.innerHTML = "<p>Produto não encontrado.</p>";
    }
}

const productList = document.getElementById("product-list");

if (productList) {
    const searchInput = document.querySelector("#search");
    const categorySelect = document.querySelector("#category");
    const btnRender = document.getElementById("btnRender");

    function createProductCard(produto) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", produto.id);

        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.style.margin = "10px";
        card.style.width = "200px";
        card.style.transition = "0.3s";

        const img = document.createElement("img");
        img.setAttribute("src", produto.imagem);
        img.setAttribute("alt", produto.nome);
        img.style.width = "100%";

        const title = document.createElement("h3");
        title.textContent = produto.nome;

        const price = document.createElement("p");
        price.textContent = formatPrice(produto.preco);

        const category = document.createElement("p");
        category.textContent = "Categoria: " + produto.categoria;

        const btnDetails = document.createElement("button");
        btnDetails.textContent = "Ver detalhes";
        btnDetails.addEventListener("click", () => {
            window.location.href = `detalhes.html?id=${produto.id}`;
        });

        const btnHighlight = document.createElement("button");
        btnHighlight.textContent = "Destacar";
        btnHighlight.addEventListener("click", () => {
            card.classList.toggle("destaque");
        });

        card.addEventListener("mouseenter", () => card.style.transform = "scale(1.03)");
        card.addEventListener("mouseleave", () => card.style.transform = "scale(1)");

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(category);
        card.appendChild(btnDetails);
        card.appendChild(btnHighlight);

        return card;
    }

    function renderProducts(produtos) {
        productList.innerHTML = "";
        produtos.forEach(produto => {
            productList.appendChild(createProductCard(produto));
        });
    }

    function renderCategories() {
        const categorias = ["Todas"];
        data.produtos.forEach(p => {
            if (!categorias.includes(p.categoria)) categorias.push(p.categoria);
        });
        categorySelect.innerHTML = "";
        categorias.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            option.textContent = cat;
            categorySelect.appendChild(option);
        });
    }

    function filterProducts() {
        const texto = searchInput.value.toLowerCase();
        const categoria = categorySelect.value;
        return data.produtos.filter(produto => {
            const matchNome = produto.nome.toLowerCase().includes(texto);
            const matchCategoria = categoria === "Todas" || produto.categoria === categoria;
            return matchNome && matchCategoria;
        });
    }

    searchInput.addEventListener("input", () => renderProducts(filterProducts()));
    categorySelect.addEventListener("change", () => renderProducts(filterProducts()));
    btnRender.addEventListener("click", () => renderProducts(filterProducts()));

    renderCategories();
    renderProducts(data.produtos);
}