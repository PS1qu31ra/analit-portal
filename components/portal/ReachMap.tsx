"use client";

import {
  CSSProperties,
  useEffect,
  useMemo,
  useState,
} from "react";

import WorldMap from "react-svg-worldmap";

import type {
  CountryContext,
  ISOCode,
} from "react-svg-worldmap";

import type {
  Language,
} from "@/lib/i18n/translations";

import {
  HOME_COPY,
} from "@/lib/portal/home-copy";

import styles from "./HomePortal.module.css";


type CountryData = {
  country: ISOCode;
  value: number;
};


type ReachResponse = {
  ok: boolean;

  countries?: {
    country: string;
    value: number;
  }[];
};


export default function ReachMap({
  language,
}: {
  language: Language;
}) {
  const t =
    HOME_COPY[language];

  const [
    data,
    setData,
  ] =
    useState<CountryData[]>([]);

  const [
    loading,
    setLoading,
  ] =
    useState(true);


  useEffect(() => {
    let ativo = true;


    async function carregar() {
      try {
        const response =
          await fetch(
            "/api/analytics/reach",
            {
              cache: "no-store",
            }
          );


        const result =
          (await response.json()) as ReachResponse;


        if (
          ativo &&
          result.ok &&
          result.countries
        ) {
          const countries =
            result.countries
              .filter(
                (item) =>
                  item.country.length === 2
              )
              .map(
                (item) => ({
                  country:
                    item.country
                      .toLowerCase() as ISOCode,

                  value:
                    Number(item.value),
                })
              );


          setData(countries);
        }
      } catch {
        if (ativo) {
          setData([]);
        }
      } finally {
        if (ativo) {
          setLoading(false);
        }
      }
    }


    carregar();


    return () => {
      ativo = false;
    };
  }, []);


  const totalAccesses =
    useMemo(
      () =>
        data.reduce(
          (
            total,
            item
          ) =>
            total +
            item.value,
          0
        ),
      [data]
    );


  function styleFunction({
    countryValue,
  }: CountryContext):
    CSSProperties {
    const reached =
      countryValue !==
      undefined;


    return {
      fill:
        reached
          ? "#b11218"
          : "#d8d8d8",

      fillOpacity: 1,

      stroke: "#ffffff",

      strokeWidth: 0.7,

      strokeOpacity: 1,

      cursor:
        reached
          ? "pointer"
          : "default",

      transition:
        "fill 160ms ease",
    };
  }


  return (
    <div className={styles.mapCard}>
      <div className={styles.mapHeader}>
        <div className={styles.mapStats}>
          <div className={styles.mapStat}>
            <strong>
              {data.length}
            </strong>

            <span>
              {t.countries}
            </span>
          </div>

          <div className={styles.mapStat}>
            <strong>
              {totalAccesses}
            </strong>

            <span>
              {t.accesses}
            </span>
          </div>
        </div>


        <div className={styles.mapLegend}>
          <span>
            <i
              className={
                styles.legendReached
              }
            />

            {language === "pt-BR"
              ? "Com acessos"
              : "Reached"}
          </span>

          <span>
            <i
              className={
                styles.legendPending
              }
            />

            {language === "pt-BR"
              ? "Sem registro"
              : "No records"}
          </span>
        </div>
      </div>


      <div className={styles.mapCanvas}>
        <WorldMap
          data={data}
          size="responsive"
          color="#b11218"
          backgroundColor="transparent"
          borderColor="#ffffff"
          frame={false}
          title={t.mapTitle}
          styleFunction={styleFunction}
          valueSuffix={
            language === "pt-BR"
              ? " acessos"
              : " accesses"
          }
        />
      </div>


      {!loading &&
        data.length === 0 && (
          <div className={styles.mapEmpty}>
            <span>◎</span>

            <div>
              <strong>
                {language === "pt-BR"
                  ? "Mapa aguardando os primeiros registros"
                  : "Map waiting for the first records"}
              </strong>

              <p>
                {language === "pt-BR"
                  ? "Assim que houver acessos geográficos registrados, os países alcançados aparecerão destacados em vermelho."
                  : "As soon as geographic access records are available, reached countries will be highlighted in red."}
              </p>
            </div>
          </div>
        )}


      {loading && (
        <p className={styles.mapStatus}>
          {t.loading}
        </p>
      )}
    </div>
  );
}