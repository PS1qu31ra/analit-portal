import { neon } from "@neondatabase/serverless";
import { geolocation } from "@vercel/functions";

export async function GET() {
  try {
    const databaseUrl =
      process.env.DATABASE_URL;

    if (!databaseUrl) {
      return Response.json(
        {
          ok: false,
          error: "DATABASE_URL não configurada.",
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
          now() as server_time,
          current_database() as database_name
      `;

    return Response.json({
      ok: true,
      message: "Analit Portal conectado ao Neon.",
      database: resultado[0],
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