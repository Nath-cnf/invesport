class CadastroAtletaControllerRead {
    getPage(req, res) {
        res.render("pages/cadastro-atleta.ejs")
    }
}

const CadastroAtletaController = new CadastroAtletaControllerRead();

module.exports = CadastroAtletaController;