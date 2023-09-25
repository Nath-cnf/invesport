class feedControllerRead {
    getPage(req, res) {
        res.render("pages/feed.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const feedController = new feedControllerRead();

module.exports = feedController;