const prisma = require("../../../../server/database/prismaClient");
const mailer = require("nodemailer");

class CadastroAtletaControllerRead {
    constructor() {
        this.sendRecoverEmail = this.sendRecoverEmail.bind(this);
    }

    getPage(req, res) {
        res.render("pages/recuperar-senha.ejs", {
            data: {
                email_sended: false
            }
        })
    }

    async sendRecoverEmail(req, res) {
        const {
            email
        } = req.body;

        const user = await prisma.usuario.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return res.render("pages/recuperar-senha.ejs", {
                data: {
                    email_sended: false,
                    erros: {
                        email_erro: {
                            msg: "Usuário não cadastrado!"
                        }
                    }
                }
            })
        }

        const token = await this.#createToken(email);

        try {
            await this.#sendMail(email, token.id);

            return res.render("pages/recuperar-senha.ejs", {
                data: {
                    email_sended: true
                }
            })
        } catch (erro) {
            return res.render("pages/recuperar-senha.ejs", {
                data: {
                    email_sended: false,
                    input_values: {
                        email
                    },
                    erros: {
                        sistema_erro: {
                            msg: "Erro de sistema, tente novamente mais tarde!"
                        }
                    }
                }
            })
        }
        
    }

    async #sendMail(email, token) {
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
            subject: "Recuperação de senha InveSport",
            html: `<p> Acesse o link para redefinir sua senha <a href="https://invesport.up.railway.app/redefinir-senha/${token}">
            Redefinir senha</a></p>
            <img src="https://invesport.up.railway.app/assets/assinatura.jpg">`
        }

        await transporter.sendMail(mailOptions);
    }

    async #createToken(email) {
        const token = await prisma.token.create({
            data: {
                email
            }
        })

        return token
    }
}

const CadastroAtletaController = new CadastroAtletaControllerRead();

module.exports = CadastroAtletaController;