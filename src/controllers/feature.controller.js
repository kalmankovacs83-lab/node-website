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
    static readingPage(request, response) {
        // console.log(request.params.id);
        const id = request.params.id;
        const articleModel = require('../models/article.model');
        const article = articleModel.getArticleById(id);
        const model = {title: 'Olvass el és ossz meg!', article: article};
        response.status(article ? 200 : 404).render('pages/read', model);
    }    
}

module.exports = FeatureController;