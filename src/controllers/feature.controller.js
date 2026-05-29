class FeatureController {
    static servicesPage(request, response) {
        const model = {title: 'Szolgáltatásaink'};
        response.render('pages/services', model);
    }
    static articlesPage(request, response) {
        const model = {title: 'Friss hírek'};
        response.render('pages/articles', model);
    }
}

module.exports = FeatureController;