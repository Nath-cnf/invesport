class tabelaTokensControllerRead {
    getPage(req, res) {
        res.render("pages/admin/tabela-tokens.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const tabelaTokensController = new tabelaTokensControllerRead();

module.exports = tabelaTokensController;