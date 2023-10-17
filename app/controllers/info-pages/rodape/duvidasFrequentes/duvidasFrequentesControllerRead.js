const usuarioModel = require("../../../../models/Usuario");
const jwt = require("jsonwebtoken")

class duvidasFrequentesControllerRead {
    async getPage(req, res) {
        const token = req.session.token;
        let usuario_logado = false;

        if (token) {
            const { userId } = jwt.decode(token, process.env.SECRET);
            const user = await usuarioModel.findUserById(userId);
            usuario_logado = true;

            return res.render("pages/duvidas-frequentes.ejs", {
                data: {
                    page_name: "Invesport", email_enviado: false, input_values:{ email: user.email },
                    usuario_logado
                }
            })
        }

        return res.render("pages/duvidas-frequentes.ejs", {
            data: {
                page_name: "Invesport", email_enviado: false, 

            }
        })
    }
}

const duvidasFrequentesController = new duvidasFrequentesControllerRead();

module.exports = duvidasFrequentesController;