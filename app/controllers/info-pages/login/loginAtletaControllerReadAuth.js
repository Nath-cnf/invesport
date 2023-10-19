const bcrypt = require('bcrypt');
const usuarioModel = require("../../../models/Usuario");
const adminModel = require("../../../models/Admin");
const jwt = require("jsonwebtoken");

class LoginAtletaController {
    async authenticateAtleta(req, res){
        const {
            email,
            senha
        } = req.body;

        let user = await usuarioModel.findUserByEmail(email);
        let userType = "atleta";

        if (!user) {
            user = await adminModel.findUserByEmail(email);
            userType = "admin";
        }

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
                const token = jwt.sign({userId: user.id, userType}, process.env.SECRET)

                req.session.token = token;

                if (userType === "atleta") {
                    return res.redirect("/perfil-atleta");
                } else if (userType === "admin") {
                    return res.redirect("/admin");
                }
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