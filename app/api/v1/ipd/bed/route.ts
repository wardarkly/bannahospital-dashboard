export async function GET(req: Request) {
  try {
    const url = `${process.env.API_BASE_URL}/api/v1/ipd/bed`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

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
  } catch (error: any) {
    console.error("Proxy error:", error);

    return Response.json(
      {
        error: "Internal Server Error",
        detail: error.message,
      },
      { status: 500 },
    );
  }
}
