var express = require("express");
var router = express.Router();

const homeControllerRead = require("../controllers/info-pages/homeControllerRead");
const homeCadastradaControllerRead = require("../controllers/info-pages/homeCadastradaControllerRead");

const trabalheConoscoControllerRead = require("../controllers/info-pages/rodape/trabalheConoscoControllerRead");
const perfilAtletaControllerRead = require("../controllers/info-pages/perfilAtletaControllerRead");
const feedControllerRead = require("../controllers/info-pages/feedControllerRead");
const assinaturaControllerRead = require("../controllers/info-pages/assinaturaControllerRead");
const duvidasFrequentesControllerRead = require("../controllers/info-pages/rodape/duvidasFrequentesControllerRead");
const comoDoarControllerRead = require("../controllers/info-pages/comoDoarControllerRead");

const loginAtletaControllerRead = require("../controllers/info-pages/login/loginAtletaControllerRead");
const loginAtletaControllerReadAuth = require("../controllers/info-pages/login/loginAtletaControllerReadAuth");
const cadastroAtletaControllerRead = require("../controllers/info-pages/cadastro/cadastroAtletaControllerRead");
const cadastroClubeControllerRead = require('../controllers/info-pages/cadastro/cadastroClubeControllerRead');

const redefinirSenhaMiddleware = require("../middleware/redefinirSenhaMiddleware");
const recuperarSenhaControllerRead = require("../controllers/info-pages/redefinir-senha/recuperarSenhaControllerRead");
const redefinirSenhaControllerRead = require("../controllers/info-pages/redefinir-senha/redefinirSenhaControllerRead");
const redefinirSenhaControllerUpdate = require("../controllers/info-pages/redefinir-senha/redefinirSenhaControllerUpdate");

const loginClubeControllerRead = require("../controllers/info-pages/login/loginClubeControllerRead");
const CadastroAtletaControllerCreate = require("../controllers/info-pages/cadastro/cadastroAtletaControllerCreate");

const autenticacaoMiddleware = require("../middleware/autenticacaoMiddleware");
const autenticacaoRegrasMiddleware = require("../middleware/autenticacaoRules");
const autenticacaoFormMiddleware = require("../middleware/autenticacaoFormsMiddleware");

// * Info pages

router.get("/", homeControllerRead.getPage);

router.get("/home", homeCadastradaControllerRead.getPage);

router.get("/trabalhe-conosco", trabalheConoscoControllerRead.getPage);

router.get("/perfil-atleta",
autenticacaoMiddleware.validateToken,
perfilAtletaControllerRead.getPage);

router.get("/assinatura", assinaturaControllerRead.getPage);

router.get("/feed", feedControllerRead.getPage);

router.get("/como-doar", comoDoarControllerRead.getPage);

// * Login atleta

router.get("/login-atleta", loginAtletaControllerRead.getPage);

router.post("/login-atleta", loginAtletaControllerReadAuth.authenticateAtleta);

// * Redefinir senha

router.get("/recuperar-senha",
recuperarSenhaControllerRead.getPage);

router.post("/recuperar-senha",
recuperarSenhaControllerRead.sendRecoverEmail);

router.get("/redefinir-senha/:token",
redefinirSenhaMiddleware.validarLink,
redefinirSenhaControllerRead.getPage);

router.post("/redefinir-senha/:token",
autenticacaoRegrasMiddleware.redefinirSenha,
autenticacaoFormMiddleware.validarRedefinirSenha,
redefinirSenhaMiddleware.validarLink,
autenticacaoMiddleware.criptografarRecuperacaoSenha,
redefinirSenhaControllerUpdate.updatePassword);


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