class CadastroClubeControllerRead {
    getPage(req, res) {
        res.render("pages/cadastro-clube.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const CadastroClubeController = new CadastroClubeControllerRead();

module.exports = CadastroClubeController;