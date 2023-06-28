class redefinirSenhaControllerRead {
    getPage(req, res) {
        const token = req.params.token;

        return res.render("pages/redefinir-senha.ejs", {
            data: {
                token_validation: "valid_token",
                token
            }
        })
    }
}

const redefinirSenhaController = new redefinirSenhaControllerRead();

module.exports = redefinirSenhaController;