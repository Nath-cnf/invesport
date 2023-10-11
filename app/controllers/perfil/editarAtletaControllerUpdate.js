const esporteModel = require("../../models/Esporte");
const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class EditarAtletaController {
  async editarUser(req, res) {
    const token = req.session.token;
    const esportes = await esporteModel.findAllEsportes();
    const { userId } = jwt.decode(token, process.env.SECRET);

    const { nome, esporte, cnpj_clube, cidade, estado, email } = req.body;
    const user = await usuarioModel.findUserById(userId);
    let userImagemPerfil = false;
    let userBannerPerfil = false;

    if (user.imagem_perfil) {
      userImagemPerfil = true;
    }

    if (user.banner_perfil) {
      userBannerPerfil = true;
    }

    const nome_esporte = await esporteModel.getEsporteNome(esporte);

    try {
      await usuarioModel.updateUser(
        {
          nome,
          esporte: {
            connect: {
              id: esporte
            }
          },
          cnpj_clube,
          cidade,
          estado,
          email,
        },
        userId
      );

      res.redirect("/perfil-atleta");
    } catch (erro) {
      console.log(erro);

      return res.render("pages/editar-perfil-atleta.ejs", {
        data: {
          esportes,
          page_name: "Invesport",
          input_values: {
            nome,
            userImagemPerfil,
            userBannerPerfil,
            esporte: user.esporte,
            nome_esporte: nome_esporte,
            cnpj_clube: cnpj_clube,
            cidade: cidade,
            estado: estado,
            email: email,
          },
          erros: {
            sistema_erro: {
              msg: "Erro de sistema, tente novamente mais tarde!",
            },
          },
        },
      });
    }
  }
}

const editarAtletaControllerUpdate = new EditarAtletaController();

module.exports = editarAtletaControllerUpdate;
