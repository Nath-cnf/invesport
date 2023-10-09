class termosControllerRead {
    getPage(req, res) {
        res.render("pages/termos.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const termosController = new termosControllerRead();

module.exports = termosController;