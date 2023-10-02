const esporteModel = require("../models/Esporte");
const { validationResult } = require("express-validator");

class FormValidation {
    constructor() {
        this.validarAtletaCadastro = this.validarAtletaCadastro.bind(this);
        this.validarClubeCadastro = this.validarClubeCadastro.bind(this);
    }

    async validarAtletaCadastro(req, res, next) {
        const { senha, confirmacao_senha } = req.body;
        const erros = validationResult(req);
        this.#confirmacaoSenhaValidation(confirmacao_senha, senha, erros);

        if (!erros.isEmpty()) {
            const esportes = await esporteModel.findAllEsportes();

            const {
                nome,
                esporte,
                cnpj_clube,
                cidade,
                estado,
                email
            } = req.body;

            const nome_erro = erros.errors.find(erro => erro.path === "nome");
            const esporte_erro = erros.errors.find(erro => erro.path === "esporte");
            const cnpj_clube_erro = erros.errors.find(erro => erro.path === "cnpj_clube");
            const cidade_erro = erros.errors.find(erro => erro.path === "cidade");
            const estado_erro = erros.errors.find(erro => erro.path === "estado");
            const email_erro = erros.errors.find(erro => erro.path === "email");
            const senha_erro = erros.errors.find(erro => erro.path === "senha");
            const confirmacao_senha_erro = erros.errors.find(erro => erro.path === "confirmacao_senha");

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
                        nome_erro,
                        esporte_erro,
                        cnpj_clube_erro,
                        cidade_erro,
                        estado_erro,
                        email_erro,
                        senha_erro,
                        confirmacao_senha_erro
                    }
                }
            })
        }  
        
        return next();
    }

    async validarClubeCadastro(req, res, next) {
        const { senha, confirmacao_senha } = req.body;
        const erros = validationResult(req);
        this.#confirmacaoSenhaValidation(confirmacao_senha, senha, erros);

        if (!erros.isEmpty()) {
            const esportesLista = await esporteModel.findAllEsportes();

            const {
                nome,
                esportes,
                cnpj_clube,
                cidade,
                estado,
                email
            } = req.body;

            const nome_erro = erros.errors.find(erro => erro.path === "nome");
            const esportes_erro = erros.errors.find(erro => erro.path === "esportes");
            const cnpj_clube_erro = erros.errors.find(erro => erro.path === "cnpj_clube");
            const cidade_erro = erros.errors.find(erro => erro.path === "cidade");
            const estado_erro = erros.errors.find(erro => erro.path === "estado");
            const email_erro = erros.errors.find(erro => erro.path === "email");
            const senha_erro = erros.errors.find(erro => erro.path === "senha");
            const confirmacao_senha_erro = erros.errors.find(erro => erro.path === "confirmacao_senha");

            return res.render("pages/cadastro-clube.ejs", {
                data: {
                    esportes: esportesLista,
                    input_values: {
                        nome,
                        esportes,
                        cnpj_clube,
                        cidade,
                        estado,
                        email,
                        senha,
                        confirmacao_senha
                    },
                    erros: {
                        nome_erro,
                        esportes_erro,
                        cnpj_clube_erro,
                        cidade_erro,
                        estado_erro,
                        email_erro,
                        senha_erro,
                        confirmacao_senha_erro
                    }
                }
            })
        }  
        
        return next();
    }

    async validarRedefinirSenha(req, res, next) {
        const erros = validationResult(req);

        if (!erros.isEmpty()) {
            const {
                senha
            } = req.body;
            const token = req.params.token;

            const senha_erro = erros.errors.find(erro => erro.path === "senha");

            return res.render("pages/redefinir-senha.ejs", {
                data: {
                    token_validation: "valid_token",
                    token,
                    input_values: {
                        senha
                    },
                    erros: {
                        senha_erro
                    }
                }
            })
        }

        return next();
    }

    #confirmacaoSenhaValidation(confirmacao_senha, senha, errors) {
        if (confirmacao_senha !== senha) {
            errors.errors.push({
                msg: "As senhas devem ser iguais!",
                path: "confirmacao_senha"
            })
        }
    }
}

const autenticacaoForm = new FormValidation();

module.exports = autenticacaoForm;