const beneficioAssinaturaModel = require("../../../models/BeneficiosAssinatura");

class assinaturaControllerRead {
    async getPage(req, res) {
        const token = req.session.token;
        let usuario_logado = false;

        if (token) {
            usuario_logado = true;
        }

        const beneficiosAssinatura = await beneficioAssinaturaModel.findAllBeneficiosAssinatura();

        res.render("pages/assinatura.ejs", {
            data: {
                page_name: "Invesport",
                usuario_logado,
                beneficiosAssinatura
            }
        })
    }
}

const assinaturaController = new assinaturaControllerRead();

module.exports = assinaturaController;