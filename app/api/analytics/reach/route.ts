import {
  neon,
} from "@neondatabase/serverless";


export const dynamic =
  "force-dynamic";


export async function GET() {
  try {
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


    const sql =
      neon(databaseUrl);


    const resultado =
      await sql`
        with legacy as (

          select
            lower(
              dimension_value
            ) as country,

            sum(
              visitors
            )::int as value

          from
            public.analytics_legacy

          where
            dimension_type =
              'country'

            and data_source =
              'legacy_spreadsheet'

            and length(
              dimension_value
            ) = 2

          group by
            lower(
              dimension_value
            )
        ),


        live as (

          select
            lower(
              metadata
                ->> 'country_code'
            ) as country,

            count(
              distinct
              metadata
                ->> 'visitor_id'
            )::int as value

          from
            public.access_events ae

          inner join
            public.apps a

            on a.id =
              ae.app_id

          where
            a.slug =
              'analitcalc'

            and ae.event_type =
              'app_opened'

            and ae.metadata
              ->> 'tracking_source'
              =
              'portal_v2'

            and ae.metadata ?
              'visitor_id'

            and ae.metadata ?
              'country_code'

            and length(
              ae.metadata
                ->> 'country_code'
            ) = 2

            /*
             * Corte oficial:
             *
             * legado até 30/10/2026
             * novo analytics desde 31/10/2026
             */
            and ae.created_at >=
              timestamptz
              '2026-10-31 03:00:00+00'

          group by
            lower(
              ae.metadata
                ->> 'country_code'
            )
        ),


        combined as (

          select
            country,

            sum(
              value
            )::int as value

          from (

            select
              country,
              value
            from legacy

            union all

            select
              country,
              value
            from live

          ) data

          group by
            country
        )


        select
          country,
          value

        from combined

        order by
          value desc
      `;


    return Response.json({
      ok: true,

      countries:
        resultado,
    });
  } catch (error) {
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