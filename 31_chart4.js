module.exports.anscombe = function() {
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Chart.js Example</title>
    <meta charset="utf-8">
    <script src="/chartjs/Chart.min.js"></script>
</head>
<body>
    <h3>Anscombe Dataset IV</h3>
    <hr>
    <div style="width:80%;">
		<canvas id="canvas"></canvas>
	</div>
    <script>
    var ctx = document.getElementById('canvas').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Dataset IV',
                data: [
                    {x: 8.0, y: 6.58}, {x: 8.0, y: 5.76}, {x: 8.0, y: 7.71}, 
                    {x: 8.0, y: 8.84}, {x: 8.0, y: 8.47}, {x: 8.0, y: 7.04},
                    {x: 8.0, y: 5.25}, {x: 19.0, y: 12.5}, {x: 8.0, y: 5.56}, 
                    {x: 8.0, y: 7.91}, {x: 8.0, y: 6.89}
                ],
                pointBorderColor: 'rgba(153, 102, 255, 1)',
                pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 1)',
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