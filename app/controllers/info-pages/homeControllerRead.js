class HomeControllerRead {
    getPage(req, res) {
        res.render("pages/index.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const HomeController = new HomeControllerRead();

module.exports = HomeController;