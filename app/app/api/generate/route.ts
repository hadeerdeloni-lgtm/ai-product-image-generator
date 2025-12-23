import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "No prompt" }, { status: 400 });
    }

    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
        }),
      }
    );

    // 👇 أهم سطرين
    const imageBuffer = await response.arrayBuffer();

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": "image/png",
      },
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Image generation failed" },
      { status: 500 }
    );
  }
}
