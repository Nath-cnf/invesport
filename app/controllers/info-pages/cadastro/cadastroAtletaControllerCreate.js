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
            email
        } = req.body;
        const senha = req.senhaCriptografada;

        console.log(senha)

        await prisma.usuario.create({
            data: {
                nome,
                esporte,
                categoria,
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