const express = require('express')
const app = express()
const port = 3000
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(__dirname + '/../front/dist'));

var wordRouter = require('./wordRouter');

app.use('/word',wordRouter);
app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, '../front/dist', 'index.html'));
})


app.listen(port, () => console.log(`Examon port ${port}!`))
