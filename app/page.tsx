export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Product Image Generator</h1>
      <p>
        Generate professional product images for e-commerce and ads using AI.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Describe your product (e.g. luxury watch on white background)"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px"
          }}
        />

        <select style={{ width: "100%", padding: "12px", marginBottom: "12px" }}>
          <option>White Background</option>
          <option>Luxury</option>
          <option>Studio</option>
          <option>Lifestyle</option>
        </select>

        <button
          style={{
            padding: "12px 20px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Generate Image
        </button>
      </div>
    </main>
  );
                        }
