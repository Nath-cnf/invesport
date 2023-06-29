class homeCadastradaControllerRead {
    getPage(req, res) {
        res.render("pages/home-cadastrada.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const homeCadatradaController = new homeCadastradaControllerRead();

module.exports = homeCadatradaController;