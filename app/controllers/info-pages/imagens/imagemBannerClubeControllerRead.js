const clubeModel = require("../../../models/Clube");

class BannerClubeController {
	async getImage(req, res) {
		const { userId } = req.params;

		const image = await clubeModel.getUserBanner(userId);
		res.setHeader("Content-Type", `image/${image.banner_image_type}`);

		return res.send(image.banner_perfil);
	}
}

const bannerClubeControllerRead = new BannerClubeController();

module.exports = bannerClubeControllerRead;
