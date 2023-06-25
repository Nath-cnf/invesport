class feedClubeControllerRead {
    getPage(req, res) {
        res.render("pages/Feed-clube.ejs")
    }
}

const feedClubeController = new feedClubeControllerRead();

module.exports = feedClubeController;