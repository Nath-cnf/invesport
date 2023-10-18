const usuarioModel = require("../../../models/Usuario");

class BannerAtletaController {
	async getImage(req, res) {
		const { userId } = req.params;

		const image = await usuarioModel.getUserBanner(userId);
		res.setHeader("Content-Type", `image/${image.banner_image_type}`);

		return res.send(image.banner_perfil);
	}
}

const bannerAtletaControllerRead = new BannerAtletaController();

module.exports = bannerAtletaControllerRead;
