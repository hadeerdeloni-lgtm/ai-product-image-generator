import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "No prompt" }, { status: 400 });
  }

  const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  const imageBuffer = await response.arrayBuffer();
  const base64Image = Buffer.from(imageBuffer).toString("base64");

  return NextResponse.json({
    image: `data:image/png;base64,${base64Image}`,
  });
}
