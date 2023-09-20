const prisma = require("../../../../server/database/prismaClient");

class CadastroAtletaControllerCreate {
    async createAtleta(req, res) {
        const {
            nome,
            esporte,
            cnpj_clube,
            cidade,
            estado,
            email,
            senha,
            confirmacao_senha
        } = req.body;

        const senhaCriptografada = req.senhaCriptografada;

        try {
            await prisma.usuario.create({
                data: {
                    nome,
                    id_esporte: esporte,
                    cnpj_clube,
                    cidade,
                    estado,
                    email,
                    senha: senhaCriptografada
                }
            })

            res.redirect("/login-atleta");
        } catch (erro) {
            switch (erro.code) {
                case "P2002":
                    const esportes = await prisma.esporte.findMany();

                    return res.render("pages/cadastro-atleta.ejs", {
                        data: {
                            esportes,
                            page_name: "Invesport",
                            input_values: {
                                nome,
                                esporte,
                                cnpj_clube,
                                cidade,
                                estado,
                                email,
                                senha,
                                confirmacao_senha
                            },
                            erros: {
                                email_erro: {
                                    msg: "Esse e-mail já existe"
                                }
                            }
                        }
                    })
            }
        }
    }
}

const CreateAtletaController = new CadastroAtletaControllerCreate();

module.exports = CreateAtletaController;