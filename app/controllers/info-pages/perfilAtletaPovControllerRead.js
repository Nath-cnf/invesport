const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class PerfilAtletaPovControllerRead {
  async getPage(req, res) {
    const token = req.session.token;
    const { userId } = jwt.decode(token, process.env.SECRET);
    const usuario = await usuarioModel.findUserById(userId);

    res.render("pages/perfil-atleta-pov.ejs", {
      data: {
        page_name: "Invesport",
        usuario,
      },
    });
  }
}

const perfilAtletaController = new PerfilAtletaPovControllerRead();

module.exports = perfilAtletaController;