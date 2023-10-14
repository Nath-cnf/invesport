class comoDoarControllerRead {
    getPage(req, res) {
        const token = req.session.token;
        let usuario_logado = false;

        if (token) {
            usuario_logado = true;
        }

        res.render("pages/como-doar.ejs", {
            data: {
                page_name: "Invesport",
                usuario_logado
            }
        })
    }
}

const comoDoarController = new comoDoarControllerRead();

module.exports = comoDoarController;