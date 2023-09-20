const mailer = require('nodemailer')


class duvidasFrequentesControllerSendEmail {
    async sendEmail(req, res) {
        try {
            
            const { email_duvidador, assunto_duvida } = req.body
            const transporter = mailer.createTransport({
                service: "gmail",
                auth: {
                    user: "InveSport.tcc@gmail.com",
                    pass: "vokkaqwkmkclmrdg"
                }
            })

            const mailOptions = {
                from: "Invesport.tcc@gmail.com",
                to: "Invesport.tcc@gmail.com",
                subject: "Usuário com dúvida",
                html: ` <p> Usuário: ${email_duvidador} </p>
                    <p> Dúvida: ${assunto_duvida} </p>
            <img src="https://invesport.up.railway.app/assets/assinatura.jpg">`

            }

            await transporter.sendMail(mailOptions);
            return res.render('pages/duvidas-frequentes.ejs', {
                data: {
                    page_name: 'Invesport', email_enviado: true, input_values:{email: email_duvidador, duvida: assunto_duvida}

                }
            })


        } catch (erro) {
            console.log(erro)
            return res.render('pages/duvidas-frequentes.ejs', {
                data: {
                    page_name: 'Invesport', email_enviado: false, 
                    erros: {
                        sistema_erro: {
                            msg: "Erro, mensagem não enviada"
                        }
                    }
                }
            })
        }
    }
}

const duvidasFrequentesController = new duvidasFrequentesControllerSendEmail();

module.exports = duvidasFrequentesController;