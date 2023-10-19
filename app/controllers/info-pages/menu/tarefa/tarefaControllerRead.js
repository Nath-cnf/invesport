const tarefaAtletaModel = require("../../../../models/TarefaAtleta");
const jwt = require("jsonwebtoken")

class tarefaControllerRead {
    async getPage(req, res) {
        const token = req.session.token;
        const { userId, userType } = jwt.decode(token, process.env.SECRET);
        let tarefas;

        if (userType === "atleta") {
            tarefas = await tarefaAtletaModel.getAllTarefasFromUser(userId);
        } 

        res.render("pages/tarefas.ejs", {
            data: {
                page_name: "Invesport",
                tarefas
            }
        })
    }
}

const tarefaController = new tarefaControllerRead();

module.exports = tarefaController;