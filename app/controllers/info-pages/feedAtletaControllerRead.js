class feedAtletaControllerRead {
    getPage(req, res) {
        res.render("pages/Feed-atletas.ejs")
    }
}

const feedAtletaController = new feedAtletaControllerRead();

module.exports = feedAtletaController;