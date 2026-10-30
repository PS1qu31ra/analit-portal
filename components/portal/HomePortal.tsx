"use client";

import Link from "next/link";

import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";

import {
  useLanguage,
} from "@/components/i18n/LanguageProvider";

import {
  PLATAFORMAS,
} from "@/lib/portal/plataformas";

import styles from "./HomePortal.module.css";


export default function HomePortal() {
  const {
    language,
    dictionary,
  } = useLanguage();

  const t =
    dictionary.home;


  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link
            href="/"
            className={styles.brand}
          >
            <div className={styles.brandMark}>
              A
            </div>

            <div className={styles.brandText}>
              <strong>
                Analit
              </strong>

              <span>
                {
                  dictionary
                    .common
                    .scientificEcosystem
                }
              </span>
            </div>
          </Link>


          <nav className={styles.nav}>
            <a href="#plataformas">
              {t.navPlatforms}
            </a>

            <a href="#analito">
              Analito
            </a>

            <a href="#ecossistema">
              {t.navEcosystem}
            </a>

            <a href="#acesso">
              {t.navHow}
            </a>
          </nav>


          <div className={styles.headerActions}>
            <LanguageSwitcher />

            <Link
              href="/login"
              className={styles.loginButton}
            >
              {
                dictionary
                  .common
                  .login
              }
            </Link>

            <Link
              href="/cadastro"
              className={styles.signupButton}
            >
              {
                dictionary
                  .common
                  .createAccount
              }
            </Link>
          </div>
        </div>
      </header>


      <section className={styles.hero}>
        <div className={styles.heroShapeOne} />
        <div className={styles.heroShapeTwo} />
        <div className={styles.heroShapeThree} />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span>
                {t.heroBadge}
              </span>

              <i />
            </div>


            <h1>
              {t.heroTitle1}

              <br />

              <span>
                {t.heroTitle2}
              </span>

              <br />

              {t.heroTitle3}
            </h1>


            <p className={styles.heroDescription}>
              {t.heroDescription}
            </p>


            <div className={styles.heroActions}>
              <Link
                href="/cadastro"
                className={styles.primaryButton}
              >
                {t.createMyAccount}

                <span>
                  →
                </span>
              </Link>

              <Link
                href="/login"
                className={styles.secondaryButton}
              >
                {t.alreadyAccount}

                <span>
                  →
                </span>
              </Link>
            </div>


            <div className={styles.heroStats}>
              <div>
                <strong>
                  01
                </strong>

                <span>
                  {t.identity}
                </span>

                <small>
                  {
                    t.identityDescription
                  }
                </small>
              </div>


              <div>
                <strong>
                  02
                </strong>

                <span>
                  {t.platforms}
                </span>

                <small>
                  {
                    t.platformsDescription
                  }
                </small>
              </div>


              <div>
                <strong>
                  ∞
                </strong>

                <span>
                  {t.environment}
                </span>

                <small>
                  {
                    t.possibilitiesDescription
                  }
                </small>
              </div>
            </div>
          </div>


          <div className={styles.heroVisual}>
            <div className={styles.dataCard}>
              <div className={styles.chartIcon}>
                <span />
                <span />
                <span />
              </div>

              <p>
                {language === "pt-BR"
                  ? "Dos dados à descoberta."
                  : "From data to discovery."}
              </p>

              <div className={styles.miniCurve} />
            </div>


            <div className={styles.flaskCard}>
              ⚗
            </div>


            <div className={styles.molecule}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>


            <div className={styles.laptop}>
              <div className={styles.laptopScreen}>
                <div className={styles.mockSidebar}>
                  <div className={styles.mockBrand}>
                    A
                  </div>

                  <span className={styles.mockActive}>
                    ◆
                  </span>

                  <span>
                    ◇
                  </span>

                  <span>
                    ◫
                  </span>

                  <span>
                    ⚙
                  </span>
                </div>


                <div className={styles.mockMain}>
                  <div className={styles.mockTopbar}>
                    <div>
                      <small>
                        Analit Portal
                      </small>

                      <strong>
                        {language === "pt-BR"
                          ? "Bem-vindo de volta!"
                          : "Welcome back!"}
                      </strong>
                    </div>

                    <div className={styles.mockAvatar}>
                      A
                    </div>
                  </div>


                  <div className={styles.mockSearch}>
                    {language === "pt-BR"
                      ? "Pesquisar ferramentas..."
                      : "Search tools..."}
                  </div>


                  <div className={styles.mockApps}>
                    <div className={styles.mockApp}>
                      <div>
                        AC
                      </div>

                      <strong>
                        AnalitCalc
                      </strong>

                      <span>
                        {
                          dictionary
                            .common
                            .available
                        }
                      </span>
                    </div>


                    <div className={styles.mockApp}>
                      <div>
                        VI
                      </div>

                      <strong>
                        Visualizer
                      </strong>

                      <span>
                        {
                          dictionary
                            .common
                            .development
                        }
                      </span>
                    </div>
                  </div>


                  <div className={styles.mockActivity}>
                    <strong>
                      {language === "pt-BR"
                        ? "Atividade recente"
                        : "Recent activity"}
                    </strong>

                    <div>
                      <span>
                        ∿
                      </span>

                      <p>
                        {language === "pt-BR"
                          ? "Curva analítica"
                          : "Analytical curve"}
                      </p>

                      <small>
                        AnalitCalc
                      </small>
                    </div>

                    <div>
                      <span>
                        ◉
                      </span>

                      <p>
                        {language === "pt-BR"
                          ? "Visualização de resultados"
                          : "Results visualization"}
                      </p>

                      <small>
                        Visualizer
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.laptopBase} />
            </div>


            <div className={styles.scienceCard}>
              <div className={styles.scienceStructure}>
                <span />
                <span />
                <span />
                <span />
              </div>

              <p>
                {language === "pt-BR"
                  ? "Conhecimento sem limites."
                  : "Knowledge without limits."}
              </p>
            </div>


            <div className={styles.analitoBubble}>
              <div className={styles.analitoIcon}>
                AI
              </div>

              <div>
                <span>
                  ANALITO
                </span>

                <strong>
                  {
                    t.assistantMessage
                  }
                </strong>
              </div>

              <button
                type="button"
                aria-label="Analito"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>


      <section
        id="plataformas"
        className={
          styles.platformSection
        }
      >
        <div
          className={
            styles.sectionContainer
          }
        >
          <header
            className={
              styles.platformHeader
            }
          >
            <span>
              {t.platformEyebrow}
            </span>

            <h2>
              {language === "pt-BR" ? (
                <>
                  Ferramentas poderosas.{" "}
                  <em>
                    Um ecossistema conectado.
                  </em>
                </>
              ) : (
                <>
                  Powerful tools.{" "}
                  <em>
                    A connected ecosystem.
                  </em>
                </>
              )}
            </h2>

            <p>
              {
                t.platformDescription
              }
            </p>
          </header>


          <div
            className={
              styles.platformGrid
            }
          >
            {PLATAFORMAS.map(
              (
                plataforma,
                index
              ) => {
                const disponivel =
                  plataforma.status ===
                  "available";


                return (
                  <article
                    key={
                      plataforma.id
                    }
                    className={
                      styles.platformCard
                    }
                  >
                    <div
                      className={
                        styles.platformContent
                      }
                    >
                      <div
                        className={
                          styles.platformTitleRow
                        }
                      >
                        <div
                          className={
                            styles.platformIcon
                          }
                        >
                          {index === 0
                            ? "∑"
                            : "◉"}
                        </div>

                        <div>
                          <h3>
                            {
                              plataforma.name
                            }
                          </h3>

                          <span>
                            {
                              plataforma
                                .category[
                                language
                              ]
                            }
                          </span>
                        </div>
                      </div>


                      <p>
                        {
                          plataforma
                            .description[
                            language
                          ]
                        }
                      </p>


                      <div
                        className={
                          styles.featureList
                        }
                      >
                        {
                          plataforma.features.map(
                            (
                              feature
                            ) => (
                              <span
                                key={
                                  feature[
                                    language
                                  ]
                                }
                              >
                                <i>
                                  ✓
                                </i>

                                {
                                  feature[
                                    language
                                  ]
                                }
                              </span>
                            )
                          )
                        }
                      </div>


                      <div
                        className={
                          styles.platformFooter
                        }
                      >
                        {disponivel &&
                        plataforma.href ? (
                          <Link
                            href={
                              plataforma.href
                            }
                          >
                            <span>
                              →
                            </span>

                            {
                              t.accessPortal
                            }
                          </Link>
                        ) : (
                          <div
                            className={
                              styles.comingSoon
                            }
                          >
                            {
                              dictionary
                                .common
                                .comingSoon
                            }
                          </div>
                        )}
                      </div>
                    </div>


                    <div
                      className={`${styles.platformArtwork} ${
                        index === 0
                          ? styles.calcArtwork
                          : styles.visualizerArtwork
                      }`}
                    >
                      {index === 0 ? (
                        <>
                          <span>
                            ∫ f(x) dx
                          </span>

                          <div
                            className={
                              styles.formula
                            }
                          >
                            σ² =
                            Σ(x−x̄)²/n
                          </div>

                          <div
                            className={
                              styles.curve
                            }
                          />
                        </>
                      ) : (
                        <>
                          <div
                            className={
                              styles.visualDots
                            }
                          >
                            {Array.from({
                              length: 18,
                            }).map(
                              (_, i) => (
                                <i
                                  key={
                                    i
                                  }
                                />
                              )
                            )}
                          </div>

                          <div
                            className={
                              styles.visualBars
                            }
                          >
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
                        </>
                      )}
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>


      <section
        id="analito"
        className={
          styles.analitoSection
        }
      >
        <div
          className={
            styles.sectionContainer
          }
        >
          <div
            className={
              styles.analitoPanel
            }
          >
            <div
              className={
                styles.analitoContent
              }
            >
              <span
                className={
                  styles.sectionLabel
                }
              >
                {
                  t.assistantEyebrow
                }
              </span>

              <h2>
                {t.assistantTitle}
              </h2>

              <p>
                {
                  t.assistantDescription
                }
              </p>


              <div
                className={
                  styles.assistantFeatures
                }
              >
                <span>
                  <i>✓</i>

                  {
                    t.assistantFeature1
                  }
                </span>

                <span>
                  <i>✓</i>

                  {
                    t.assistantFeature2
                  }
                </span>

                <span>
                  <i>✓</i>

                  {
                    t.assistantFeature3
                  }
                </span>
              </div>
            </div>


            <div
              className={
                styles.assistantDemo
              }
            >
              <div
                className={
                  styles.assistantHeader
                }
              >
                <div
                  className={
                    styles.assistantAvatar
                  }
                >
                  AI
                </div>

                <div>
                  <strong>
                    Analito
                  </strong>

                  <span>
                    {
                      language ===
                      "pt-BR"
                        ? "Assistente científico"
                        : "Scientific assistant"
                    }
                  </span>
                </div>

                <i />
              </div>


              <div
                className={
                  styles.assistantContext
                }
              >
                <span>
                  AnalitCalc
                </span>

                <small>
                  {
                    language ===
                    "pt-BR"
                      ? "Contexto atual"
                      : "Current context"
                  }
                </small>
              </div>


              <div
                className={
                  styles.assistantMessage
                }
              >
                {
                  t.assistantMessage
                }
              </div>


              <div
                className={
                  styles.assistantInput
                }
              >
                <span>
                  {
                    language ===
                    "pt-BR"
                      ? "Pergunte ao Analito..."
                      : "Ask Analito..."
                  }
                </span>

                <button
                  type="button"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="ecossistema"
        className={
          styles.ecosystemSection
        }
      >
        <div
          className={
            styles.sectionContainer
          }
        >
          <div
            className={
              styles.ecosystemGrid
            }
          >
            <div>
              <span
                className={
                  styles.sectionLabel
                }
              >
                {
                  t.ecosystemEyebrow
                }
              </span>

              <h2>
                {
                  t.ecosystemTitle
                }
              </h2>
            </div>

            <p>
              {
                t.ecosystemDescription
              }
            </p>
          </div>
        </div>
      </section>


      <section
        id="acesso"
        className={styles.ctaSection}
      >
        <div className={styles.cta}>
          <div>
            <span>
              ANALIT
            </span>

            <h2>
              {t.ctaTitle}
            </h2>

            <p>
              {t.ctaDescription}
            </p>
          </div>


          <div className={styles.ctaActions}>
            <Link
              href="/cadastro"
              className={styles.ctaPrimary}
            >
              {
                dictionary
                  .common
                  .createAccount
              }

              <span>
                →
              </span>
            </Link>

            <Link
              href="/login"
              className={styles.ctaSecondary}
            >
              {
                dictionary
                  .common
                  .login
              }
            </Link>
          </div>
        </div>
      </section>


      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerMark}>
              A
            </div>

            <div>
              <strong>
                Analit
              </strong>

              <span>
                {
                  dictionary
                    .common
                    .scientificEcosystem
                }
              </span>
            </div>
          </div>

          <p>
            {t.footer}
          </p>
        </div>
      </footer>
    </main>
  );
}