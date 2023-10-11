const usuarioModel = require("../../models/Usuario");
const esporteModel = require("../../models/Esporte");
const jwt = require("jsonwebtoken");

class editarAtletaController {
  async getPage(req, res) {
    const esportes = await esporteModel.findAllEsportes();
    const token = req.session.token;
    const { userId } = jwt.decode(token, process.env.SECRET);
    const user = await usuarioModel.findUserById(userId);
    let userImagemPerfil = false;
    let userBannerPerfil = false;

    if (user.imagem_perfil) {
      userImagemPerfil = true;
    }

    if (user.banner_perfil) {
      userBannerPerfil = true;
    }

    const nome_esporte = await esporteModel.getEsporteNome(user.esporte.id);

    return res.render("pages/editar-perfil-atleta.ejs", {
      data: {
        page_name: "Invesport",
        esportes,
        input_values: {
          nome: user.nome,
          userImagemPerfil,
          userBannerPerfil,
          esporte: user.esporte,
          nome_esporte: nome_esporte,
          cnpj_clube: user.cnpj_clube,
          cidade: user.cidade,
          estado: user.estado,
          email: user.email,
        },
      },
    });
  }
}

const editarAtletaControllerRead = new editarAtletaController();

module.exports = editarAtletaControllerRead;
