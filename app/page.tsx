"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const generateImage = async () => {
    if (!prompt) return alert("اكتبي وصف للصورة");

    setLoading(true);
    setImage("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setImage(data.image);
    } catch (err) {
      alert("حصل خطأ");
    }

    setLoading(false);
  };

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>AI Product Image Generator</h1>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your product..."
        style={{ width: "100%", padding: 12 }}
      />

      <button
        onClick={generateImage}
        style={{ marginTop: 12, padding: 12 }}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {image && (
        <div style={{ marginTop: 20 }}>
          <img src={image} style={{ maxWidth: "100%" }} />
        </div>
      )}
    </main>
  );
}
