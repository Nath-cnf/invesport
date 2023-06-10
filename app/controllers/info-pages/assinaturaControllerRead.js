class assinaturaControllerRead {
    getPage(req, res) {
        res.render("pages/assinatura.ejs")
    }
}

const assinaturaController = new assinaturaControllerRead();

module.exports = assinaturaController;