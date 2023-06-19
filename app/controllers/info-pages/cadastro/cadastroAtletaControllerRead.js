const prisma = require("../../../../server/database/prismaClient");

class CadastroAtletaControllerRead {
    constructor(){
        this.getPage = this.getPage.bind(this)
    }
    async getPage(req, res) {
        const esportes = await this.getEsportes()
        res.render("pages/cadastro-atleta.ejs", {
          data: {
            esportes
          }
        })
    }
    async getEsportes(){
      const esportes = await prisma.esporte.findMany()
      return esportes
    }
}

const CadastroAtletaController = new CadastroAtletaControllerRead();

module.exports = CadastroAtletaController;