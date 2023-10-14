class perfilClubeControllerRead {
    getPage(req, res) {
        res.render("pages/perfil-clube.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const perfilClubeController = new perfilClubeControllerRead();

module.exports = perfilClubeController;