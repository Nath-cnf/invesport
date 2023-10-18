const beneficiosAssinaturaModel = require("../../../../models/BeneficiosAssinatura");

class beneficiosAssinaturaAdminController {
    async getPage(req, res) {
        const beneficiosAssinatura = await beneficiosAssinaturaModel.findAllBeneficiosAssinatura();

        res.render("pages/admin/assinatura-admin.ejs", {
            data: {
                page_name: "Invesport",
                beneficiosAssinatura,
            }
        })
    }
}

const beneficiosAssinaturaAdminControllerRead = new beneficiosAssinaturaAdminController();

module.exports = beneficiosAssinaturaAdminControllerRead;