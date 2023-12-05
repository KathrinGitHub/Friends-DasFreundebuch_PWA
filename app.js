const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('src'));

app.get('/', (req, res) => res.sendFile(__dirname + '/src/index.html'));

app.listen(port, () =>
console.log("running..."));