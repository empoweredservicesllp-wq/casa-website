export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        fontFamily: "Arial",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "1000px",
        }}
      >
        <img
          src="/logo.png"
          alt="CASCA Logo"
          style={{
            width: "260px",
            marginBottom: "30px",
          }}
        />

        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          EMPOWERED SERVICES LLP
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.7",
            color: "#d1d5db",
            marginBottom: "40px",
          }}
        >
          Empowering businesses with smarter customer experiences,
          digital solutions, virtual assistance, dispatch support,
          customer service, and BPO excellence.
        </p>

        <div>
          <button
            style={{
              padding: "15px 35px",
              marginRight: "20px",
              background: "#7c3aed",
              border: "none",
              color: "white",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Explore Services
          </button>

          <button
            style={{
              padding: "15px 35px",
              background: "transparent",
              border: "2px solid orange",
              color: "white",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
}
