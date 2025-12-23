"use client"
import { useState } from "react"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  async function generateImage() {
    setLoading(true)
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    })

    const data = await res.json()
    setImage(data.image)
    setLoading(false)
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>AI Product Image Generator</h1>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your product"
        style={{ width: "100%", padding: 12 }}
      />

      <button onClick={generateImage} style={{ marginTop: 12 }}>
        {loading ? "Loading..." : "Generate Image"}
      </button>

      {image && <img src={image} style={{ marginTop: 20, width: "100%" }} />}
    </main>
  )
}
