class CadastroClubeControllerRead {
    getPage(req, res) {
        res.render("pages/cadastro-clube.ejs")
    }
}

const CadastroClubeController = new CadastroClubeControllerRead();

module.exports = CadastroClubeController;