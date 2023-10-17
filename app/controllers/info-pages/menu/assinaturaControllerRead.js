class assinaturaControllerRead {
    getPage(req, res) {
        const token = req.session.token;
        let usuario_logado = false;

        if (token) {
            usuario_logado = true;
        }

        res.render("pages/assinatura.ejs", {
            data: {
                page_name: "Invesport",
                usuario_logado
            }
        })
    }
}

const assinaturaController = new assinaturaControllerRead();

module.exports = assinaturaController;