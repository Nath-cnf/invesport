const bcrypt = require('bcrypt');
const prisma = require("../../../../server/database/prismaClient");
const jwt = require("jsonwebtoken");

class LoginAtletaController {
    async authenticateAtleta(req, res){
        const {
            email,
            senha
        } = req.body;

        const user = await prisma.usuario.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            console.log("Usuário não está cadastrado!")
            return res.render("pages/login-atleta.ejs")
        }

        bcrypt.compare(senha, user.senha).then((auth) => {
            if (auth) {
                const token = jwt.sign({userId: user.id}, process.env.SECRET)

                req.session.token = token;

                return res.redirect("/perfil-atleta")
            }

            console.log("Senhas não batem")
            return es.redirect("/login-atleta")
        })
    }
}

const AtletaControllerReadAuth = new LoginAtletaController();

module.exports = AtletaControllerReadAuth;