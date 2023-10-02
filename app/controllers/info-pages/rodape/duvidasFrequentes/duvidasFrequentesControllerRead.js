const usuarioModel = require("../../../../models/Usuario");
const jwt = require("jsonwebtoken")

class duvidasFrequentesControllerRead {
    async getPage(req, res) {
        const token = req.session.token;

        if (token) {
            const { userId } = jwt.decode(token, process.env.SECRET);
            const user = await usuarioModel.findUserById(userId);

            return res.render("pages/duvidas-frequentes.ejs", {
                data: {
                    page_name: "Invesport", email_enviado: false, input_values:{ email: user.email }

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