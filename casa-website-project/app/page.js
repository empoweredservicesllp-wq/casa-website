export default function Home() {
  return (
    <main
      style={{
        background: "#070014",
        color: "white",
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
          borderBottom: "1px solid #2a1245",
          position: "sticky",
          top: 0,
          background: "#070014",
          zIndex: 1000,
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: "140px" }}
        />

        <div style={{ display: "flex", gap: "30px" }}>
          <span>Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Industries</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 60px",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "650px" }}>
          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Empowering Businesses
            <br />
            <span style={{ color: "#ff8c1a" }}>
              To Grow & Succeed
            </span>
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#d1d5db",
              marginBottom: "40px",
            }}
          >
            Empowered Services LLP delivers customer support,
            virtual assistance, dispatch support, lead management,
            and BPO solutions for global businesses.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <button
              style={{
                background: "#7c3aed",
                border: "none",
                padding: "18px 35px",
                borderRadius: "12px",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Explore Services
            </button>

            <button
              style={{
                background: "transparent",
                border: "2px solid #ff8c1a",
                padding: "18px 35px",
                borderRadius: "12px",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>

        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "450px",
            opacity: 0.9,
          }}
        />
      </section>

      {/* SERVICES */}

      <section style={{ padding: "60px" }}>
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "Customer Support",
            "Virtual Assistance",
            "Dispatch Support",
            "Lead Management",
            "Digital Marketing",
            "BPO Solutions",
          ].map((service) => (
            <div
              key={service}
              style={{
                background: "#140326",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #3b0764",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {service}
              </h3>

              <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
                Professional solutions tailored to improve
                operational efficiency and customer experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section
        style={{
          padding: "80px 60px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "30px",
          }}
        >
          About Empowered Services LLP
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            margin: "auto",
            fontSize: "22px",
            lineHeight: "2",
            color: "#d1d5db",
          }}
        >
          Founded by K. Anand, Empowered Services LLP is a
          future-ready outsourcing and business support company
          delivering exceptional customer service and operational
          excellence to businesses across the globe.
        </p>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          borderTop: "1px solid #2a1245",
          color: "#94a3b8",
        }}
      >
        © 2026 Empowered Services LLP. All Rights Reserved.
      </footer>
    </main>
  );
}
