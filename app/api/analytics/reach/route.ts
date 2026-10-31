import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

    const countries =
      await sql`
        select
          lower(
            dimension_value
          ) as country,

          sum(
            visitors
          )::int as value

        from public.analytics_legacy

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

        order by
          value desc
      `;

    return Response.json({
      ok: true,
      countries,
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