module.exports.anscombe = function(dataset) {
    console.log(dataset);
    let ds = dataset[0].dataset;
    let datasets = '';
    for (let item of dataset) {
        datasets += `{x: ${item.xdata}, y: ${item.ydata}}, `
    }
    console.log(datasets);

    let lis = '';
    for (let i=1; i<=4; i++) {
        lis += (ds == i) ? 
            `<li class="page-item active" aria-current="page">
                <span class="page-link">
                ${i}
                <span class="sr-only">(current)</span>
                </span>
            </li>` :
            `<li class="page-item"><a class="page-link" href="/chart/${i}">${i}</a></li>`;
    }
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Chart.js Example</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <script src="/fontawesome/all.min.js"></script>
    <script src="/jquery/jquery.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/chartjs/Chart.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1>Chart.js</h1>
            <p>Simple yet flexible JavaScript charting for designers & developers
            </p>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-6">
                <h2>Anscombe's Dataset ${ds}</h2>
            </div>
            <div class="col-4">
                <nav aria-label="dataset">
                    <ul class="pagination">
                        ${lis}
                    </ul>
                </nav>                
            </div>
            <div class="col-2"></div>
            <div class="col-8">
                <canvas id="canvas"></canvas>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
    <script>
    var ctx = document.getElementById('canvas').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Dataset ${ds}',
                data: [
                    ${datasets}
                ],
                pointBorderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 5
            }, {
                type: 'line',
                label: 'y = 0.5 * x + 3.0',
                fill: false,
                data: [{x:2, y:4}, {x:20, y:13}],
                borderColor: 'rgba(75, 192, 192, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }],
                yAxes: [{
                    ticks: {
                        min: 2
                    }
                }]
            }
        }
    });
    </script>
</body>
</html>
    `;
}