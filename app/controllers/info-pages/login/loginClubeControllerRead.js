class LoginClubeControllerRead {
    getPage(req, res) {
        res.render("pages/login-clube.ejs")
    }
}

const LoginClubeController = new LoginClubeControllerRead();

module.exports = LoginClubeController;