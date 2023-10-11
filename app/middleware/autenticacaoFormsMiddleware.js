const esporteModel = require("../models/Esporte");
const usuarioModel = require("../models/Usuario");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

class FormValidation {
  constructor() {
    this.validarAtletaCadastro = this.validarAtletaCadastro.bind(this);
    this.validarClubeCadastro = this.validarClubeCadastro.bind(this);
  }

  async validarAtletaCadastro(req, res, next) {
    const { senha, confirmacao_senha } = req.body;
    const erros = validationResult(req);
    this.#confirmacaoSenhaValidation(confirmacao_senha, senha, erros);

    if (!erros.isEmpty()) {
      const esportes = await esporteModel.findAllEsportes();

      const { nome, esporte, cnpj_clube, cidade, estado, email } = req.body;

      const nome_esporte = await esporteModel.getEsporteNome(esporte);

      const nome_erro = erros.errors.find((erro) => erro.path === "nome");
      const esporte_erro = erros.errors.find((erro) => erro.path === "esporte");
      const cnpj_clube_erro = erros.errors.find(
        (erro) => erro.path === "cnpj_clube"
      );
      const cidade_erro = erros.errors.find((erro) => erro.path === "cidade");
      const estado_erro = erros.errors.find((erro) => erro.path === "estado");
      const email_erro = erros.errors.find((erro) => erro.path === "email");
      const senha_erro = erros.errors.find((erro) => erro.path === "senha");
      const confirmacao_senha_erro = erros.errors.find(
        (erro) => erro.path === "confirmacao_senha"
      );

      return res.render("pages/cadastro-atleta.ejs", {
        data: {
          page_name: "Invesport",
          esportes,
          input_values: {
            nome,
            esporte,
            nome_esporte: nome_esporte.nome,
            cnpj_clube,
            cidade,
            estado,
            email,
            senha,
            confirmacao_senha,
          },
          erros: {
            nome_erro,
            esporte_erro,
            cnpj_clube_erro,
            cidade_erro,
            estado_erro,
            email_erro,
            senha_erro,
            confirmacao_senha_erro,
          },
        },
      });
    }

    return next();
  }

  async validarEditarAtletaCadastro(req, res, next) {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      const esportes = await esporteModel.findAllEsportes();
      const token = req.session.token;
      const { userId } = jwt.decode(token, process.env.SECRET);

      const { nome, esporte, cnpj_clube, cidade, estado, email } = req.body;

      const user = await usuarioModel.findUserById(userId);
      let userImagemPerfil = false;
      let userBannerPerfil = false;

      if (user.imagem_perfil) {
        userImagemPerfil = true;
      }

      if (user.banner_perfil) {
        userBannerPerfil = true;
      }

      console.log("Esporte body", esporte);

      try {
        const nome_esporte = await esporteModel.getEsporteNome(esporte);

        const nome_erro = erros.errors.find((erro) => erro.path === "nome");
        const esporte_erro = erros.errors.find(
          (erro) => erro.path === "esporte"
        );
        const cnpj_clube_erro = erros.errors.find(
          (erro) => erro.path === "cnpj_clube"
        );
        const cidade_erro = erros.errors.find((erro) => erro.path === "cidade");
        const estado_erro = erros.errors.find((erro) => erro.path === "estado");
        const email_erro = erros.errors.find((erro) => erro.path === "email");

        return res.render("pages/editar-perfil-atleta.ejs", {
          data: {
            page_name: "Invesport",
            esportes,
            input_values: {
              nome,
              userImagemPerfil,
              userBannerPerfil,
              esporte: {id: esporte},
              nome_esporte: nome_esporte,
              cnpj_clube: cnpj_clube,
              cidade: cidade,
              estado: estado,
              email: email,
            },
            erros: {
              nome_erro,
              esporte_erro,
              cnpj_clube_erro,
              cidade_erro,
              estado_erro,
              email_erro,
            },
          },
        });
      } catch (erro) {
        console.log(erro);

        const nome_esporte = await esporteModel.getEsporteNome(esporte);

        return res.render("pages/editar-perfil-atleta.ejs", {
          data: {
            esportes,
            page_name: "Invesport",
            input_values: {
              nome,
              userImagemPerfil,
              userBannerPerfil,
              esporte: {id: esporte},
              nome_esporte: nome_esporte,
              cnpj_clube: cnpj_clube,
              cidade: cidade,
              estado: estado,
              email: email,
            },
            erros: {
              sistema_erro: {
                msg: "Erro de sistema, tente novamente mais tarde!",
              },
            },
          },
        });
      }
    }

