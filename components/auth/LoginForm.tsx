"use client";

import Link from "next/link";

import {
  FormEvent,
  useState,
} from "react";

import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";

import {
  useLanguage,
} from "@/components/i18n/LanguageProvider";

import styles from "./Login.module.css";


type LoginErros = {
  email?: string;
  password?: string;
};


export default function LoginForm() {
  const {
    dictionary,
  } = useLanguage();

  const t =
    dictionary.login;


  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    mostrarSenha,
    setMostrarSenha,
  ] = useState(false);

  const [
    erros,
    setErros,
  ] =
    useState<LoginErros>({});

  const [
    mensagem,
    setMensagem,
  ] = useState("");


  function validar() {
    const novosErros:
      LoginErros = {};


    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email.trim()
      )
    ) {
      novosErros.email =
        t.invalidEmail;
    }


    if (!password) {
      novosErros.password =
        t.passwordRequired;
    }


    return novosErros;
  }


  function entrar(
    event:
      FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const encontrados =
      validar();


    if (
      Object.keys(
        encontrados
      ).length > 0
    ) {
      setErros(encontrados);
      setMensagem("");

      return;
    }


    setErros({});

    setMensagem(
      t.temporaryMessage
    );
  }


  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.visualPanel}>
          <Link
            href="/"
            className={styles.brand}
          >
            <div className={styles.brandMark}>
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
          </Link>


          <div className={styles.visualContent}>
            <span className={styles.visualEyebrow}>
              Analit Portal
            </span>

            <h1>
              {t.visualTitle}
            </h1>

            <p>
              {t.visualDescription}
            </p>


            <div className={styles.platformPreview}>
              <div className={styles.platformItem}>
                <div className={styles.platformIcon}>
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

                <div className={styles.availableDot} />
              </div>


              <div className={styles.platformItem}>
                <div className={styles.platformIcon}>
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


              <div className={styles.platformItem}>
                <div className={styles.platformIcon}>
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
          </div>


          <p className={styles.visualFooter}>
            {t.visualFooter}
          </p>
        </section>


        <section className={styles.loginPanel}>
          <div className={styles.loginContainer}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 50,
              }}
            >
              <Link
                href="/"
                className={styles.backLink}
                style={{
                  marginBottom: 0,
                }}
              >
                ← {t.back}
              </Link>

              <LanguageSwitcher />
            </div>


            <div className={styles.loginHeader}>
              <span className={styles.eyebrow}>
                {t.access}
              </span>

              <h2>
                {t.title}
              </h2>

              <p>
                {t.description}
              </p>
            </div>


            <form
              className={styles.form}
              onSubmit={entrar}
            >
              <label className={styles.field}>
                <span>
                  {t.email}
                </span>

                <input
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(
                      event.target.value
                    );

                    setErros(
                      (atual) => ({
                        ...atual,
                        email:
                          undefined,
                      })
                    );

                    setMensagem("");
                  }}
                  placeholder={
                    t.emailPlaceholder
                  }
                />

                {erros.email && (
                  <small className={styles.error}>
                    {erros.email}
                  </small>
                )}
              </label>


              <label className={styles.field}>
                <div className={styles.passwordLabel}>
                  <span>
                    {t.password}
                  </span>

                  <button
                    type="button"
                    className={styles.forgotButton}
                  >
                    {t.forgot}
                  </button>
                </div>

                <div className={styles.passwordInput}>
                  <input
                    type={
                      mostrarSenha
                        ? "text"
                        : "password"
                    }
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => {
                      setPassword(
                        event.target.value
                      );

                      setErros(
                        (atual) => ({
                          ...atual,
                          password:
                            undefined,
                        })
                      );

                      setMensagem("");
                    }}
                    placeholder={
                      t.passwordPlaceholder
                    }
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setMostrarSenha(
                        (atual) =>
                          !atual
                      )
                    }
                  >
                    {mostrarSenha
                      ? t.hide
                      : t.show}
                  </button>
                </div>

                {erros.password && (
                  <small className={styles.error}>
                    {erros.password}
                  </small>
                )}
              </label>


              <label className={styles.rememberRow}>
                <input
                  type="checkbox"
                />

                <span>
                  {t.remember}
                </span>
              </label>


              {mensagem && (
                <div className={styles.infoMessage}>
                  {mensagem}
                </div>
              )}


              <button
                type="submit"
                className={styles.primaryButton}
              >
                {t.enter}
                <span>→</span>
              </button>
            </form>


            <div className={styles.divider}>
              <span>
                {dictionary.common.or}
              </span>
            </div>


            <div className={styles.createAccount}>
              <span>
                {t.noAccount}
              </span>

              <Link href="/cadastro">
                {t.createFree}
              </Link>
            </div>


            <div className={styles.securityNote}>
              <div>
                ◇
              </div>

              <p>
                {t.securityNote}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}