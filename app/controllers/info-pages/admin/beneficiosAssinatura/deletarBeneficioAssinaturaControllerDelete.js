const beneficioAssinaturaModel = require("../../../../models/BeneficiosAssinatura");

class DeletarBeneficiosAssinaturaAdminController {
    async deleteBeneficioAssinatura(req, res) {
        const beneficioAssinaturaId = req.params.beneficioAssinaturaId;

        try {
            await beneficioAssinaturaModel.deleteBeneficioAssinatura(beneficioAssinaturaId);

            return res.redirect("/beneficios-assinatura");
        } catch (erro) {
            console.log(erro);

            return res.redirect("/beneficios-assinatura");
        }
    }
}

const deletarBeneficiosAssinaturaAdminControllerDelete = new DeletarBeneficiosAssinaturaAdminController();

module.exports = deletarBeneficiosAssinaturaAdminControllerDelete;