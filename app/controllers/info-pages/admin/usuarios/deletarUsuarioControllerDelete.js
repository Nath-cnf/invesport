const usuarioModel = require("../../../../models/Usuario");

class DeletarUsuarioAdminController {
    async deleteUsuario(req, res) {
        const usuarioId = req.params.usuarioId;

        try {
            await usuarioModel.deleteUser(usuarioId);

            return res.redirect("/admin");
        } catch (erro) {
            console.log(erro);

            return res.redirect("/admin");
        }
    }
}

const deletarUsuarioAdminControllerDelete = new DeletarUsuarioAdminController();

module.exports = deletarUsuarioAdminControllerDelete;