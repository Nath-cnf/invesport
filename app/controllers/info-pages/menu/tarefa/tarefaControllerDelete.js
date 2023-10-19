const tarefaAtletaModel = require("../../../../models/TarefaAtleta");
const jwt = require("jsonwebtoken")

class tarefaController {
    async deletarTarefa(req, res) {
        const token = req.session.token;
        const { userId, userType } = jwt.decode(token, process.env.SECRET);
        const tagId = req.params.tagId;

        if (userType === "atleta") {
            const tarefa = await tarefaAtletaModel.findTarefaById(tagId);

            if (tarefa) {
                await tarefaAtletaModel.deleteTarefa(tagId);
            }
        }

        return res.redirect("/tarefas")
    }
}

const tarefaControllerDelete = new tarefaController();

module.exports = tarefaControllerDelete;