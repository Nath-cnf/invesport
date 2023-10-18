const beneficioAssinaturaModel = require("../../../../models/BeneficiosAssinatura");

class CadastrarBeneficiosAssinaturaAdminController {
    async createBeneficioAssinatura(req, res) {
        const {beneficio_assinatura} = req.body;

        try {
            await beneficioAssinaturaModel.createBeneficioAssinatura({
                beneficios: beneficio_assinatura
            });

            return res.redirect("/beneficios-assinatura");
        } catch (erro) {
            console.log(erro);

            return res.render("pages/admin/cadastrar-beneficio-assinatura.ejs", {
                data: {
                    page_name: "Invesport",
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

const cadastrarBeneficiosAssinaturaAdminControllerCreate = new CadastrarBeneficiosAssinaturaAdminController();

module.exports = cadastrarBeneficiosAssinaturaAdminControllerCreate;