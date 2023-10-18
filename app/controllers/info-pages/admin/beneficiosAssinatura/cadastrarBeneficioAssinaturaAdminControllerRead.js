class cadastrarBeneficiosAssinaturaAdminController {
    getPage(req, res) {
        res.render("pages/admin/cadastrar-beneficio-assinatura.ejs", {
            data: {
                page_name: "Invesport",
            }
        })
    }
}

const cadastrarBeneficiosAssinaturaAdminControllerRead = new cadastrarBeneficiosAssinaturaAdminController();

module.exports = cadastrarBeneficiosAssinaturaAdminControllerRead;