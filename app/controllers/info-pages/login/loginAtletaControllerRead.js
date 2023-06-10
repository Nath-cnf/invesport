class LoginAtletaControllerRead {
    getPage(req, res) {
        res.render("pages/login-atleta.ejs")
    }
}

const LoginAtletaController = new LoginAtletaControllerRead();

module.exports = LoginAtletaController;