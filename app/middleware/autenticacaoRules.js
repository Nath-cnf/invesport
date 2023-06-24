const { body } = require("express-validator");

const validationMiddlewareRules = {
    cadastroValidacao: [
        body("nome")
        .isLength({min: 3, max: 255})
        .withMessage("Insira o seu nome completo!"),
        body("esporte")
        .isString()
        .withMessage("Selecione um esporte!"),
        body("cnpj_clube")
        .isString()
        .isLength({min: 18, max: 18})
        .withMessage("Insira um CNPJ válido, no padrão: XX.XXX.XXX/000X-XX"),
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
    ]
}

module.exports = validationMiddlewareRules;