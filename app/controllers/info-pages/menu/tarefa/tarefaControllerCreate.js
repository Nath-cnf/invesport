const tarefaAtletaModel = require("../../../../models/TarefaAtleta");
const jwt = require("jsonwebtoken");

class tarefaControllerRead {
  async createTarefa(req, res) {
    const token = req.session.token;
    const { userId, userType } = jwt.decode(token, process.env.SECRET);

    const { nome_tarefa, conclusao_tarefa } = req.body;

    try {
      if (userType === "atleta") {
        tarefaAtletaModel.createTarefa({
          owner_id: userId,
          nome: nome_tarefa,
          data_conclusao: new Date(conclusao_tarefa),
        });
      }

      return res.redirect("/tarefas");
    } catch (erro) {
      console.log(erro);

      return res.render("pages/tarefas.ejs", {
        data: {
            input_values: {
                nome_tarefa,
                conclusao_tarefa
            },
            erros: {
                sistema_erro: {
                    msg: "Erro de sistema, tente novamente mais tarde!"
                }
            }
        }
      });
    }
  }
}

const tarefaController = new tarefaControllerRead();

module.exports = tarefaController;
