class feedClubeControllerRead {
    getPage(req, res) {
        res.render("pages/feed-clube.ejs")
    }
}

const feedClubeController = new feedClubeControllerRead();

module.exports = feedClubeController;