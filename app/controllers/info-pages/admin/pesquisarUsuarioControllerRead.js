const usuarioModel = require("../../../models/Usuario");

class pesquisaUsuarioController {
    async getPage(req, res) {
        const filtroPesquisa = req.query.pesquisar_usuarios;

        const usuarios = await usuarioModel.findAllUsersPesquisa(filtroPesquisa);
        const quantidadeUsuariosPremium = await usuarioModel.countUserPremium();

        res.render("pages/admin/home-admin.ejs", {
            data: {
                page_name: "Invesport",
                usuarios,
                quantidadeUsuariosPremium,
                filtroPesquisa
            }
        })
    }
}

const pesquisaUsuarioControllerRead = new pesquisaUsuarioController();

module.exports = pesquisaUsuarioControllerRead;