const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Your first pipeline'));
app.get('/', (req, res) => res.send('Testing you first pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
