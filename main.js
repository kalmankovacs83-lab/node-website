const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('<link rel="stylesheet" href="style.css"><h1>Hello!</h1><a href="/valami">Valami</a>');
});
app.get('/valami', (request, response) => {
    response.send('<link rel="stylesheet" href="style.css"><h1>Valami!</h1><a href="/">Kezdőlap</a>');
});

app.listen(8888);