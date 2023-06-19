const bcrypt = require('bcrypt');
const prisma = require("../../../../server/database/prismaClient");

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
                res.redirect("/perfil-atleta")
            }

            console.log("Senhas não batem")
            res.render("pages/login-atleta.ejs")
        })
    }
}

const AtletaControllerReadAuth = new LoginAtletaController();

module.exports = AtletaControllerReadAuth;