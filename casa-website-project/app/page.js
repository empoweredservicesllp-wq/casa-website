export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        fontFamily: "Arial",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
     <img
  src="/logo.png"
  alt="CASCA Logo"
  style={{
    width: "300px",
    marginBottom: "30px",
  }}
/> 
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        EMPOWERED SERVICES LLP
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.6",
          color: "#d1d5db",
        }}
      >
        Empowering businesses with smarter customer experiences,
        digital solutions, virtual assistance, dispatch support,
        customer service, and BPO excellence.
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            padding: "15px 30px",
            marginRight: "20px",
            background: "#7c3aed",
            border: "none",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Explore Services
        </button>

        <button
          style={{
            padding: "15px 30px",
            background: "transparent",
            border: "2px solid orange",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Contact Us
        </button>
      </div>
    </main>
  );
}
