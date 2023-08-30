const prisma = require("../../../../server/database/prismaClient");

class CadastroAtletaControllerCreate {
    async createAtleta(req, res){
        try {
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
        } catch(erro){
            console.log(erro)
            
            res.render
        }

        res.redirect("/login-atleta");
    }
}

const CreateAtletaController = new CadastroAtletaControllerCreate();

module.exports = CreateAtletaController;