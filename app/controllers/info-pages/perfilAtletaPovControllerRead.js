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
        input_values: {
          idade: usuario.idade,
          cidade: usuario.cidade,
          estado: usuario.estado,
          descricao: usuario.descricao,
          chave_pix: usuario.chave_pix
        }
      },
    });
  }
}

const perfilAtletaController = new PerfilAtletaPovControllerRead();

module.exports = perfilAtletaController;