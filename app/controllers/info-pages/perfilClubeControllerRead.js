class perfilClubeControllerRead {
    getPage(req, res) {
        res.render("pages/perfil-clube-pov.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const perfilClubeController = new perfilClubeControllerRead();

module.exports = perfilClubeController;