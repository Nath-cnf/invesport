const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class perfilAtletaControllerRead {
  async getPage(req, res) {
    const token = req.session.token;
    const { userId } = jwt.decode(token, process.env.SECRET);
    const usuario = await usuarioModel.findUserById(userId);

    res.render("pages/perfil-atleta.ejs", {
      data: {
        page_name: "Invesport",
        usuario,
      },
    });
  }
}

const perfilAtletaController = new perfilAtletaControllerRead();

module.exports = perfilAtletaController;
