const prisma = require("../../../../server/database/prismaClient");

class CadastroAtletaControllerCreate {
    async createAtleta(req, res){
        const {
            nome,
            esporte,
            cnpj_clube,
            cidade,
            estado,
            email
        } = req.body;
        const senha = req.senhaCriptografada;

        await prisma.usuario.create({
            data: {
                nome,
                id_esporte: esporte,
                cnpj_clube,
                cidade,
                estado,
                email,
                senha
            }
        })

        res.redirect("/login-atleta");
    }
}

const CreateAtletaController = new CadastroAtletaControllerCreate();

module.exports = CreateAtletaController;