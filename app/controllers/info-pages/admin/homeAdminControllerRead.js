const usuarioModel = require("../../../models/Usuario");
const clubeModel = require("../../../models/Clube");

class homeAdminControllerRead {
    async getPage(req, res) {
        const usuarios = await usuarioModel.findAllUsers("");
        const clubes = await clubeModel.findAllClubes("");
        const quantidadeUsuariosPremium = await usuarioModel.countUserPremium();

        res.render("pages/admin/home-admin.ejs", {
            data: {
                page_name: "Invesport",
                usuarios,
                clubes,
                quantidadeUsuariosPremium
            }
        })
    }
}

const homeAdminController = new homeAdminControllerRead();

module.exports = homeAdminController;