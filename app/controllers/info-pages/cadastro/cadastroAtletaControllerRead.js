const esporteModel = require("../../../models/Esporte");

class CadastroAtletaControllerRead {
    constructor(){
        this.getPage = this.getPage.bind(this)
    }
    async getPage(req, res) {
        const esportes = await this.getEsportes();

        res.render("pages/cadastro-atleta.ejs", {
          data: {
            page_name: "Invesport",
            esportes
          }
        })
    }
    async getEsportes(){
      const esportes = await esporteModel.findAllEsportes();
      return esportes
    }
}

const CadastroAtletaController = new CadastroAtletaControllerRead();

module.exports = CadastroAtletaController;