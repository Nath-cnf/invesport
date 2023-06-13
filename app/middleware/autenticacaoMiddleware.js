const bcrypt = require('bcrypt');
require("dotenv").config

class Autenticacao {
        async criptografarSenha(req, res, next) {
            try {
                const { senha } = req.body;
                const salt = Number(process.env.SALT_ROUNDS);

                const hash = await bcrypt.hash(senha, salt);

                req.senhaCriptografada = hash;

                next();
            } catch (erro) {
                console.log(erro);
                return res.render("pages/cadastro-atleta.ejs");
            }
        }
}

const autenticacaoMiddleware =  new Autenticacao()

module.exports = autenticacaoMiddleware