class perfilAtletaControllerRead {
    getPage(req, res) {
        res.render("pages/perfil-atleta.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const perfilAtletaController = new perfilAtletaControllerRead();

module.exports = perfilAtletaController;