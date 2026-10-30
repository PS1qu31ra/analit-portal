"use client";

import {
  FormEvent,
  useMemo,
  useState,
} from "react";

import {
  AREAS,
  ESTADOS_BRASIL,
  FINALIDADES,
  ORIGENS,
  PAISES,
  PERFIS_ATUACAO,
  opcoesTrajetoria,
  rotuloTrajetoria,
  usaExperienciaProfissional,
} from "@/lib/cadastro/opcoes";

import {
  validarConta,
  validarPerfil,
} from "@/lib/cadastro/validacao";

import {
  useLanguage,
} from "@/components/i18n/LanguageProvider";

import type {
  CadastroDados,
  CadastroErros,
  PerfilAtuacao,
} from "@/lib/cadastro/tipos";

import styles from "./Cadastro.module.css";


const DADOS_INICIAIS:
  CadastroDados = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",

  institution: "",

  profileType: "",
  profileTypeOther: "",

  areaCode: "",
  areaOther: "",

  academicLevel: "",
  professionalExperienceRange: "",

  primaryGoal: "",

  countryCode: "BR",
  countryOther: "",

  stateCode: "",

  discoverySource: "",
  discoverySourceOther: "",
};


export default function CadastroForm() {
  const {
    language,
  } = useLanguage();


  const [
    etapa,
    setEtapa,
  ] =
    useState<1 | 2>(1);

  const [
    dados,
    setDados,
  ] =
    useState<CadastroDados>(
      DADOS_INICIAIS
    );

  const [
    erros,
    setErros,
  ] =
    useState<CadastroErros>({});

  const [
    concluido,
    setConcluido,
  ] =
    useState(false);

  const [
    mostrarSenha,
    setMostrarSenha,
  ] =
    useState(false);

  const [
    mostrarConfirmacao,
    setMostrarConfirmacao,
  ] =
    useState(false);


    const rotuloNivel =
    useMemo(
      () =>
        rotuloTrajetoria(
          dados.profileType,
          language
        ),
      [
        dados.profileType,
        language,
      ]
    );


  const opcoesNivel =
    useMemo(
      () =>
        opcoesTrajetoria(
          dados.profileType
        ),
      [dados.profileType]
    );


  function atualizar<
    K extends keyof CadastroDados
  >(
    campo: K,
    valor: CadastroDados[K]
  ) {
    setDados((atual) => ({
      ...atual,
      [campo]: valor,
    }));

    setErros((atual) => ({
      ...atual,
      [campo]: undefined,
    }));
  }


  function alterarPerfil(
    perfil:
      PerfilAtuacao | ""
  ) {
    setDados((atual) => ({
      ...atual,

      profileType:
        perfil,

      profileTypeOther:
        "",

      academicLevel:
        "",

      professionalExperienceRange:
        "",
    }));

    setErros({});
  }


  function avancar() {
    const encontrados =
  validarConta(
    dados,
    language
  );

    if (
      Object.keys(
        encontrados
      ).length > 0
    ) {
      setErros(encontrados);
      return;
    }

    setErros({});
    setEtapa(2);
  }


  function finalizar(
    event:
      FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const conta =
  validarConta(
    dados,
    language
  );

const perfil =
  validarPerfil(
    dados,
    language
  );

    const encontrados = {
      ...conta,
      ...perfil,
    };

    if (
      Object.keys(
        encontrados
      ).length > 0
    ) {
      setErros(encontrados);
      return;
    }

    /*
     * Nesta etapa ainda NÃO enviamos senha
     * nem dados pessoais para o banco.
     *
     * Aqui entraremos com Neon Auth
     * quando a autenticação for conectada.
     */

    setConcluido(true);
  }


  if (concluido) {
    return (
      <main className={styles.page}>
        <section
          className={
            styles.successCard
          }
        >
          <div
            className={
              styles.successIcon
            }
          >
            ✓
          </div>

          <span
            className={
              styles.eyebrow
            }
          >
            Formulário validado
          </span>

          <h1>
            Perfil pronto para cadastro
          </h1>

          <p>
            Todas as informações foram
            validadas corretamente. A criação
            definitiva da conta será ativada
            quando conectarmos a autenticação
            ao Neon.
          </p>

          <button
            type="button"
            className={
              styles.primaryButton
            }
            onClick={() =>
              setConcluido(false)
            }
          >
            Revisar informações
          </button>
        </section>
      </main>
    );
  }


  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <aside
          className={
            styles.sidebar
          }
        >
          <div>
            <div
              className={
                styles.brand
              }
            >
              <div
                className={
                  styles.brandMark
                }
              >
                A
              </div>

              <div>
                <strong>
                  Analit
                </strong>

                <span>
                  Ecossistema científico
                </span>
              </div>
            </div>

            <div
              className={
                styles.sidebarContent
              }
            >
              <span
                className={
                  styles.sidebarEyebrow
                }
              >
                Cadastro de usuário
              </span>

              <h1>
                Uma conta para todo o
                ecossistema Analit.
              </h1>

              <p>
                Centralize seu acesso às
                plataformas científicas e
                mantenha sua experiência
                integrada entre as ferramentas.
              </p>
            </div>

            <div className={styles.steps}>
              <div
                className={`${styles.step} ${
                  etapa === 1
                    ? styles.stepActive
                    : styles.stepDone
                }`}
              >
                <span>
                  {etapa === 1
                    ? "1"
                    : "✓"}
                </span>

                <div>
                  <strong>
                    Conta
                  </strong>

                  <small>
                    Identificação e acesso
                  </small>
                </div>
              </div>

              <div
                className={`${styles.step} ${
                  etapa === 2
                    ? styles.stepActive
                    : ""
                }`}
              >
                <span>2</span>

                <div>
                  <strong>
                    Perfil
                  </strong>

                  <small>
                    Contexto acadêmico e
                    profissional
                  </small>
                </div>
              </div>
            </div>
          </div>

          <p
            className={
              styles.sidebarFooter
            }
          >
            As informações solicitadas serão
            utilizadas para personalização,
            análise agregada de uso e
            aprimoramento das plataformas.
          </p>
        </aside>


        <section
          className={
            styles.formCard
          }
        >
          <header
            className={
              styles.formHeader
            }
          >
            <span
              className={
                styles.eyebrow
              }
            >
              Etapa {etapa} de 2
            </span>

            <h2>
              {etapa === 1
                ? "Crie sua conta"
                : "Complete seu perfil"}
            </h2>

            <p>
              {etapa === 1
                ? "Informe seus dados de identificação e defina suas credenciais de acesso."
                : "Estas informações nos ajudam a compreender o perfil de uso das plataformas e aprimorar o ecossistema Analit."}
            </p>

            <div
              className={
                styles.progress
              }
            >
              <span
                style={{
                  width:
                    etapa === 1
                      ? "50%"
                      : "100%",
                }}
              />
            </div>
          </header>


          {etapa === 1 ? (
            <div
              className={
                styles.formBody
              }
            >
              <div
                className={
                  styles.sectionTitle
                }
              >
                <span>
                  Identificação
                </span>

                <h3>
                  Dados da conta
                </h3>
              </div>

              <div
                className={
                  styles.grid
                }
              >
                <label
                  className={
                    styles.fieldFull
                  }
                >
                  <span>
                    Nome completo
                  </span>

                  <input
                    value={
                      dados.fullName
                    }
                    onChange={(event) =>
                      atualizar(
                        "fullName",
                        event.target.value
                      )
                    }
                    placeholder="Informe seu nome completo"
                  />

                  {erros.fullName && (
                    <small
                      className={
                        styles.error
                      }
                    >
                      {erros.fullName}
                    </small>
                  )}
                </label>


                <label
                  className={
                    styles.fieldFull
                  }
                >
                  <span>
                    E-mail
                  </span>

                  <input
                    type="email"
                    value={dados.email}
                    onChange={(event) =>
                      atualizar(
                        "email",
                        event.target.value
                      )
                    }
                    placeholder="nome@instituicao.com"
                  />

                  {erros.email && (
                    <small
                      className={
                        styles.error
                      }
                    >
                      {erros.email}
                    </small>
                  )}
                </label>


                <label>
                  <span>
                    Senha
                  </span>

                  <div
                    className={
                      styles.passwordField
                    }
                  >
                    <input
                      type={
                        mostrarSenha
                          ? "text"
                          : "password"
                      }
                      value={
                        dados.password
                      }
                      onChange={(event) =>
                        atualizar(
                          "password",
                          event.target.value
                        )
                      }
                      placeholder="Mínimo de 8 caracteres"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setMostrarSenha(
                          (valor) =>
                            !valor
                        )
                      }
                    >
                      {mostrarSenha
                        ? "Ocultar"
                        : "Mostrar"}
                    </button>
                  </div>

                  {erros.password && (
                    <small
                      className={
                        styles.error
                      }
                    >
                      {erros.password}
                    </small>
                  )}
                </label>


                <label>
                  <span>
                    Confirmar senha
                  </span>

                  <div
                    className={
                      styles.passwordField
                    }
                  >
                    <input
                      type={
                        mostrarConfirmacao
                          ? "text"
                          : "password"
                      }
                      value={
                        dados.confirmPassword
                      }
                      onChange={(event) =>
                        atualizar(
                          "confirmPassword",
                          event.target.value
                        )
                      }
                      placeholder="Repita sua senha"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setMostrarConfirmacao(
                          (valor) =>
                            !valor
                        )
                      }
                    >
                      {mostrarConfirmacao
                        ? "Ocultar"
                        : "Mostrar"}
                    </button>
                  </div>

                  {erros.confirmPassword && (
                    <small
                      className={
                        styles.error
                      }
                    >
                      {erros.confirmPassword}
                    </small>
                  )}
                </label>
              </div>


              <div
                className={
                  styles.infoBox
                }
              >
                <strong>
                  Próxima etapa
                </strong>

                <p>
                  Em seguida, serão solicitadas
                  informações acadêmicas ou
                  profissionais para completar
                  seu perfil.
                </p>
              </div>


              <footer
                className={
                  styles.actionsEnd
                }
              >
                <button
                  type="button"
                  className={
                    styles.primaryButton
                  }
                  onClick={avancar}
                >
                  Continuar →
                </button>
              </footer>
            </div>
          ) : (
            <form
              onSubmit={finalizar}
              className={
                styles.formBody
              }
            >
              <div
                className={
                  styles.sectionTitle
                }
              >
                <span>
                  Perfil institucional
                </span>

                <h3>
                  Informações de formação e
                  atuação
                </h3>
              </div>


              <div
                className={
                  styles.grid
                }
              >
                <label
                  className={
                    styles.fieldFull
                  }
                >
                  <span>
                    Instituição de vínculo
                  </span>

                  <input
                    value={
                      dados.institution
                    }
                    onChange={(event) =>
                      atualizar(
                        "institution",
                        event.target.value
                      )
                    }
                    placeholder="Ex.: Universidade Federal de Minas Gerais"
                  />

                  {erros.institution && (
                    <small
                      className={
                        styles.error
                      }
                    >
                      {erros.institution}
                    </small>
                  )}
                </label>


                <label>
                  <span>
                    Perfil de atuação
                  </span>

                  <select
                    value={
                      dados.profileType
                    }
                    onChange={(event) =>
                      alterarPerfil(
                        event.target
                          .value as
                          PerfilAtuacao | ""
                      )
                    }
                  >
                    <option value="">
                      Selecione...
                    </option>

                    {PERFIS_ATUACAO.map(
                      (opcao) => (
                        <option
                          key={
                            opcao.value
                          }
                          value={
                            opcao.value
                          }
                        >
                          {opcao.label[language]}
                        </option>
                      )
                    )}
                  </select>

                  {erros.profileType && (
                    <small
                      className={
                        styles.error
                      }
                    >
                      {erros.profileType}
                    </small>
                  )}
                </label>


                <label>
                  <span>
                    Área de formação ou atuação
                  </span>

                  <select
                    value={
                      dados.areaCode
                    }
                    onChange={(event) =>
                      atualizar(
                        "areaCode",
                        event.target.value
                      )
                    }
                  >
                    <option value="">
                      Selecione...
                    </option>

                    {AREAS.map(
                      (opcao) => (
                        <option
                          key={
                            opcao.value
                          }
                          value={
                            opcao.value
                          }
                        >
                          {opcao.label[language]}
                        </option>
                      )
                    )}
                  </select>

                  {erros.areaCode && (
                    <small
                      className={
                        styles.error
                      }
                    >
                      {erros.areaCode}
                    </small>
                  )}
                </label>


                {dados.profileType ===
                  "other" && (
                  <label>
                    <span>
                      Especifique seu perfil
                    </span>

                    <input
                      value={
                        dados.profileTypeOther
                      }
                      onChange={(event) =>
                        atualizar(
                          "profileTypeOther",
                          event.target.value
                        )
                      }
                    />
                  </label>
                )}


                {dados.areaCode ===
                  "other" && (
                  <label>
                    <span>
                      Especifique sua área
                    </span>

                    <input
                      value={
                        dados.areaOther
                      }
                      onChange={(event) =>
                        atualizar(
                          "areaOther",
                          event.target.value
                        )
                      }
                    />
                  </label>
                )}


                {rotuloNivel && (
                  <label>
                    <span>
                      {rotuloNivel}
                    </span>

                    <select
                      value={
                        usaExperienciaProfissional(
                          dados.profileType
                        )
                          ? dados
                              .professionalExperienceRange
                          : dados
                              .academicLevel
                      }
                      onChange={(event) => {
                        if (
                          usaExperienciaProfissional(
                            dados.profileType
                          )
                        ) {
                          atualizar(
                            "professionalExperienceRange",
                            event.target.value
                          );
                        } else {
                          atualizar(
                            "academicLevel",
                            event.target.value
                          );
                        }
                      }}
                    >
                      <option value="">
                        Selecione...
                      </option>

                      {opcoesNivel.map(
                        (opcao) => (
                          <option
                            key={
                              opcao.value
                            }
                            value={
                              opcao.value
                            }
                          >
                            {opcao.label[language]}
                          </option>
                        )
                      )}
                    </select>
                  </label>
                )}


                <label>
                  <span>
                    Finalidade principal de uso
                  </span>

                  <select
                    value={
                      dados.primaryGoal
                    }
                    onChange={(event) =>
                      atualizar(
                        "primaryGoal",
                        event.target.value
                      )
                    }
                  >
                    <option value="">
                      Selecione...
                    </option>

                    {FINALIDADES.map(
                      (opcao) => (
                        <option
                          key={
                            opcao.value
                          }
                          value={
                            opcao.value
                          }
                        >
                          {opcao.label[language]}
                        </option>
                      )
                    )}
                  </select>
                </label>


                <label>
                  <span>
                    País
                  </span>

                  <select
                    value={
                      dados.countryCode
                    }
                    onChange={(event) => {
                      atualizar(
                        "countryCode",
                        event.target.value
                      );

                      atualizar(
                        "stateCode",
                        ""
                      );
                    }}
                  >
                    {PAISES.map(
                      (opcao) => (
                        <option
                          key={
                            opcao.value
                          }
                          value={
                            opcao.value
                          }
                        >
                          {opcao.label[language]}
                        </option>
                      )
                    )}
                  </select>
                </label>


                {dados.countryCode ===
                  "BR" && (
                  <label>
                    <span>
                      Estado
                    </span>

                    <select
                      value={
                        dados.stateCode
                      }
                      onChange={(event) =>
                        atualizar(
                          "stateCode",
                          event.target.value
                        )
                      }
                    >
                      <option value="">
                        Selecione...
                      </option>

                      {ESTADOS_BRASIL.map(
                        (opcao) => (
                          <option
                            key={
                              opcao.value
                            }
                            value={
                              opcao.value
                            }
                          >
                            {opcao.label[language]}
                          </option>
                        )
                      )}
                    </select>
                  </label>
                )}


                {dados.countryCode ===
                  "ZZ" && (
                  <label>
                    <span>
                      Informe o país
                    </span>

                    <input
                      value={
                        dados.countryOther
                      }
                      onChange={(event) =>
                        atualizar(
                          "countryOther",
                          event.target.value
                        )
                      }
                    />
                  </label>
                )}


                <label
                  className={
                    styles.fieldFull
                  }
                >
                  <span>
                    Como conheceu a plataforma?
                    <small>
                      Opcional
                    </small>
                  </span>

                  <select
                    value={
                      dados.discoverySource
                    }
                    onChange={(event) =>
                      atualizar(
                        "discoverySource",
                        event.target.value
                      )
                    }
                  >
                    <option value="">
                      Prefiro não informar
                    </option>

                    {ORIGENS.map(
                      (opcao) => (
                        <option
                          key={
                            opcao.value
                          }
                          value={
                            opcao.value
                          }
                        >
                          {opcao.label[language]}
                        </option>
                      )
                    )}
                  </select>
                </label>


                {dados.discoverySource ===
                  "other" && (
                  <label
                    className={
                      styles.fieldFull
                    }
                  >
                    <span>
                      Especifique
                    </span>

                    <input
                      value={
                        dados.discoverySourceOther
                      }
                      onChange={(event) =>
                        atualizar(
                          "discoverySourceOther",
                          event.target.value
                        )
                      }
                    />
                  </label>
                )}
              </div>


              <footer
                className={
                  styles.actions
                }
              >
                <button
                  type="button"
                  className={
                    styles.secondaryButton
                  }
                  onClick={() =>
                    setEtapa(1)
                  }
                >
                  ← Voltar
                </button>

                <button
                  type="submit"
                  className={
                    styles.primaryButton
                  }
                >
                  Concluir cadastro
                </button>
              </footer>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}