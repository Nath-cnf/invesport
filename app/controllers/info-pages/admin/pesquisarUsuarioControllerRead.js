const usuarioModel = require("../../../models/Usuario");
const clubeModel = require("../../../models/Clube");

class pesquisaUsuarioController {
    async getPage(req, res) {
        const filtroPesquisa = req.query.pesquisar_usuarios;

        const usuarios = await usuarioModel.findAllUsersPesquisa(filtroPesquisa);
        const clubes = await clubeModel.findAllClubes("");
        const quantidadeUsuariosPremium = await usuarioModel.countUserPremium();

        res.render("pages/admin/home-admin.ejs", {
            data: {
                page_name: "Invesport",
                usuarios,
                clubes,
                quantidadeUsuariosPremium,
                filtroPesquisa
            }
        })
    }
}

const pesquisaUsuarioControllerRead = new pesquisaUsuarioController();

module.exports = pesquisaUsuarioControllerRead;