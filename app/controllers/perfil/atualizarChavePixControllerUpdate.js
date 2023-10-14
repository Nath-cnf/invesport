const jwt = require("jsonwebtoken");
const usuarioModel = require("../../models/Usuario.js");

class AtualizarChavePixController {
    async updateChavePix(req, res) {
        const token = req.session.token;
        const {userId, userType} = jwt.decode(token, process.env.SECRET);
        const {chave_pix} = req.body;
        let usuario;

        if (userType === "atleta") {
            usuario = await usuarioModel.findUserById(userId);
        }

        try {
            if (userType === "atleta") {
                await usuarioModel.addChavePix(chave_pix, userId);

                return res.redirect("/perfil-atleta");
            }

            if (userType === "clube") {

            }
        } catch (erro) {
            console.log(erro);

            return res.render("pages/perfil-atleta-pov.ejs", {
                data: {
                    page_name: "Invesport",
                    input_values: {
                        chave_pix
                    },
                    erros: {
                        sistema_erro: {
                            msg: "Erro no sistema, tente novamente mais tarde!"
                        }
                    },
                    usuario
                }
            });
        }
    }
}

const atualizarChavePixControllerRead = new AtualizarChavePixController();

module.exports = atualizarChavePixControllerRead;