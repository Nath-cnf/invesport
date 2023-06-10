class perfilClubeControllerRead {
    getPage(req, res) {
        res.render("pages/index.ejs")
    }
}

const HomeController = new HomeControllerRead();

module.exports = HomeController;