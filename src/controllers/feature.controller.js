class FeatureController {
    static servicesPage(request, response) {
        const serviceModel = require('../models/service.model');
        const services = serviceModel.getServices();
        const model = {title: 'Szolgáltatásaink', services: services};
        response.render('pages/services', model);
    }
    static articlesPage(request, response) {
        const articleModel = require('../models/article.model');
        const articles = articleModel.getArticles();
        const model = {title: 'Friss hírek', articles: articles};
        response.render('pages/articles', model);
    }
}

module.exports = FeatureController;