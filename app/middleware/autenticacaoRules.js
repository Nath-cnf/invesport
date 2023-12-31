const { body } = require("express-validator");

const validationMiddlewareRules = {
    cadastroAtletaValidacao: [
        body("nome")
        .isLength({min: 3, max: 255})
        .withMessage("Insira o seu nome completo!"),
        body("esporte")
        .isString()
        .withMessage("Selecione um esporte!"),
        body("cnpj_clube")
        .optional({ checkFalsy: true })
        .isString()
        .isLength({ min: 18, max: 18 })
        .withMessage("Insira um CNPJ válido, no padrão: XX.XXX.XXX/XXXX-XX")
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
        .withMessage("Insira um CNPJ válido, no padrão: XX.XXX.XXX/XXXX-XX"),
        body("cidade")
        .isString()
        .isLength({min: 3})
        .withMessage("Selecione uma cidade"),
        body("estado")
        .isString()
        .isLength({min: 2, max: 2})
        .isIn(["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
        ])
        .withMessage("Insira a sigla do estado!"),
        body("email")
        .isEmail()
        .withMessage("Escreva seu email"),
        body("senha")
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })
        .withMessage("Sua senha deve conter 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial e no mínimo 8 caracteres no total.")
    ],
    redefinirSenha: [
        body("senha")
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minNumbers: 1,
            minUppercase: 1
        })
        .withMessage("Sua senha deve conter 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial e no mínimo 8 caracteres no total.")
    ],
    criarTarefaValidacao: [
        body("nome_tarefa")
        .isLength({min: 1, max: 255})
        .withMessage("Insira um nome para a sua tarefa!"),
        body("conclusao_tarefa")
        .notEmpty()
        .withMessage("Insira uma data de conclusão!")
    ],
    editarCadastroAtletaValidacao: [
        body("nome")
        .isLength({min: 3, max: 255})
        .withMessage("Insira o seu nome completo!"),
        body("esporte")
        .isString()
        .withMessage("Selecione um esporte!"),
        body("cnpj_clube")
        .optional({ checkFalsy: true })
        .isString()
        .isLength({ min: 18, max: 18 })
        .withMessage("Insira um CNPJ válido, no padrão: XX.XXX.XXX/XXXX-XX")
        .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)
        .withMessage("Insira um CNPJ válido, no padrão: XX.XXX.XXX/XXXX-XX"),
        body("cidade")
        .isString()
        .isLength({min: 3})
        .withMessage("Selecione uma cidade"),
        body("estado")
        .isString()
        .isLength({min: 2, max: 2})
        .isIn(["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
        ])
        .withMessage("Insira a sigla do estado!"),
        body("email")
        .isEmail()
        .withMessage("Escreva seu email")
    ],
    adicionarChavePixValidacao: [
        body("chave_pix")
        .trim()
        .notEmpty()
        .withMessage("Adicione a sua chave PIX!")
    ],
    cadastrarBeneficioAssinaturaValidacao: [
        body("beneficio_assinatura")
        .trim()
        .isLength({min: 3})
        .withMessage("O benefício deve ter no mínimo 3 caracteres!")
    ],
    editarSobreAtleta: [
        body("idade")
        .optional({values: "falsy"})
        .isInt({min: 0})
        .withMessage("Informe a sua idade!")
        .isInt({max: 100})
        .withMessage("Informe uma idade válida!"),
        body("cidade")
        .isString()
        .isLength({min: 3})
        .withMessage("Selecione uma cidade"),
        body("estado")
        .isString()
        .isLength({min: 2, max: 2})
        .isIn(["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
        ])
        .withMessage("Insira a sigla do estado!"),
        body("descricao")
        .optional({values: "falsy"})
        .trim()
        .isLength({min: 3})
        .withMessage("A sua descrição deve ter no mínimo 3 caracteres!")
        .isLength({max: 255})
        .withMessage("A sua descrição do ter no máximo 255 caracteres!")
    ]
}

module.exports = validationMiddlewareRules;
