const express = require('express');
const bodyParser = require('body-parser');
const home = require('./31_home.js');
const chart = require('./31_chart.js');
const chart1 = require('./31_chart1.js');
const chart2 = require('./31_chart2.js');
const chart3 = require('./31_chart3.js');
const chart4 = require('./31_chart4.js');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/chartjs', express.static(__dirname + '/node_modules/chart.js/dist')); // redirect chart.js

app.get('/', function(req, res) {
    let html = home.home();
    res.send(html);
});
app.get('/chart/:id', function(req, res) {
    let id = parseInt(req.params.id);
    let html = chart.anscombe(id);
/*     let html = chart1.anscombe();
    switch(id) {
        case 2:
            html = chart2.anscombe();
            break;
        case 3:
            html = chart3.anscombe();
            break;
        case 4:
            html = chart4.anscombe();
            break;
        default:
            html = chart1.anscombe();
    } */
    res.send(html);
});

app.get('*', function(req, res) {
    res.status(404).send('File not found');
});
app.listen(3000);