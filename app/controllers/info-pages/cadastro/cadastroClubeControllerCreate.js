const esporteModel = require("../../../models/Esporte");
const clubeModel = require("../../../models/Clube");

class CadastroClubeControllerCreate {
  async createClube(req, res) {
    const {
      nome,
      esportes,
      cnpj_clube,
      cidade,
      estado,
      email,
      senha,
      confirmacao_senha,
    } = req.body;

    const senhaCriptografada = req.senhaCriptografada;

    try {
      await clubeModel.createClube({
        nome,
        esportes: {
            connect: esportes.map(esporte => ({id: esporte}))
        },
        cnpj_clube,
        cidade,
        estado,
        email,
        senha: senhaCriptografada
      })

      res.redirect("/login-atleta");
    } catch (erro) {
      switch (erro.code) {
        case "P2002":
          const esportesLista = await esporteModel.findAllEsportes();

          return res.render("pages/cadastro-atleta.ejs", {
            data: {
              esportesLista,
              page_name: "Invesport",
              input_values: {
                nome,
                esportes,
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
    }
  }
}

const CreateClubeController = new CadastroClubeControllerCreate();

module.exports = CreateClubeController;