    return next();
  }

  async validarClubeCadastro(req, res, next) {
    const { senha, confirmacao_senha } = req.body;
    const erros = validationResult(req);
    this.#confirmacaoSenhaValidation(confirmacao_senha, senha, erros);

    if (!erros.isEmpty()) {
      const esportesLista = await esporteModel.findAllEsportes();

      const { nome, esportes, cnpj_clube, cidade, estado, email } = req.body;

      let esportesResponse = [];

      esportesResponse.push(esportes);
      esportesResponse = esportesResponse.flat();

      const listaNomesEsportesSelecionados = [];

      esportesResponse.forEach((esporteResponse) => {
        let esporteSelecionado = esportesLista.find((esporte) => {
          return esporte.id === esporteResponse;
        });

        if (esporteSelecionado) {
          listaNomesEsportesSelecionados.push(esporteSelecionado);
        }
      });

      const nome_erro = erros.errors.find((erro) => erro.path === "nome");
      const esportes_erro = erros.errors.find(
        (erro) => erro.path === "esportes"
      );
      const cnpj_clube_erro = erros.errors.find(
        (erro) => erro.path === "cnpj_clube"
      );
      const cidade_erro = erros.errors.find((erro) => erro.path === "cidade");
      const estado_erro = erros.errors.find((erro) => erro.path === "estado");
      const email_erro = erros.errors.find((erro) => erro.path === "email");
      const senha_erro = erros.errors.find((erro) => erro.path === "senha");
      const confirmacao_senha_erro = erros.errors.find(
        (erro) => erro.path === "confirmacao_senha"
      );

      return res.render("pages/cadastro-clube.ejs", {
        data: {
          esportes: esportesLista,
          input_values: {
            nome,
            esportes: esportesResponse,
            nomes_esportes_selecionados: listaNomesEsportesSelecionados,
            cnpj_clube,
            cidade,
            estado,
            email,
            senha,
            confirmacao_senha,
          },
          erros: {
            nome_erro,
            esportes_erro,
            cnpj_clube_erro,
            cidade_erro,
            estado_erro,
            email_erro,
            senha_erro,
            confirmacao_senha_erro,
          },
        },
      });
    }

    return next();
  }

  async validarRedefinirSenha(req, res, next) {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      const { senha } = req.body;
      const token = req.params.token;

      const senha_erro = erros.errors.find((erro) => erro.path === "senha");

      return res.render("pages/redefinir-senha.ejs", {
        data: {
          token_validation: "valid_token",
          token,
          input_values: {
            senha,
          },
          erros: {
            senha_erro,
          },
        },
      });
    }

    return next();
  }

  async validarTarefa(req, res, next) {
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      const { nome_tarefa, conclusao_tarefa } = req.body;

      const nome_tarefa_erro = erros.errors.find(
        (erro) => erro.path === "nome_tarefa"
      );
      const conclusao_tarefa_erro = erros.errors.find(
        (erro) => erro.path === "conclusao_tarefa"
      );

      return res.render("pages/tarefas.ejs", {
        data: {
          input_values: {
            nome_tarefa,
            conclusao_tarefa,
          },
          erros: {
            nome_tarefa_erro,
            conclusao_tarefa_erro,
          },
        },
      });
    }

    return next();
  }

  #confirmacaoSenhaValidation(confirmacao_senha, senha, errors) {
    if (confirmacao_senha !== senha) {
      errors.errors.push({
        msg: "As senhas devem ser iguais!",
        path: "confirmacao_senha",
      });
    }
  }
}

const autenticacaoForm = new FormValidation();

module.exports = autenticacaoForm;
