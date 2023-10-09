class editarClubeController {
    getPage(req, res) {
        res.render("pages/editar-perfil-clube.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const editarClubeControllerRead = new editarClubeController();

module.exports = editarClubeControllerRead;