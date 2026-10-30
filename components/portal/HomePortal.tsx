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
                {dictionary.common.scientificEcosystem}
              </span>
            </div>
          </Link>


          <nav className={styles.nav}>
            <a href="#plataformas">
              {t.navPlatforms}
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
              {dictionary.common.login}
            </Link>

            <Link
              href="/cadastro"
              className={styles.signupButton}
            >
              {dictionary.common.createAccount}
            </Link>
          </div>
        </div>
      </header>


      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              {t.heroBadge}
            </div>

            <h1>
              {t.heroTitle1}
              <br />

              <span>
                {t.heroTitle2}
              </span>{" "}

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
                <span>→</span>
              </Link>

              <Link
                href="/login"
                className={styles.secondaryButton}
              >
                {t.alreadyAccount}
              </Link>
            </div>

            <div className={styles.heroTrust}>
              <div>
                <strong>01</strong>
                <span>{t.identity}</span>
              </div>

              <div>
                <strong>03</strong>
                <span>{t.platforms}</span>
              </div>

              <div>
                <strong>01</strong>
                <span>{t.environment}</span>
              </div>
            </div>
          </div>


          <div className={styles.portalPreview}>
            <div className={styles.previewGlow} />

            <div className={styles.previewWindow}>
              <div className={styles.previewHeader}>
                <div>
                  <span className={styles.previewLabel}>
                    Analit Portal
                  </span>

                  <strong>
                    {t.previewTitle}
                  </strong>
                </div>

                <div className={styles.avatar}>
                  A
                </div>
              </div>


              <div className={styles.previewWelcome}>
                <span>
                  {t.previewOverview}
                </span>

                <h3>
                  {t.previewPlatforms}
                </h3>

                <p>
                  {t.previewDescription}
                </p>
              </div>


              <div className={styles.previewApps}>
                <div
                  className={`${styles.previewApp} ${styles.previewAppActive}`}
                >
                  <div className={styles.previewAppIcon}>
                    AC
                  </div>

                  <div>
                    <strong>
                      AnalitCalc
                    </strong>

                    <span>
                      {dictionary.common.available}
                    </span>
                  </div>

                  <span className={styles.previewArrow}>
                    →
                  </span>
                </div>


                <div className={styles.previewApp}>
                  <div className={styles.previewAppIcon}>
                    AN
                  </div>

                  <div>
                    <strong>
                      Analito
                    </strong>

                    <span>
                      {dictionary.common.development}
                    </span>
                  </div>
                </div>


                <div className={styles.previewApp}>
                  <div className={styles.previewAppIcon}>
                    MS
                  </div>

                  <div>
                    <strong>
                      MARSYN
                    </strong>

                    <span>
                      {dictionary.common.development}
                    </span>
                  </div>
                </div>
              </div>


              <div className={styles.previewFooter}>
                <span className={styles.statusDot} />

                {t.integrated}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="plataformas"
        className={styles.platformSection}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                {t.platformEyebrow}
              </span>

              <h2>
                {t.platformTitle}
              </h2>
            </div>

            <p>
              {t.platformDescription}
            </p>
          </div>


          <div className={styles.platformGrid}>
            {PLATAFORMAS.map(
              (plataforma) => {
                const disponivel =
                  plataforma.status ===
                  "available";

                return (
                  <article
                    key={plataforma.id}
                    className={styles.platformCard}
                  >
                    <div className={styles.platformTop}>
                      <div className={styles.platformIcon}>
                        {plataforma.name
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>

                      <span
                        className={
                          disponivel
                            ? styles.statusAvailable
                            : styles.statusDevelopment
                        }
                      >
                        <span />

                        {disponivel
                          ? dictionary.common.available
                          : dictionary.common.development}
                      </span>
                    </div>


                    <span className={styles.platformCategory}>
                      {
                        plataforma.category[
                          language
                        ]
                      }
                    </span>

                    <h3>
                      {plataforma.name}
                    </h3>

                    <p>
                      {
                        plataforma.description[
                          language
                        ]
                      }
                    </p>


                    <div className={styles.featureList}>
                      {plataforma.features.map(
                        (feature) => (
                          <span
                            key={
                              feature[
                                language
                              ]
                            }
                          >
                            <i>✓</i>

                            {
                              feature[
                                language
                              ]
                            }
                          </span>
                        )
                      )}
                    </div>


                    <div className={styles.platformFooter}>
                      {disponivel &&
                      plataforma.href ? (
                        <Link
                          href={plataforma.href}
                          className={styles.platformLink}
                        >
                          {t.accessPortal}

                          <span>→</span>
                        </Link>
                      ) : (
                        <span className={styles.platformDisabled}>
                          {dictionary.common.comingSoon}
                        </span>
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
        id="ecossistema"
        className={styles.ecosystemSection}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.ecosystemGrid}>
            <div className={styles.ecosystemContent}>
              <span className={styles.sectionEyebrow}>
                {t.ecosystemEyebrow}
              </span>

              <h2>
                {t.ecosystemTitle}
              </h2>

              <p>
                {t.ecosystemDescription}
              </p>
            </div>


            <div className={styles.ecosystemItems}>
              <div className={styles.ecosystemItem}>
                <span>01</span>

                <div>
                  <strong>
                    {t.identityTitle}
                  </strong>

                  <p>
                    {t.identityDescription}
                  </p>
                </div>
              </div>


              <div className={styles.ecosystemItem}>
                <span>02</span>

                <div>
                  <strong>
                    {t.profileTitle}
                  </strong>

                  <p>
                    {t.profileDescription}
                  </p>
                </div>
              </div>


              <div className={styles.ecosystemItem}>
                <span>03</span>

                <div>
                  <strong>
                    {t.experienceTitle}
                  </strong>

                  <p>
                    {t.experienceDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="acesso"
        className={styles.flowSection}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.flowHeader}>
            <span className={styles.sectionEyebrow}>
              {t.howEyebrow}
            </span>

            <h2>
              {t.howTitle}
            </h2>
          </div>


          <div className={styles.flowGrid}>
            <div className={styles.flowCard}>
              <span>01</span>

              <h3>
                {t.step1}
              </h3>

              <p>
                {t.step1Description}
              </p>
            </div>

            <div className={styles.flowConnector}>
              →
            </div>

            <div className={styles.flowCard}>
              <span>02</span>

              <h3>
                {t.step2}
              </h3>

              <p>
                {t.step2Description}
              </p>
            </div>

            <div className={styles.flowConnector}>
              →
            </div>

            <div className={styles.flowCard}>
              <span>03</span>

              <h3>
                {t.step3}
              </h3>

              <p>
                {t.step3Description}
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.ctaSection}>
        <div className={styles.cta}>
          <div>
            <span>
              ANALIT ECOSYSTEM
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
              {dictionary.common.createAccount}
              <span>→</span>
            </Link>

            <Link
              href="/login"
              className={styles.ctaSecondary}
            >
              {dictionary.common.login}
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
                {dictionary.common.scientificEcosystem}
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