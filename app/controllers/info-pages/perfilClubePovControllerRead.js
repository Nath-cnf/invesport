class perfilClubePovControllerRead {
   async getPage(req, res) {
        const userId = req.params.idClube
        res.render("pages/perfil-clube-pov.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const perfilClubePovController = new perfilClubePovControllerRead();

module.exports = perfilClubePovController;