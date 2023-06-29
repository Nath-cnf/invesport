class comoDoarControllerRead {
    getPage(req, res) {
        res.render("pages/como-doar.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const comoDoarController = new comoDoarControllerRead();

module.exports = comoDoarController;