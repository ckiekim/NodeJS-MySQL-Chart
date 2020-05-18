const express = require('express');
const bodyParser = require('body-parser');
const form = require('./41_form.js');
const dm = require('./41_mysql.js');
const chart = require('./41_chart.js');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')); // redirect jQuery
app.use('/chartjs', express.static(__dirname + '/node_modules/chart.js/dist')); // redirect chart.js

app.get('/', function(req, res) {
    let html = form.dataset();
    res.send(html);
});
app.post('/chart', function(req, res) {
    let dataset = parseInt(req.body.dataset);
    //console.log(dataset);
    dm.getDataset(dataset, function(results) {
        //console.log(results);
        let html = chart.anscombe(results);
        res.send(html);
    })
});

app.get('*', function(req, res) {
    res.status(404).send('File not found');
});
app.listen(3000);