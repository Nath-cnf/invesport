const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class PerfilAtletaControllerRead {
  async getPage(req, res) {
    const userId = req.params.idAtleta;
    const usuario = await usuarioModel.findUserById(userId);
    const token = req.session.token;
    let usuario_logado = false;

    if (token) {
      usuario_logado = true;
    }

    res.render("pages/perfil-atleta.ejs", {
      data: {
        page_name: "Invesport",
        usuario,
        usuario_logado
      },
    });
  }
}

const perfilAtletaPovController = new PerfilAtletaControllerRead();

module.exports = perfilAtletaPovController;
