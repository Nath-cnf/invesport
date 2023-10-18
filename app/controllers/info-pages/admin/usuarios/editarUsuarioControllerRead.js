const usuarioModel = require("../../../../models/Usuario");
const clubeModel = require("../../../../models/Clube");
const esporteModel = require("../../../../models/Esporte");

class editarUsuarioAdminController {
	async getPage(req, res) {
		const usuarioId = req.params.usuarioId;

		let user = usuarioModel.findUserById(usuarioId);

		if (user) {
			const user = await usuarioModel.findUserById(usuarioId);
			const esportes = await esporteModel.findAllEsportes();
			let userImagemPerfil = false;
			let userBannerPerfil = false;

			if (user.banner_perfil) {
				userBannerPerfil = true;
			}

			if (user.imagem_perfil) {
				userImagemPerfil = true;
			}

			return res.render("pages/admin/editar-usuario-atleta.ejs", {
				data: {
					page_name: "Invesport",
					usuarioId,
					input_values: {
						nome: user.nome,
						nome_esporte: user.esporte.nome,
                        esporte: user.esporte,
						cnpj_clube: user.cnpj_clube,
						cidade: user.cidade,
						estado: user.estado,
						email: user.email,
						premium: user.premium,
						userBannerPerfil,
						userImagemPerfil,
					},
					esportes,
				},
			});
		}

        user = clubeModel.findUserById(usuarioId);

        if (user) {
            
        }

        return res.redirect("/admin")
	}
}

const editarUsuarioAdminControllerRead = new editarUsuarioAdminController();

module.exports = editarUsuarioAdminControllerRead;
