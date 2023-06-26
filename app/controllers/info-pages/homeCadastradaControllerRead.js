class homeCadastradaControllerRead {
    getPage(req, res) {
        res.render("pages/home-cadastrada.ejs")
    }
}

const homeCadatradaController = new homeCadastradaControllerRead();

module.exports = homeCadatradaController;