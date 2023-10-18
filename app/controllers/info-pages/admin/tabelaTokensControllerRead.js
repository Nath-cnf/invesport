const tokenModel = require("../../../models/Token");

class tabelaTokensControllerRead {
    async getPage(req, res) {
        const tokens = await tokenModel.findAllTokens();

        return res.render("pages/admin/tabela-tokens.ejs", {
            data: {
                page_name: "Invesport",
                tokens
            }
        })
    }
}

const tabelaTokensController = new tabelaTokensControllerRead();

module.exports = tabelaTokensController;