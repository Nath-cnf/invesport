var express = require("express");
var router = express.Router();

const homeControllerRead = require("../controllers/info-pages/homeControllerRead");
const trabalheConoscoControllerRead = require("../controllers/info-pages/rodape/trabalheConoscoControllerRead");
const perfilAtletaControllerRead = require("../controllers/info-pages/perfilAtletaControllerRead");
const feedControllerRead = require("../controllers/info-pages/feedControllerRead");
const assinaturaControllerRead = require("../controllers/info-pages/assinaturaControllerRead");
const duvidasFrequentesControllerRead = require("../controllers/info-pages/rodape/duvidasFrequentesControllerRead");

const loginAtletaControllerRead = require("../controllers/info-pages/login/loginAtletaControllerRead");
const loginAtletaControllerReadAuth = require("../controllers/info-pages/login/loginAtletaControllerReadAuth");
const cadastroAtletaControllerRead = require("../controllers/info-pages/cadastro/cadastroAtletaControllerRead");
const cadastroClubeControllerRead = require('../controllers/info-pages/cadastro/cadastroClubeControllerRead')
const createAtletaControllerCreate = require("../controllers/info-pages/cadastro/cadastroAtletaControllerCreate");

const loginClubeControllerRead = require("../controllers/info-pages/login/loginClubeControllerRead");
const CadastroAtletaControllerCreate = require("../controllers/info-pages/cadastro/cadastroAtletaControllerCreate");

const autenticacaoMiddleware = require("../middleware/autenticacaoMiddleware");
const autenticacaoRegrasMiddleware = require("../middleware/autenticacaoRules");
const autenticacaoFormMiddleware = require("../middleware/autenticacaoFormsMiddleware");

// * Info pages

router.get("/", homeControllerRead.getPage);

router.get("/trabalhe-conosco", trabalheConoscoControllerRead.getPage);

router.get("/perfil-atleta",
autenticacaoMiddleware.validateToken,
perfilAtletaControllerRead.getPage);

router.get("/assinatura", assinaturaControllerRead.getPage);

router.get("/feed", feedControllerRead.getPage);

// * Login atleta

router.get("/login-atleta", loginAtletaControllerRead.getPage);

router.post("/login-atleta", loginAtletaControllerReadAuth.authenticateAtleta);

// * Cadastro atleta

router.get("/cadastro-atleta", cadastroAtletaControllerRead.getPage);

router.post("/cadastro-atleta",
autenticacaoRegrasMiddleware.cadastroValidacao,
autenticacaoFormMiddleware.validarCadastro,
autenticacaoMiddleware.criptografarSenha,
CadastroAtletaControllerCreate.createAtleta);

// * Login clube

router.get("/login-clube", loginClubeControllerRead.getPage);

//* Cadastro clube

router.get("/cadastro-clube", cadastroClubeControllerRead.getPage);

//* Rodape

router.get("/fale-conosco", duvidasFrequentesControllerRead.getPage);

module.exports = router;