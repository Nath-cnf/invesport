const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

class Autenticacao {
        async criptografarSenha(req, res, next) {
            const { senha } = req.body;

            try {
                const salt = Number(process.env.SALT_ROUNDS);

                const hash = await bcrypt.hash(senha, salt);

                req.senhaCriptografada = hash;

                return next();
            } catch (erro) {
                console.log(erro);
                return res.render("pages/cadastro-atleta.ejs");
            }
        }

        async criptografarRecuperacaoSenha(req, res, next) {
            const { senha } = req.body;
            const token = req.params.token;

            try {
                const salt = Number(process.env.SALT_ROUNDS);

                const hash = await bcrypt.hash(senha, salt);

                req.senhaCriptografada = hash;

                return next();
            } catch (erro) {
                console.log(erro);
                return res.render("pages/redefinir-senha.ejs", {
                    data: {
                        token_validation: "valid_token",
                        token,
                        input_values: {
                            senha
                        },
                        erros: {
                            sistema_erro: {
                                msg: "Erro de sistema, tente novamente mais tarde!"
                            }
                        }
                    }
                });
            }
        }

        validateToken(req, res, next) {
            const token = req.session.token;

            if (!token) {
                return res.redirect("/login-atleta");
            }

            try {
                jwt.verify(token, process.env.SECRET);

                return next();
            } catch (erro) {
                console.log(erro);

                return res.render("pages/login-atleta.ejs");
            }
        }
}

const autenticacaoMiddleware = new Autenticacao();

module.exports = autenticacaoMiddleware