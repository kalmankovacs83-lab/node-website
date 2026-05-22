const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.send('<link rel="stylesheet" href="style.css"><h1>Hello!</h1>');
});

app.listen(8888);