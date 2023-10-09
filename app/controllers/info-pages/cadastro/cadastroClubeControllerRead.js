const esporteModel = require("../../../models/Esporte");

class CadastroClubeControllerRead {
    async getPage(req, res) {
        const esportes = await esporteModel.findAllEsportes();

        res.render("pages/cadastro-clube.ejs", {
            data: {
                page_name: "Invesport",
                esportes
            }
        })
    }
}

const CadastroClubeController = new CadastroClubeControllerRead();

module.exports = CadastroClubeController;