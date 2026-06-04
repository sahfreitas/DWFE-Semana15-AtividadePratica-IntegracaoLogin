const produtos = data.produtos;

const categoriaCount = {};
produtos.forEach(produto => {
    categoriaCount[produto.categoria] = (categoriaCount[produto.categoria] || 0) + 1;
});

const labels = Object.keys(categoriaCount);
const dados = Object.values(categoriaCount);

const cores = [
    'rgb(90, 30, 40)',
    'rgb(199, 199, 199)',
    'rgb(158, 167, 179)',
    'rgb(99, 109, 121)',
];

const ctx = document.getElementById('myChart');

const chartData = {
    labels: labels,
    datasets: [{
        label: 'Produtos por Categoria',
        data: dados,
        backgroundColor: cores.slice(0, labels.length),
        hoverOffset: 4
    }]
};

new Chart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});