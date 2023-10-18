const beneficioAssinaturaModel = require("../../../../models/BeneficiosAssinatura");

class EditarBeneficiosAssinaturaAdminController {
    async editarBeneficioAssinatura(req, res) {
        const beneficioAssinaturaId = req.params.beneficioAssinaturaId;
        const {beneficio_assinatura} = req.body;

        try {
            await beneficioAssinaturaModel.updateBeneficioAssinatura({
                beneficios: beneficio_assinatura
            }, beneficioAssinaturaId);

            return res.redirect("/beneficios-assinatura");
        } catch (erro) {
            console.log(erro);

            return res.render("pages/admin/editar-beneficio-assinatura.ejs", {
                data: {
                    page_name: "Invesport",
                    beneficioAssinaturaId,
                    input_values: {
                        beneficio_assinatura
                    },
                    erros: {
                        sistema_erro: {
                            msg: "Erro de sistema tente novamente mais tarde!"
                        }
                    }
                }
            })
        }
    }
}

const editarBeneficiosAssinaturaAdminControllerCreate = new EditarBeneficiosAssinaturaAdminController();

module.exports = editarBeneficiosAssinaturaAdminControllerCreate;