class PageController {
    static homePage(request, response) {
        const model = {title: 'Üdvözlünk!'};
        response.render('pages/home', model);
    }
    static contactPage(request, response) {
        const model = {title: 'Elérhetőségeink'};
        response.render('pages/home', model);
    }    
}

module.exports = PageController;