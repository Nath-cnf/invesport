class assinaturaControllerRead {
    getPage(req, res) {
        res.render("pages/assinatura.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const assinaturaController = new assinaturaControllerRead();

module.exports = assinaturaController;