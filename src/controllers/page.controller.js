const pageModel = require('../models/page.model');

class PageController {
    static homePage(request, response) {
        const content = pageModel.getHomeContent();
        const model = {title: 'Üdvözlünk!', content: pageModel.getHomeContent()};
        response.render('pages/page', model);
    }
    static contactPage(request, response) {
        const content = pageModel.getContactContent();
        const model = {title: 'Elérhetőségeink', content: pageModel.getContactContent()};
        response.render('pages/page', model);
    }   
    static notFoundPage(request, response) {
        const model = {title: '404 - Nem található', content: 'A keresett oldal nem található!'};
        response.render('pages/notfound', model);
    }
}    

module.exports = PageController;