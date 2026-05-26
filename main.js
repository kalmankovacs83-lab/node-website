const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public') );

app.get('/', (request, response) => {
    const model = {title: 'Üdvözlünk!'};
    response.render('pages/home', model);
});
app.get('/szolgaltatasok', (request, response) => {
    const model = {title: 'Szolgáltatásaink'};
    response.render('pages/services', model);
});
app.get('/cikkek', (request, response) => {
    const model = {title: 'Friss hírek'};
    response.render('pages/articles', model);
});
app.get('/kapcsolat', (request, response) => {
    const model = {title: 'Elérhetőségeink'};
    response.render('pages/home', model);
});

app.listen(8888);