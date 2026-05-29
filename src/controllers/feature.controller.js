class FeatureController {
    static servicesPage(request, response) {
        const serviceModel = require('../models/service.model');
        const services = serviceModel.getServices();
        console.log(services);
        const model = {title: 'Szolgáltatásaink', services: services};
        response.render('pages/services', model);
    }
    static articlesPage(request, response) {
        const model = {title: 'Friss hírek'};
        response.render('pages/articles', model);
    }
}

module.exports = FeatureController;