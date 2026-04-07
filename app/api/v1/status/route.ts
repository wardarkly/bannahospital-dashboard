export async function GET() {
  const startedAt = Date.now();

  try {
    if (!process.env.API_BASE_URL) {
      throw new Error("Missing API_BASE_URL");
    }

    const url = `${process.env.API_BASE_URL}/api/v1/dashboard/status`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return Response.json(
        {
          online: false,
          status: res.status,
          latencyMs: Date.now() - startedAt,
        },
        { status: 200 },
      );
    }

    return Response.json({
      online: true,
      status: res.status,
      latencyMs: Date.now() - startedAt,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      {
        online: false,
        status: 500,
        latencyMs: Date.now() - startedAt,
        detail: message,
      },
      { status: 200 },
    );
  }
}
