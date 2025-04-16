const news = [
    {
        title: "Tecnologia: Novo smartphone dobrável é lançado",
        content: "A empresa X lançou hoje seu mais novo modelo de smartphone dobrável, prometendo inovação e desempenho de ponta."
    },
    {
        title: "Esportes: Time Y conquista campeonato",
        content: "Em uma final emocionante, o time Y venceu o campeonato nacional, marcando história no esporte."
    },
    {
        title: "Economia: Inflação apresenta leve queda",
        content: "Segundo o IBGE, a inflação deste mês apresentou uma queda de 0,3%, trazendo otimismo ao mercado."
    }
];

function loadNews() {
    const container = document.getElementById('news-container');
    news.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');

        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
        `;

        container.appendChild(articleDiv);
    });
}

window.onload = loadNews;
