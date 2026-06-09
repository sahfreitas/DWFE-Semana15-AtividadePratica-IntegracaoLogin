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

function getUsuarioLogado() {
    const raw = sessionStorage.getItem("usuarioLogado");
    return raw ? JSON.parse(raw) : null;
}

function getFavoritosKey(usuario) {
    return `favoritos_${usuario.id}`;
}

function getFavoritos(usuario) {
    const raw = localStorage.getItem(getFavoritosKey(usuario));
    return raw ? JSON.parse(raw) : [];
}

function salvarFavoritos(usuario, ids) {
    localStorage.setItem(getFavoritosKey(usuario), JSON.stringify(ids));
}

function isFavoritado(usuario, produtoId) {
    return getFavoritos(usuario).includes(produtoId);
}

function toggleFavorito(usuario, produtoId) {
    let favoritos = getFavoritos(usuario);
    if (favoritos.includes(produtoId)) {
        favoritos = favoritos.filter(id => id !== produtoId);
    } else {
        favoritos.push(produtoId);
    }
    salvarFavoritos(usuario, favoritos);
    return favoritos.includes(produtoId);
}


function heartSVG(filled) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
        fill="${filled ? '#1a1a1a' : 'none'}"
        stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>`;
}


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
    const usuario = getUsuarioLogado();
    const searchInput = document.querySelector("#search");
    const categorySelect = document.querySelector("#category");
    const btnRender = document.getElementById("btnRender");

    function createProductCard(produto) {
        const col = document.createElement("div");
        col.classList.add("col-6", "col-sm-4", "col-md-3", "col-xl-2");

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", produto.id);

        const img = document.createElement("img");
        img.setAttribute("src", produto.imagem);
        img.setAttribute("alt", produto.nome);

        const favoritado = usuario ? isFavoritado(usuario, produto.id) : false;
        const btnFav = document.createElement("button");
        btnFav.classList.add("btn-fav");
        btnFav.setAttribute("aria-label", "Favoritar");
        btnFav.innerHTML = heartSVG(favoritado);
        if (favoritado) btnFav.classList.add("favoritado");

        btnFav.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!usuario) {
                alert("Você precisa estar logado para favoritar produtos.");
                window.location.href = "index.html";
                return;
            }
            const agora = toggleFavorito(usuario, produto.id);
            btnFav.innerHTML = heartSVG(agora);
            btnFav.classList.toggle("favoritado", agora);
            card.classList.toggle("card-favoritado", agora);
        });

        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("card-img-wrapper");
        imgWrapper.appendChild(img);
        imgWrapper.appendChild(btnFav);

        const body = document.createElement("div");
        body.classList.add("card-body");

        const title = document.createElement("h3");
        title.textContent = produto.nome;

        const price = document.createElement("p");
        price.classList.add("card-price");
        price.textContent = formatPrice(produto.preco);

        const category = document.createElement("p");
        category.classList.add("card-category");
        category.textContent = produto.categoria;

        const btnDetails = document.createElement("button");
        btnDetails.classList.add("btn-details");
        btnDetails.textContent = "Ver detalhes";
        btnDetails.addEventListener("click", () => {
            window.location.href = `detalhes.html?id=${produto.id}`;
        });

        const btnHighlight = document.createElement("button");
        btnHighlight.classList.add("btn-highlight");
        btnHighlight.textContent = "Destacar";
        btnHighlight.addEventListener("click", () => {
            card.classList.toggle("destaque");
        });

        card.addEventListener("mouseenter", () => card.style.transform = "scale(1.02)");
        card.addEventListener("mouseleave", () => card.style.transform = "scale(1)");

        body.appendChild(title);
        body.appendChild(price);
        body.appendChild(category);
        body.appendChild(btnDetails);
        body.appendChild(btnHighlight);

        card.appendChild(imgWrapper);
        card.appendChild(body);

        if (favoritado) card.classList.add("card-favoritado");

        col.appendChild(card);
        return col;
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

const favoritosList = document.getElementById("favoritos-list");

if (favoritosList) {
    const usuario = getUsuarioLogado();

    if (!usuario) {
        favoritosList.innerHTML = `
            <div class="empty-state">
                <p>Você precisa estar logado para ver seus favoritos.</p>
                <a href="index.html" class="btn-details" style="display:inline-block;text-decoration:none;padding:8px 18px;border-radius:8px;">Fazer login</a>
            </div>`;
    } else {
        const ids = getFavoritos(usuario);
        const produtos = data.produtos.filter(p => ids.includes(p.id));

        if (produtos.length === 0) {
            favoritosList.innerHTML = `<div class="empty-state"><p>Nenhum favorito ainda. <a href="home.html">Voltar ao catálogo</a></p></div>`;
        } else {
            produtos.forEach(produto => {
                const col = document.createElement("div");
                col.classList.add("col-6", "col-sm-4", "col-md-3", "col-xl-2");

                col.innerHTML = `
                    <div class="card card-favoritado" data-id="${produto.id}">
                        <div class="card-img-wrapper">
                            <img src="${produto.imagem}" alt="${produto.nome}">
                            <button class="btn-fav favoritado" aria-label="Remover dos favoritos">
                                ${heartSVG(true)}
                            </button>
                        </div>
                        <div class="card-body">
                            <h3>${produto.nome}</h3>
                            <p class="card-price">${formatPrice(produto.preco)}</p>
                            <p class="card-category">${produto.categoria}</p>
                            <button class="btn-details" onclick="window.location.href='detalhes.html?id=${produto.id}'">Ver detalhes</button>
                            <button class="btn-highlight btn-remover-fav">Remover</button>
                        </div>
                    </div>`;

                const card = col.querySelector(".card");
                const btnFav = col.querySelector(".btn-fav");
                const btnRemover = col.querySelector(".btn-remover-fav");

                function remover() {
                    toggleFavorito(usuario, produto.id);
                    col.remove();
                    if (favoritosList.children.length === 0) {
                        favoritosList.innerHTML = `<div class="empty-state"><p>Nenhum favorito ainda. <a href="home.html">Voltar ao catálogo</a></p></div>`;
                    }
                }

                btnFav.addEventListener("click", remover);
                btnRemover.addEventListener("click", remover);

                favoritosList.appendChild(col);
            });
        }
    }
}