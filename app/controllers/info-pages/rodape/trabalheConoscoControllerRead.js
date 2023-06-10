class TrabalheConoscoControllerRead {
    getPage(req, res) {
        res.render("pages/trabalhe-conosco.ejs")
    }
}

const TrabalheConoscoController = new TrabalheConoscoControllerRead();

module.exports = TrabalheConoscoController;