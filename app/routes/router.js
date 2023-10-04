var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});

//*HOME
const homeControllerRead = require("../controllers/info-pages/homeControllerRead");
const homeCadastradaControllerRead = require("../controllers/info-pages/homeCadastradaControllerRead");


//*RODAPE
const trabalheConoscoControllerRead = require("../controllers/info-pages/rodape/trabalheConoscoControllerRead");
const politicaControllerRead = require("../controllers/info-pages/rodape/politicaControllerRead");
const duvidasFrequentesControllerRead = require("../controllers/info-pages/rodape/duvidasFrequentes/duvidasFrequentesControllerRead");
const duvidasFrequentesControllerSendEmail = require("../controllers/info-pages/rodape/duvidasFrequentes/duvidasFrequentesControllerSendEmail");
const termosControllerRead = require("../controllers/info-pages/rodape/termosControllerRead");

//*MENU
const assinaturaControllerRead = require("../controllers/info-pages/menu/assinaturaControllerRead");
const comoDoarControllerRead = require("../controllers/info-pages/menu/comoDoarControllerRead");
const tarefaControllerRead = require("../controllers/info-pages/menu/tarefa/tarefaControllerRead");
const tarefaControllerCreate = require("../controllers/info-pages/menu/tarefa/tarefaControllerCreate")
const feedControllerRead = require("../controllers/info-pages/menu/feedControllerRead");


//*CADASTRO-LOGIN-PERFIL
const perfilClubeControllerRead = require("../controllers/info-pages/perfilClubeControllerRead");
const perfilAtletaControllerRead = require("../controllers/info-pages/perfilAtletaControllerRead");
const loginAtletaControllerRead = require("../controllers/info-pages/login/loginAtletaControllerRead");
const loginAtletaControllerReadAuth = require("../controllers/info-pages/login/loginAtletaControllerReadAuth");
const cadastroAtletaControllerRead = require("../controllers/info-pages/cadastro/cadastroAtletaControllerRead");
const cadastroClubeControllerRead = require('../controllers/info-pages/cadastro/cadastroClubeControllerRead');
const cadastroClubeControllerCreate = require("../controllers/info-pages/cadastro/cadastroClubeControllerCreate")
const loginClubeControllerRead = require("../controllers/info-pages/login/loginClubeControllerRead");
const CadastroAtletaControllerCreate = require("../controllers/info-pages/cadastro/cadastroAtletaControllerCreate");

//*REDEFINIR
const redefinirSenhaMiddleware = require("../middleware/redefinirSenhaMiddleware");
const recuperarSenhaControllerRead = require("../controllers/info-pages/redefinir-senha/recuperarSenhaControllerRead");
const redefinirSenhaControllerRead = require("../controllers/info-pages/redefinir-senha/redefinirSenhaControllerRead");
const redefinirSenhaControllerUpdate = require("../controllers/info-pages/redefinir-senha/redefinirSenhaControllerUpdate");

//*AUTENTICACAO
const autenticacaoMiddleware = require("../middleware/autenticacaoMiddleware");
const autenticacaoRegrasMiddleware = require("../middleware/autenticacaoRules");
const autenticacaoFormMiddleware = require("../middleware/autenticacaoFormsMiddleware");
const politicaController = require("../controllers/info-pages/rodape/politicaControllerRead");
const termosController = require("../controllers/info-pages/rodape/termosControllerRead");
const validationMiddlewareRules = require("../middleware/autenticacaoRules");

// * IMAGENS
const imagensBannerControllerRead = require("../controllers/info-pages/imagens/imagensBannerControllerRead");
const imagensUsuariosControllerRead = require("../controllers/info-pages/imagens/imagensUsuariosControllerRead");

// * EDITAR
const editarAtletaControllerRead = require("../controllers/perfil/editarAtletaControllerRead");

// * Info pages

router.get("/", homeControllerRead.getPage);

router.get("/home", homeCadastradaControllerRead.getPage);

router.get("/trabalhe-conosco", trabalheConoscoControllerRead.getPage);

router.get("/perfil-atleta",
autenticacaoMiddleware.validateToken,
perfilAtletaControllerRead.getPage);

router.get("/perfil-clube", perfilClubeControllerRead.getPage);

router.get("/assinatura", assinaturaControllerRead.getPage);

router.get("/feed", feedControllerRead.getPage);

router.get("/como-doar", comoDoarControllerRead.getPage);

router.get("/tarefas",
autenticacaoMiddleware.validateToken,
tarefaControllerRead.getPage);

router.post("/criar-tarefa",
autenticacaoMiddleware.validateToken,
validationMiddlewareRules.criarTarefaValidacao,
autenticacaoFormMiddleware.validarTarefa,
tarefaControllerCreate.createTarefa);

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
autenticacaoRegrasMiddleware.cadastroAtletaValidacao,
autenticacaoFormMiddleware.validarAtletaCadastro,
autenticacaoMiddleware.criptografarSenha,
CadastroAtletaControllerCreate.createAtleta);

// * Login clube

router.get("/login-clube", loginClubeControllerRead.getPage);

// * Cadastro clube

router.get("/cadastro-clube", cadastroClubeControllerRead.getPage);

router.post("/cadastro-clube",
autenticacaoRegrasMiddleware.cadastroClubeValidacao,
autenticacaoFormMiddleware.validarClubeCadastro,
autenticacaoMiddleware.criptografarSenha,
cadastroClubeControllerCreate.createClube);

// * Imagens

router.get("/assets/perfil/banners/:userId",
autenticacaoMiddleware.validateToken,
imagensBannerControllerRead.getImage);

router.get("/assets/perfil/imagens_usuarios/:userId",
autenticacaoMiddleware.validateToken,
imagensUsuariosControllerRead.getImage);

// * Editar perfil

router.get("/editar-perfil", editarAtletaControllerRead.getPage);

// * Rodape

router.get("/fale-conosco", duvidasFrequentesControllerRead.getPage);

router.post("/email-duvida", duvidasFrequentesControllerSendEmail.sendEmail);

router.get("/politica", politicaControllerRead.getPage);

router.get("/termos", termosControllerRead.getPage);

module.exports = router;