class homeAdminControllerRead {
    getPage(req, res) {
        res.render("pages/admin/home-admin.ejs", {
            data: {
                page_name: "Invesport"
            }
        })
    }
}

const homeAdminController = new homeAdminControllerRead();

module.exports = homeAdminController;