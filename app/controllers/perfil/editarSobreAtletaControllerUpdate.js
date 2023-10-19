const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class EditarSobreAtletaController {
	async editarUser(req, res) {
		const token = req.session.token;
		const { userId } = jwt.decode(token, process.env.SECRET);

		const { idade, estado, cidade, descricao } = req.body;

		try {
			await usuarioModel.updateUserSobre(
				{
                    idade: Number(idade),
					cidade,
					estado,
					descricao,
				},
				userId
			);

			res.redirect("/perfil-atleta");
		} catch (erro) {
			console.log(erro);

            const usuario = await usuarioModel.findUserById(userId);

			return res.render("pages/perfil-atleta-pov.ejs", {
				data: {
					page_name: "Invesport",
                    usuario,
					input_values: {
                        idade,
                        cidade,
                        estado,
                        descricao
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

const editarSobreAtletaControllerUpdate = new EditarSobreAtletaController();

module.exports = editarSobreAtletaControllerUpdate;
