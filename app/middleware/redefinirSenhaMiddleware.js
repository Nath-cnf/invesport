const tokenModel = require("../models/Token");

class RedefinirSenha {
    async validarLink(req, res, next) {
        const token = req.params.token;

        const user_token = await tokenModel.findTokenById(token);

        if (!user_token) {
            return res.render("pages/redefinir-senha.ejs", {
                data: {
                    token_validation: "invalid_token"
                }
            })
        }

        const tokenCriacao = new Date(user_token.created_at).getTime();
        const dataAtual = new Date().getTime();
        const tempoDecorrido = (dataAtual - tokenCriacao) / 1000 / 60;

        if (tempoDecorrido > 10) {
            return res.render("pages/redefinir-senha.ejs", {
                data: {
                    token_validation: "expired_token",
                }
            })
        }

        return next();
    }
}

const redefinirSenhaMiddleware = new RedefinirSenha();

module.exports = redefinirSenhaMiddleware;