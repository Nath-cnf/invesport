const prisma = require("../../../server/database/prismaClient")
const jwt = require("jsonwebtoken")

class perfilAtletaControllerRead {
    async getPage(req, res) {
        const token = req.session.token
        const { userId } = jwt.decode(token, process.env.SECRET)
        const usuario = await prisma.usuario.findUnique({where:{id: userId}})
        res.render("pages/perfil-atleta.ejs", {
            data: {
                page_name: "Invesport",
                usuario
            }
        })
    }
}

const perfilAtletaController = new perfilAtletaControllerRead();

module.exports = perfilAtletaController;