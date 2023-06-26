class feedControllerRead {
    getPage(req, res) {
        res.render("pages/feed.ejs")
    }
}

const feedController = new feedControllerRead();

module.exports = feedController;