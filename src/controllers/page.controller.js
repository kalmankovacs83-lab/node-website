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
}

module.exports = PageController;