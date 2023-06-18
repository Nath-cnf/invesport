const prisma = require("../../../../server/database/prismaClient");

class CadastroAtletaControllerRead {
    constructor(){
        this.getPage = this.getPage.bind(this)
    }
    async getPage(req, res) {
        const esportes = await this.getEsportes()
        console.log(esportes)
        res.render("pages/cadastro-atleta.ejs")
    }
    async getEsportes(){
      const esportes = await prisma.esporte.findMany({
        orderBy:{
            id:"asc"
        }
      })
      return esportes
    }
}

const CadastroAtletaController = new CadastroAtletaControllerRead();

module.exports = CadastroAtletaController;