const usuarioModel = require("../../../models/Usuario");

class homeAdminControllerRead {
    async getPage(req, res) {
        const usuarios = await usuarioModel.findAllUsers("");
        const quantidadeUsuariosPremium = await usuarioModel.countUserPremium();

        res.render("pages/admin/home-admin.ejs", {
            data: {
                page_name: "Invesport",
                usuarios,
                quantidadeUsuariosPremium
            }
        })
    }
}

const homeAdminController = new homeAdminControllerRead();

module.exports = homeAdminController;