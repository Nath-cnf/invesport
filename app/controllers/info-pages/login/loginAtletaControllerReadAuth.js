const bcrypt = require('bcrypt');
const usuarioModel = require("../../../models/Usuario");
const jwt = require("jsonwebtoken");

class LoginAtletaController {
    async authenticateAtleta(req, res){
        const {
            email,
            senha
        } = req.body;

        const user = await usuarioModel.findUserByEmail(email);

        if (!user) {
            return res.render("pages/login-atleta.ejs", {
                data: {
                    page_name: "Invesport",
                    input_values: {
                        email,
                        senha
                    },
                    erros: {
                        email_erro: {
                            msg: "Usuário não encontrado!"
                        }
                    }
                }
            })
        }

        bcrypt.compare(senha, user.senha).then((auth) => {
            if (auth) {
                const token = jwt.sign({userId: user.id}, process.env.SECRET)

                req.session.token = token;

                return res.redirect("/perfil-atleta")
            }

            return res.render("pages/login-atleta.ejs", {
                data: {
                    page_name: "Invesport",
                    input_values: {
                        email,
                        senha
                    },
                    erros: {
                        senha_erro: {
                            msg: "Senha incorreta!"
                        }
                    }
                }
            })
        })
    }
}

const AtletaControllerReadAuth = new LoginAtletaController();

module.exports = AtletaControllerReadAuth;