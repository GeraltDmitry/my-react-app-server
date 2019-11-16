const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(cors());

let table = [];

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

app.post('/add-person', function (req, res) {
    table = table.concat(req.body);

    res.send(table);
})

app.post('/delete-person', function (req, res) {
    console.log('req.body.index: ', req.body.index);
    table = table.slice(0, req.body.index).concat(table.slice(req.body.index + 1));

    res.send(table);
})

app.get('/get-table', function (req, res) {
    res.send(table);
})

app.listen(4000);

