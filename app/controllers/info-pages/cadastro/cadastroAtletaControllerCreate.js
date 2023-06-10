const prisma = require("../../../../server/database/prismaClient");

class CadastroAtletaControllerCreate {
    async createAtleta(req, res){
        const {
            nome,
            esporte,
            categoria,
            cnpj_clube,
            cidade,
            estado,
            email,
            celular,
            senha
        } = req.body;

        await prisma.user.create({
            data: {
                nome,
                esporte,
                categoria,
                cnpj_clube,
                cidade,
                estado,
                email,
                celular,
                senha
            }
        })

        res.redirect("/login-atleta");
    }
}

const CreateAtletaController = new CadastroAtletaControllerCreate();

module.exports = CreateAtletaController;