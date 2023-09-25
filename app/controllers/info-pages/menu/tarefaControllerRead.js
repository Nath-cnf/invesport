class tarefaControllerRead {
    getPage(req, res) {
        res.render("pages/tarefas.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const tarefaController = new tarefaControllerRead();

module.exports = tarefaController;