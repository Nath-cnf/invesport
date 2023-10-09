const usuarioModel = require("../../models/Usuario");
const esporteModel = require("../../models/Esporte");
const jwt = require("jsonwebtoken");

class editarAtletaController {
  async getPage(req, res) {
    const esportes  = await esporteModel.findAllEsportes();
    const token = req.session.token;
    const { userId } = jwt.decode(token, process.env.SECRET);
    const user = await usuarioModel.findUserById(userId);

    const nome_esporte = await esporteModel.getEsporteNome(user.esporte);
    console.log(esportes);
    return res.render("pages/editar-perfil-atleta.ejs", {
      data: {
        page_name: "Invesport",
        esportes,
        input_values: {
          nome: user.nome,
          esporte: user.esporte,
          nome_esporte: nome_esporte,
          cnpj_clube: user.cnpj_clube,
          cidade: user.cidade,
          estado: user.estado,
          email: user.email,
          senha: user.senha,
          confirmacao_senha: user.senha,
        },
      },
    });
  }
}

const editarAtletaControllerRead = new editarAtletaController();

module.exports = editarAtletaControllerRead;
