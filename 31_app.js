const express = require('express');
const bodyParser = require('body-parser');
const chart = require('./31_chart.js');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/chartjs', express.static(__dirname + '/node_modules/chart.js/dist')); // redirect chart.js

app.get('/', function(req, res) {
    let html = chart.anscombe();
    res.send(html);
});

app.get('*', function(req, res) {
    res.status(404).send('File not found');
});
app.listen(3000);