class feedAtletaControllerRead {
    getPage(req, res) {
        res.render("pages/feed-atletas.ejs")
    }
}

const feedAtletaController = new feedAtletaControllerRead();

module.exports = feedAtletaController;