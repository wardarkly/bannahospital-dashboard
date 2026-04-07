export async function GET() {
  try {
    if (!process.env.API_BASE_URL) {
      throw new Error("Missing API_BASE_URL");
    }
    const url = `${process.env.API_BASE_URL}/api/v1/dashboard/overview`;
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
      const text = await res.text();
      return Response.json(
        {
          error: "Upstream API error",
          status: res.status,
          details: text,
        },
        { status: res.status },
      );
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error: unknown) {
    console.error("Proxy error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return Response.json(
      {
        error: "Internal Server Error",
        detail: errorMessage,
      },
      { status: 500 },
    );
  }
}
