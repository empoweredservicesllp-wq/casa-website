export default function Home() {
return (
<main
style={{
background: "#070014",
minHeight: "100vh",
color: "white",
fontFamily: "Arial, sans-serif",
overflowX: "hidden",
}}
>

```
  {/* LOGO */}
  <div
    style={{
      position: "absolute",
      top: "70px",
      left: "30px",
      zIndex: 100,
    }}
  >
    <img
      src="/logo.png"
      alt="Empowered Services LLP"
      style={{
        width: "220px",
        objectFit: "contain",
      }}
    />
  </div>

  {/* NAVBAR */}
  <nav
    style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "35px",
      padding: "20px",
      backdropFilter: "blur(16px)",
      background: "rgba(5,0,20,0.55)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <a href="#home" style={navLink}>Home</a>
    <a href="#about" style={navLink}>About</a>
    <a href="#services" style={navLink}>Services</a>
    <a href="#industries" style={navLink}>Industries</a>
    <a href="#contact" style={navLink}>Contact</a>

    <button
      style={{
        background: "transparent",
        border: "1px solid #f59e0b",
        color: "white",
        padding: "12px 22px",
        borderRadius: "30px",
        cursor: "pointer",
      }}
    >
      +91 9679897979
    </button>
  </nav>

  {/* HERO */}
  <section
    id="home"
    style={{
      height: "100vh",
      backgroundImage: "url('/hero-image.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      padding: "0 80px",
      position: "relative",
    }}
  >
    <div
      style={{
        maxWidth: "760px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          lineHeight: "1.1",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        Premium Global
        <br />
        Outsourcing Solutions
        <br />
        For Modern Businesses
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#d1c4ff",
          lineHeight: "1.8",
          marginBottom: "40px",
        }}
      >
        Empowered Services LLP delivers world-class customer support,
        virtual assistance, dispatch services and medical billing
        solutions that help businesses scale faster and operate smarter.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#contact"
          style={{
            background:
              "linear-gradient(135deg,#8b5cf6,#6d28d9)",
            padding: "18px 32px",
            borderRadius: "14px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </a>

        <a
          href="#services"
          style={{
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "18px 32px",
            borderRadius: "14px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Explore Services
        </a>
      </div>
    </div>
  </section>

  {/* ABOUT */}
  <section
    id="about"
    style={{
      padding: "120px 80px",
      background:
        "linear-gradient(to bottom,#050014,#0d0221)",
    }}
  >
    <div
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "60px",
          marginBottom: "30px",
        }}
      >
        Empowering Businesses Through
        Premium Outsourcing Solutions
      </h2>

      <p
        style={{
          color: "#d4cfff",
          fontSize: "22px",
          lineHeight: "1.9",
          marginBottom: "70px",
          maxWidth: "1000px",
        }}
      >
        Empowered Services LLP helps businesses improve customer
        experience, reduce operational costs, and build scalable
        support systems through professional outsourcing services.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        <div style={aboutCard}>
          <h3 style={aboutTitle}>
            The Challenge
          </h3>

          <p style={aboutText}>
            Modern businesses face increasing customer expectations,
            rising operational expenses and the need to deliver
            exceptional service consistently across multiple channels.
          </p>
        </div>

        <div style={aboutCard}>
          <h3 style={aboutTitle}>
            Our Solution
          </h3>

          <p style={aboutText}>
            We provide reliable, scalable and cost-effective
            outsourcing solutions that improve customer satisfaction,
            increase efficiency and support long-term business growth.
          </p>
        </div>
      </div>
    </div>
  </section>
{/* FOUNDER SECTION */}

<section
  id="founder"
  style={{
    padding: "120px 80px",
    background: "#070014",
    color: "white",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "80px",
      flexWrap: "wrap",
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        flex: 1,
        minWidth: "320px",
      }}
    >
      <p
        style={{
          color: "#d1a4ff",
          letterSpacing: "4px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      >
        FOUNDER & VISION
      </p>

```
  <h2
    style={{
      fontSize: "58px",
      lineHeight: "1.2",
      marginBottom: "30px",
    }}
  >
    Meet The Founder
  </h2>

  <p
    style={{
      color: "#d4d4d8",
      lineHeight: "1.9",
      fontSize: "20px",
      marginBottom: "25px",
    }}
  >
    Andy brings over 16 years of experience in customer support,
    outsourcing operations, dispatch management and business process
    optimization.
  </p>

  <p
    style={{
      color: "#d4d4d8",
      lineHeight: "1.9",
      fontSize: "20px",
      marginBottom: "40px",
    }}
  >
    Through Empowered Services LLP, his mission is to build a trusted
    global outsourcing company that delivers professionalism,
    reliability and measurable results for clients worldwide.
  </p>

  <div
    style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        border: "1px solid #f59e0b",
        borderRadius: "16px",
        padding: "20px 30px",
      }}
    >
      <h3
        style={{
          color: "#f59e0b",
          fontSize: "30px",
          marginBottom: "8px",
        }}
      >
        16+
      </h3>

      <p>Years Experience</p>
    </div>

    <div
      style={{
        border: "1px solid #f59e0b",
        borderRadius: "16px",
        padding: "20px 30px",
      }}
    >
      <h3
        style={{
          color: "#f59e0b",
          fontSize: "30px",
          marginBottom: "8px",
        }}
      >
        Global
      </h3>

      <p>Business Vision</p>
    </div>
  </div>
</div>

<div
  style={{
    flex: 1,
    minWidth: "320px",
    textAlign: "center",
  }}
>
  <img
    src="/founder.png"
    alt="Founder"
    style={{
      width: "100%",
      maxWidth: "520px",
      borderRadius: "30px",
      border: "2px solid rgba(245,158,11,0.3)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    }}
  />
</div>
```

  </div>
</section>

{/* STATS SECTION */}

<section
  style={{
    padding: "80px",
    background: "#050014",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(220px,1fr))",
      gap: "30px",
    }}
  >
    {[
      {
        number: "16+",
        title: "Years Experience",
      },
      {
        number: "24/7",
        title: "Support Operations",
      },
      {
        number: "Global",
        title: "Business Solutions",
      },
      {
        number: "100%",
        title: "Client Focused",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background:
            "linear-gradient(to bottom right,#120024,#1f003d)",
          border: "1px solid rgba(245,158,11,0.2)",
          borderRadius: "24px",
          padding: "40px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#f59e0b",
            marginBottom: "12px",
          }}
        >
          {item.number}
        </h2>


    <p
      style={{
        color: "#e4e4e7",
        fontSize: "18px",
      }}
    >
      {item.title}
    </p>
  </div>
))}


  </div>
</section>
</main>


);
}

