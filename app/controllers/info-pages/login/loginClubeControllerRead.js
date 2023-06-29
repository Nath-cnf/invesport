class LoginClubeControllerRead {
    getPage(req, res) {
        res.render("pages/login-clube.ejs",{
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const LoginClubeController = new LoginClubeControllerRead();

module.exports = LoginClubeController;