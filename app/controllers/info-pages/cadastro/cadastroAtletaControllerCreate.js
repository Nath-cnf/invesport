const esporteModel = require("../../../models/Esporte");
const usuarioModel = require("../../../models/Usuario");

class CadastroAtletaControllerCreate {
  async createAtleta(req, res) {
    const {
      nome,
      esporte,
      cnpj_clube,
      cidade,
      estado,
      email,
      senha,
      confirmacao_senha,
    } = req.body;

    const senhaCriptografada = req.senhaCriptografada;

    try {
      console.log("asdsa");

      await usuarioModel.createUsuario({
        nome,
        id_esporte: esporte,
        cnpj_clube,
        cidade,
        estado,
        email,
        senha: senhaCriptografada,
      })

      console.log("criando no banco");

      res.redirect("/login-atleta");
    } catch (erro) {
      switch (erro.code) {
        case "P2002":
          const esportes = await esporteModel.findAllEsportes();

          return res.render("pages/cadastro-atleta.ejs", {
            data: {
              esportes,
              page_name: "Invesport",
              input_values: {
                nome,
                esporte,
                cnpj_clube,
                cidade,
                estado,
                email,
                senha,
                confirmacao_senha,
              },
              erros: {
                email_erro: {
                  msg: "Esse e-mail já existe",
                },
              },
            },
          });
      }

      return;
    }
  }
}

const CreateAtletaController = new CadastroAtletaControllerCreate();

module.exports = CreateAtletaController;
