export const dynamic = "force-dynamic";

export async function POST() {
  return Response.json({
    ok: true,
    skipped: true,
    reason: "analytics_disabled_until_launch",
  });
}