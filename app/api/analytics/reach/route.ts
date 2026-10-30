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
          select
            lower(
              metadata ->> 'country_code'
            ) as country,
  
            count(*)::int as value
  
          from public.access_events ae
  
          inner join public.apps a
            on a.id = ae.app_id
  
          where
            a.slug = 'analitcalc'
  
            and ae.event_type =
              'app_opened'
  
            and metadata ?
              'country_code'
  
            and length(
              metadata ->>
              'country_code'
            ) = 2
  
          group by
            lower(
              metadata ->>
              'country_code'
            )
  
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