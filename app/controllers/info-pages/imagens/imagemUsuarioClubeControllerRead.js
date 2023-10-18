const clubeModel = require("../../../models/Clube");

class ImagemPerfilClubeController {
	async getImage(req, res) {
		const { userId } = req.params;

		const image = await clubeModel.getUserImage(userId);
		res.setHeader("Content-Type", `image/${image.imagem_perfil_type}`);

		return res.send(image.imagem_perfil);
	}
}

const imagemPerfilClubeControllerRead = new ImagemPerfilClubeController();

module.exports = imagemPerfilClubeControllerRead;
