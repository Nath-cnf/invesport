const clubeModel = require("../../../models/Clube");
const usuarioModel = require("../../../models/Usuario");
const jwt = require("jsonwebtoken");

class feedControllerRead {
    async getPage(req, res) {
        const token = req.session.token;
        let userId = "";

        if (token) {
            userId = jwt.decode(token, process.env.SECRET);
        }

        const clubes = await clubeModel.findAllClubes(userId);
        const usuarios = await usuarioModel.findAllUsers(userId);

        res.render("pages/feed.ejs", {
            data: {
                page_name: "Invesport",
                clubes,
                usuarios
            }
        })
    }
}

const feedController = new feedControllerRead();

module.exports = feedController;