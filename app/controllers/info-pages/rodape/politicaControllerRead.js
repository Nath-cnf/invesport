class politicaControllerRead {
    getPage(req, res) {
        res.render("pages/politica-uso.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const politicaController = new politicaControllerRead();

module.exports = politicaController;