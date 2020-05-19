module.exports.anscombe = function(dsId) {
    let datasets = '';
    switch(dsId) {
    case 1:
        datasets = `
            label: 'Dataset I',
            data: [
                {x: 10.0, y: 8.04}, {x: 8.0, y: 6.95}, {x: 13.0, y: 7.58}, 
                {x: 9.0, y: 8.81}, {x: 11.0, y: 8.33}, {x: 14.0, y: 9.96},
                {x: 6.0, y: 7.24}, {x: 4.0, y: 4.26}, {x: 12.0, y: 10.84}, 
                {x: 7.0, y: 4.82}, {x: 5.0, y: 5.68}
            ],
            pointBorderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5
        `;
        break;
    case 2:
        datasets = `
            label: 'Dataset II',
            data: [
                {x: 10.0, y: 9.14}, {x: 8.0, y: 8.14}, {x: 13.0, y: 8.74}, 
                {x: 9.0, y: 8.77}, {x: 11.0, y: 9.26}, {x: 14.0, y: 8.1},
                {x: 6.0, y: 6.13}, {x: 4.0, y: 3.1}, {x: 12.0, y: 9.13}, 
                {x: 7.0, y: 7.26}, {x: 5.0, y: 4.74}
            ],
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 5
        `;
        break;
    case 3:
        datasets = `
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
        `;
        break;
    case 4:
        datasets = `
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
        `;
        break;
    default:
    }
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>Chart.js Example</title>
    <meta charset="utf-8">
    <script src="/chartjs/Chart.min.js"></script>
</head>
<body>
    <h3>Anscombe Dataset ${dsId}</h3>
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
                ${datasets}
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