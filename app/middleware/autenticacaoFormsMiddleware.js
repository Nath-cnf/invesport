const prisma = require("../../server/database/prismaClient");
const { validationResult } = require("express-validator");

class FormValidation {
    async validarCadastro(req, res, next) {
        const erros = validationResult(req);

        if (!erros.isEmpty()) {
            const esportes = await prisma.esporte.findMany();

            const {
                nome,
                esporte,
                cnpj_clube,
                cidade,
                estado,
                email,
                senha
            } = req.body;

            const nome_erro = erros.errors.find(erro => erro.path === "nome");
            const esporte_erro = erros.errors.find(erro => erro.path === "esporte");
            const cnpj_clube_erro = erros.errors.find(erro => erro.path === "cnpj_clube");
            const cidade_erro = erros.errors.find(erro => erro.path === "cidade");
            const estado_erro = erros.errors.find(erro => erro.path === "estado");
            const email_erro = erros.errors.find(erro => erro.path === "email");
            const senha_erro = erros.errors.find(erro => erro.path === "senha");

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
                        senha
                    },
                    erros: {
                        nome_erro,
                        esporte_erro,
                        cnpj_clube_erro,
                        cidade_erro,
                        estado_erro,
                        email_erro,
                        senha_erro
                    }
                }
            })
        }  
        
        return next();
    }
}

const autenticacaoForm = new FormValidation();

module.exports = autenticacaoForm;