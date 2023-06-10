class duvidasFrequentesControllerRead {
    getPage(req, res) {
        res.render("pages/duvidas-frequentes.ejs")
    }
}

const duvidasFrequentesController = new duvidasFrequentesControllerRead();

module.exports = duvidasFrequentesController;