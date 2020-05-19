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
    <h3>Anscombe Dataset III</h3>
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
                label: 'Dataset III',
                data: [
                    {x: 10.0, y: 7.46}, {x: 8.0, y: 6.77}, {x: 13.0, y: 12.74}, 
                    {x: 9.0, y: 7.11}, {x: 11.0, y: 7.81}, {x: 14.0, y: 8.84},
                    {x: 6.0, y: 6.08}, {x: 4.0, y: 5.39}, {x: 12.0, y: 8.15}, 
                    {x: 7.0, y: 6.42}, {x: 5.0, y: 5.73}
                ],
                pointBorderColor: 'rgba(255, 159, 64, 1)',
                pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 1)',
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