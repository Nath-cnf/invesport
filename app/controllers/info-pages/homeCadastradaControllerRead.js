class HomeCadastradaControllerRead {
    getPage(req, res) {
        res.render("pages/home-cadastrada.ejs")
    }
}

const HomeCadatradaController = new HomeCadastradaControllerRead();

module.exports = HomeCadastradaController;