class LoginAtletaControllerRead {
    getPage(req, res) {
        res.render("pages/login-atleta.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const LoginAtletaController = new LoginAtletaControllerRead();

module.exports = LoginAtletaController;