export default function Home() {
  return (
    <main
      style={{
        background: "#070014",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          position: "sticky",
          top: 0,
          background: "#070014",
          zIndex: 1000,
        }}
      >
        <img
          src="/logo.png"
          alt="CASCA Logo"
          style={{
            width: "160px",
            objectFit: "contain",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "35px",
            fontSize: "16px",
          }}
        >
          <span>Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Industries</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>

        <button
          style={{
            background: "transparent",
            border: "1px solid orange",
            color: "white",
            padding: "12px 24px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          +91 9679897979
        </button>
      </nav>

      {/* HERO SECTION */}

      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 80px",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE */}

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "inline-block",
              background: "#2b0a52",
              padding: "10px 20px",
              borderRadius: "30px",
              marginBottom: "25px",
              color: "#caa6ff",
              fontSize: "14px",
            }}
          >
            GLOBAL OUTSOURCING. EXCEPTIONAL RESULTS.
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.1",
              marginBottom: "30px",
              fontWeight: "bold",
            }}
          >
            Empowering Businesses <br />
            to{" "}
            <span style={{ color: "#ff7b00" }}>
              Grow, Scale & Succeed
            </span>
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#cfcfcf",
              maxWidth: "700px",
              marginBottom: "40px",
            }}
          >
            Empowered Services LLP delivers customer support,
            virtual assistance, dispatch support, medical billing,
            and BPO solutions for global businesses.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <button
              style={{
                background: "linear-gradient(90deg,#7b2ff7,#9b4dff)",
                color: "white",
                padding: "18px 35px",
                borderRadius: "14px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Explore Services
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                padding: "18px 35px",
                borderRadius: "14px",
                border: "1px solid orange",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div style={{ flex: 1, textAlign: "center" }}>
         <img
  src="/hero-image.png"
  alt="CASCA Hero"
  style={{
    width: "700px",
              maxWidth: "100%",
              objectFit: "contain",
              filter: "drop-shadow(0px 0px 30px #7b2ff7)",
            }}
          />
        </div>
      </section>
    </main>
  );
}
