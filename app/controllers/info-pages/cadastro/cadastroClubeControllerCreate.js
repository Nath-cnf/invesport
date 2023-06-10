const prisma = require("../../../../server/database/prismaClient");

class CadastroClubeControllerCreate {
    async createClube(req, res){
        const {
            nome_clube,
            cnpj_clube,
            site,
            cidade,
            estado,
            email,
            celular,
            senha
        } = req.body;

        await prisma.user.create({
            data: {
                nome_clube,
                cnpj_clube,
                site,
                cidade,
                estado,
                email,
                celular,
                senha
            }
        })

        res.redirect("/login-clube");
    }
}

const CreateClubeController = new CadastroClubeControllerCreate();

module.exports = CreateClubeController;