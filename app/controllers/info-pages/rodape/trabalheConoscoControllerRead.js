class TrabalheConoscoControllerRead {
    getPage(req, res) {

        res.render("pages/trabalhe-conosco.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const TrabalheConoscoController = new TrabalheConoscoControllerRead();

module.exports = TrabalheConoscoController;