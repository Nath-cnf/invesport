class LogoutController {
   logout(req, res) {
     req.session.destroy();
        
     res.redirect("/");
   }
}

const logoutControllerRead = new LogoutControllerRead();

module.exports = logoutControllerRead;