const usuarioModel = require("../../../models/Usuario");
const clubeModel = require("../../../models/Clube");
const jwt = require("jsonwebtoken");

class ImagensUsuariosController {
  async getImage(req, res) {
    const token = req.session.token;
    const { userType } = jwt.decode(token, process.env.SECRET);
    const { userId } = req.params;

    if (userType === "atleta") {
        const image = await usuarioModel.getUserImage(userId);
        res.setHeader('Content-Type', `image/${image.imagem_perfil_type}`);

        return res.send(image.imagem_perfil);
    } else if (userType === "clube") {
        const image = await clubeModel.getUserImage(userId);
        res.setHeader('Content-Type', `image/${image.imagem_perfil_type}`);

        return res.send(image.imagem_perfil);
    }
  }
}

const imagensUsuariosControllerRead = new ImagensUsuariosController();

module.exports = imagensUsuariosControllerRead;
