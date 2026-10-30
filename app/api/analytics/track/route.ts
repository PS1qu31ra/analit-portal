import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";

type TrackingBody = {
  visitorId?: string;
  sessionId?: string;
  page?: string;
  device?: string;
  source?: string;
  language?: string;
  timezone?: string;
};

function limitar(
  valor: unknown,
  maximo: number
) {
  if (typeof valor !== "string") {
    return null;
  }

  return valor
    .trim()
    .slice(0, maximo);
}

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as TrackingBody;

    const visitorId =
      limitar(
        body.visitorId,
        100
      );

    const sessionId =
      limitar(
        body.sessionId,
        100
      );

    if (
      !visitorId ||
      !sessionId
    ) {
      return Response.json(
        {
          ok: false,
          error:
            "Identificação de analytics inválida.",
        },
        {
          status: 400,
        }
      );
    }

    const page =
      limitar(
        body.page,
        500
      ) || "/";

    const device =
      limitar(
        body.device,
        30
      ) || "unknown";

    const source =
      limitar(
        body.source,
        200
      ) || "direct";

    const language =
      limitar(
        body.language,
        40
      );

    const timezone =
      limitar(
        body.timezone,
        100
      );

    /*
     * STACKBLITZ / DESENVOLVIMENTO
     *
     * Não tenta acessar o Neon.
     */
    if (
      process.env.VERCEL !== "1"
    ) {
      return Response.json({
        ok: true,
        skipped: true,
        environment:
          "development",
      });
    }

    /*
     * PRODUÇÃO / VERCEL
     */

    const databaseUrl =
      process.env.DATABASE_URL;

    if (!databaseUrl) {
      return Response.json(
        {
          ok: false,
          error:
            "DATABASE_URL não configurada.",
        },
        {
          status: 500,
        }
      );
    }

    const rawCountry =
      request.headers.get(
        "x-vercel-ip-country"
      );

    const normalizedCountry =
      rawCountry
        ?.trim()
        .toUpperCase();

    const countryCode =
      normalizedCountry &&
      /^[A-Z]{2}$/.test(
        normalizedCountry
      )
        ? normalizedCountry
        : null;

    const metadata = {
      tracking_source:
        "portal_v2",

      visitor_id:
        visitorId,

      browser_session_id:
        sessionId,

      country_code:
        countryCode,

      device,

      source,

      language,

      timezone,
    };

    const metadataJson =
      JSON.stringify(
        metadata
      );

    const sql =
      neon(
        databaseUrl
      );

    const apps =
      (await sql`
        select id

        from public.apps

        where slug =
          'analitcalc'

        limit 1
      `) as {
        id: string;
      }[];

    const appId =
      apps[0]?.id;

    if (!appId) {
      return Response.json(
        {
          ok: false,
          error:
            "AnalitCalc não encontrado.",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * VISITANTE ÚNICO
     */
    await sql`
      insert into
        public.access_events (
          app_id,
          event_type,
          module,
          system_name,
          page,
          metadata
        )

      values (
        ${appId}::uuid,
        'app_opened',
        'portal',
        'analitcalc',
        ${page},
        ${metadataJson}::jsonb
      )

      on conflict
      do nothing
    `;

    /*
     * PAGE VIEW
     */
    await sql`
      insert into
        public.access_events (
          app_id,
          event_type,
          module,
          system_name,
          page,
          metadata
        )

      values (
        ${appId}::uuid,
        'page_view',
        'portal',
        'analitcalc',
        ${page},
        ${metadataJson}::jsonb
      )
    `;

    return Response.json({
      ok: true,
      skipped: false,
      environment:
        "production",
    });
  } catch (error) {
    console.error(
      "[analytics/track]",
      error
    );

    return Response.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Erro desconhecido.",
      },
      {
        status: 500,
      }
    );
  }
}