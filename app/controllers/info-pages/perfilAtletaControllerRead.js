class perfilAtletaTControllerRead {
    getPage(req, res) {
        res.render("pages/perfil-atleta.ejs")
    }
}

const perfilAtletaController = new perfilAtletaControllerRead();

module.exports = perfilAtletaController;