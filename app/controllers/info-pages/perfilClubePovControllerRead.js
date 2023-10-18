const clubeModel = require("../../models/Clube");
const jwt = require("jsonwebtoken");

class perfilClubePovControllerRead {
   async getPage(req, res) {
        const token = req.session.token;
        const {userId, userType} = jwt.decode(token, process.env.SECRET);

        const clube = await clubeModel.findUserById(userId);

        return res.render("pages/perfil-clube-pov.ejs", {
            data: {
                page_name: "Invesport",
                clube
            }
        })
    }
}

const perfilClubePovController = new perfilClubePovControllerRead();

module.exports = perfilClubePovController;