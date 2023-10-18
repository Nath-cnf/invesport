const beneficioAssinaturaModel = require("../../../../models/BeneficiosAssinatura");

class editarBeneficiosAssinaturaAdminController {
    async getPage(req, res) {
        const beneficioAssinaturaId = req.params.beneficioAssinaturaId;

        const beneficioAssinatura = await beneficioAssinaturaModel.findBeneficioAssinaturaById(beneficioAssinaturaId)

        return res.render("pages/admin/editar-beneficio-assinatura.ejs", {
            data: {
                page_name: "Invesport",
                beneficioAssinaturaId,
                input_values: {
                    beneficio_assinatura: beneficioAssinatura.beneficios
                }
            }
        })
    }
}

const editarBeneficiosAssinaturaAdminControllerRead = new editarBeneficiosAssinaturaAdminController();

module.exports = editarBeneficiosAssinaturaAdminControllerRead;