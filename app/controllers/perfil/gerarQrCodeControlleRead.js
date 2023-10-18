const usuarioModel = require("../../models/Usuario");

class GerarQrCodeAtletaController {
    async gerarQrCode(req, res) {
        const userId = req.params.userId;
        const {valor_doado} = req.body;
        console.log(valor_doado);
        const usuario = await usuarioModel.findUserById(userId);

        return res.send({
            chave_pix: usuario.chave_pix,
            nome: usuario.nome,
            cidade: usuario.cidade,
            valor_doado: valor_doado
        })
    }
}

const gerarQrCodeAtletaControllerRead = new GerarQrCodeAtletaController();

module.exports = gerarQrCodeAtletaControllerRead;