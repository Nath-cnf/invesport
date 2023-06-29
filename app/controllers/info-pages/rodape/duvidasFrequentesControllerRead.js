class duvidasFrequentesControllerRead {
    getPage(req, res) {
        res.render("pages/duvidas-frequentes.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const duvidasFrequentesController = new duvidasFrequentesControllerRead();

module.exports = duvidasFrequentesController;