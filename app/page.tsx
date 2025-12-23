"use client"
import { useState } from "react"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const generateImage = async () => {
    setLoading(true)
    setImage(null)

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    })

    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    setImage(url)
    setLoading(false)
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>AI Product Image Generator</h1>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your product"
        style={{ width: "100%", padding: 10 }}
      />

      <button onClick={generateImage} style={{ marginTop: 10 }}>
        Generate Image
      </button>

      {loading && <p>Loading...</p>}

      {image && (
        <img
          src={image}
          alt="Generated"
          style={{ marginTop: 20, maxWidth: "100%" }}
        />
      )}
    </main>
  )
}
