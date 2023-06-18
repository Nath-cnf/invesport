var express = require("express");
var router = express.Router();

const homeControllerRead = require("../controllers/info-pages/homeControllerRead");
const trabalheConoscoControllerRead = require("../controllers/info-pages/rodape/trabalheConoscoControllerRead");
const perfilAtletaControllerRead = require("../controllers/info-pages/perfilAtletaControllerRead");
const feedAtletaControllerRead = require("../controllers/info-pages/feedAtletaControllerRead");
const feedClubeControllerRead = require("../controllers/info-pages/feedClubeControllerRead");

const loginAtletaControllerRead = require("../controllers/info-pages/login/loginAtletaControllerRead");
const loginAtletaControllerCreate = require("../controllers/info-pages/login/loginAtletaControllerCreate");
const cadastroAtletaControllerRead = require("../controllers/info-pages/cadastro/cadastroAtletaControllerRead");
const createAtletaControllerCreate = require("../controllers/info-pages/cadastro/cadastroAtletaControllerCreate");

const loginClubeControllerRead = require("../controllers/info-pages/login/loginClubeControllerRead");
const CadastroAtletaControllerCreate = require("../controllers/info-pages/cadastro/cadastroAtletaControllerCreate");

const autenticacaoMiddleware = require("../middleware/autenticacaoMiddleware");

// * Info pages

router.get("/", homeControllerRead.getPage);

router.get("/trabalhe-conosco", trabalheConoscoControllerRead.getPage);

router.get("/perfil-atleta", perfilAtletaControllerRead.getPage);

router.get("/feed-atleta", feedAtletaControllerRead.getPage);

router.get("/feed-clube", feedClubeControllerRead.getPage);


// * Login atleta

router.get("/login-atleta", loginAtletaControllerRead.getPage);

router.post("/login-atleta", loginAtletaControllerCreate.authenticateAtleta);

// * Cadastro atleta

router.get("/cadastro-atleta", cadastroAtletaControllerRead.getPage);

router.post("/cadastro-atleta",
autenticacaoMiddleware.criptografarSenha,
CadastroAtletaControllerCreate.createAtleta);

// * Login clube

router.get("/login-clube", loginClubeControllerRead.getPage);

module.exports = router;