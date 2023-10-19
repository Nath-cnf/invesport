const jwt = require("jsonwebtoken");
const portfolioAtleta = require("../../models/PortfolioAtleta.js");

class AdicionarImagemPortofolioAtletaController {
    async adicionarImagem(req, res) {
        const token = req.session.token;
        const {userId} = jwt.decode(token, process.env.SECRET);

        const file = req.file;

        if (!file) {
            return res.redirect("/perfil-clube");
        }

        try {
            await portfolioAtleta.createToken({
                imagem_portfolio: file.buffer,
                tipo_imagem_portfolio: file.mimetype,
                user_id: userId
            });
        } catch (erro) {
            console.log(erro)
        }

        return res.redirect("/perfil-atleta");
    }
}

const adicionarImagemPortfolioAtletaControllerRead = new AdicionarImagemPortofolioAtletaController();

module.exports = adicionarImagemPortfolioAtletaControllerRead;