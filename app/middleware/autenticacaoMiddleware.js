const bcrypt = require('bcrypt');
const esporteModel = require("../models/Esporte");
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
            const esportes = await esporteModel.findAllEsportes();
            const {
                nome,
                esporte,
                cnpj_clube,
                cidade,
                estado,
                email,
                senha,
                confirmacao_senha
            } = req.body;
            return res.render("pages/cadastro-atleta.ejs", {
                data: {
                    esportes,
                    input_values: {
                        nome,
                        esporte,
                        cnpj_clube,
                        cidade,
                        estado,
                        email,
                        senha,
                        confirmacao_senha
                    },
                    erros: {
                        sistema_erro: {
                            msg: "Erro no sistema"
                        }
                    }
                }
            });
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