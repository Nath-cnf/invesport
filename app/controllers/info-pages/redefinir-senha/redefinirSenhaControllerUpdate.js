const tokenModel = require("../../../models/Token");
const usuarioModel = require("../../../models/Usuario");
const mailer = require("nodemailer");

class redefinirSenhaControllerUpdate {
    constructor() {
        this.updatePassword = this.updatePassword.bind(this);
    }

    async updatePassword(req, res) {
        const {
            senha
        } = req.body;
        const token = req.params.token;

        try {
            const user_token = await tokenModel.findTokenById(token);

            const email = user_token.email;

            await usuarioModel.updateUserSenha(req.senhaCriptografada, email)

            await this.#sendMail(email);
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
            })
        }

        return res.redirect("/login-atleta");
    }

    async #sendMail(email) {
        const transporter = mailer.createTransport({
            service: "gmail",
            auth: {
                user: "InveSport.tcc@gmail.com",
                pass: "vokkaqwkmkclmrdg"
            }
        })

        const mailOptions = {
            from: "Invesport.tcc@gmail.com",
            to: email,
            subject: "Senha alterada",
            html: `<img src="https://invesport.up.railway.app/assets/assinatura.jpg>`
        }

        await transporter.sendMail(mailOptions);
    }
}

const redefinirSenhaController = new redefinirSenhaControllerUpdate();

module.exports = redefinirSenhaController;