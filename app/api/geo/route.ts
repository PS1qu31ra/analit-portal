export const dynamic =
  "force-dynamic";

export async function GET(
  request: Request
) {
  if (
    process.env.NODE_ENV !==
    "production"
  ) {
    return Response.json({
      ok: true,
      environment:
        process.env.NODE_ENV,
      country: null,
      message:
        "Geolocalização disponível apenas em produção.",
    });
  }

  const country =
    request.headers.get(
      "x-vercel-ip-country"
    );

  const region =
    request.headers.get(
      "x-vercel-ip-country-region"
    );

  const city =
    request.headers.get(
      "x-vercel-ip-city"
    );

  const vercelId =
    request.headers.get(
      "x-vercel-id"
    );

  return Response.json({
    ok: true,
    environment:
      process.env.NODE_ENV,
    country,
    region,
    city,
    vercelId,
  });
}