const esporteModel = require("../../../../models/Esporte");
const usuarioModel = require("../../../../models/Usuario");

class EditarUsuarioAtletaController {
	async editarUser(req, res) {
		const esportes = await esporteModel.findAllEsportes();
		const usuarioId = req.params.usuarioId;

		const { nome, esporte, cnpj_clube, cidade, estado, email } = req.body;
		const user = await usuarioModel.findUserById(usuarioId);
		const files = req.files;

		let banner_perfil = files.find((file) => file.fieldname === "banner_perfil");
		let imagem_perfil = files.find((file) => file.fieldname === "imagem_perfil");

		const nome_esporte = await esporteModel.getEsporteNome(esporte);

		try {
			await usuarioModel.updateUser(
				{
                    imagem_perfil: imagem_perfil ? imagem_perfil.buffer : user.imagem_perfil,
                    imagem_perfil_type: imagem_perfil ? imagem_perfil.mimetype : user.imagem_perfil_type,
                    banner_perfil: banner_perfil ? banner_perfil.buffer : user.banner_perfil,
                    banner_image_type: banner_perfil ? banner_perfil.mimetype : user.banner_image_type,
					nome,
					esporte: {
						connect: {
							id: esporte,
						},
					},
					cnpj_clube,
					cidade,
					estado,
					email,
				},
				usuarioId
			);

			res.redirect(`/admin#usuario-${usuarioId}`);
		} catch (erro) {
			console.log(erro);

			let userImagemPerfil = false;
			let userBannerPerfil = false;

			if (user.imagem_perfil) {
				userImagemPerfil = true;
			}

			if (user.banner_perfil) {
				userBannerPerfil = true;
			}

			return res.render("pages/admin/editar-usuario-atleta.ejs", {
				data: {
					esportes,
					page_name: "Invesport",
					input_values: {
						nome,
						userImagemPerfil,
						userBannerPerfil,
						esporte: user.esporte,
						nome_esporte: nome_esporte,
						cnpj_clube: cnpj_clube,
						cidade: cidade,
						estado: estado,
						email: email,
					},
					erros: {
						sistema_erro: {
							msg: "Erro de sistema, tente novamente mais tarde!",
						},
					},
				},
			});
		}
	}
}

const editarUsuarioAtletaControllerUpdate = new EditarUsuarioAtletaController();

module.exports = editarUsuarioAtletaControllerUpdate;
