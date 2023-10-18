const usuarioModel = require("../../../models/Usuario");

class ImagemPerfilAtletaController {
	async getImage(req, res) {
		const { userId } = req.params;

		const image = await usuarioModel.getUserImage(userId);
		res.setHeader("Content-Type", `image/${image.imagem_perfil_type}`);

		return res.send(image.imagem_perfil);
	}
}

const imagemPerfilUsuarioAtletaControllerRead = new ImagemPerfilAtletaController();

module.exports = imagemPerfilUsuarioAtletaControllerRead;
