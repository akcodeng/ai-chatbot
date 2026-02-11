import { auth } from "@/app/(auth)/auth";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.HUME_API_KEY;
  const secretKey = process.env.HUME_SECRET_KEY;

  if (!apiKey || !secretKey) {
    return Response.json(
      { error: "Hume AI is not configured. Please set HUME_API_KEY and HUME_SECRET_KEY." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.hume.ai/oauth2-cc/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        api_key: apiKey,
        secret_key: secretKey,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return Response.json(
        { error: `Failed to get Hume token: ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json({ accessToken: data.access_token });
  } catch (error) {
    return Response.json(
      { error: `Failed to connect to Hume AI: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}
