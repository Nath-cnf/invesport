const usuarioModel = require("../../../models/Usuario");
const jwt = require("jsonwebtoken");

class feedControllerRead {
    async getPage(req, res) {
        const token = req.session.token;
        let tokenInfo = "";
        let userId = "";
        let usuario_logado = false;

        if (token) {
            usuario_logado = true;
            tokenInfo = jwt.decode(token, process.env.SECRET);
            userId = tokenInfo.userId;
        }

        const usuarios = await usuarioModel.findAllUsers(userId);

        res.render("pages/feed.ejs", {
            data: {
                page_name: "Invesport",
                usuarios,
                usuario_logado
            }
        })
    }
}

const feedController = new feedControllerRead();

module.exports = feedController;