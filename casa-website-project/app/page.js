export default function Home() {
  return (
    <main
      style={{
        background: "#070014",
        minHeight: "100vh",
        margin: 0,
      }}
    >
     <div
  style={{
    position: "absolute",
    top: "40px",
    left: "60px",
    zIndex: 10,
  }}
>
  <img
    src="/logo.png"
    alt="CASCA Logo"
    style={{
      width: "220px",
      objectFit: "contain",
    }}
  />
</div>
      
      
      <nav
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          padding: "30px",
          zIndex: 10,
          color: "white",
          fontFamily: "Arial",
          fontSize: "16px",
        }}
      >
       <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>

<a href="#about" style={{ color: "white", textDecoration: "none" }}>About Us</a>

<a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>

<a href="#services" style={{ color: "white", textDecoration: "none" }}>Industries</a>

<a href="#services" style={{ color: "white", textDecoration: "none" }}>Careers</a>

<a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>

        <button
          style={{
            marginLeft: "40px",
            border: "1px solid orange",
            background: "transparent",
            color: "white",
            padding: "12px 24px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          +91 9679897979
        </button>
      </nav>

     <section
  id="home"
  style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/hero-image.png')",
         backgroundSize: "cover",
backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>

        <section
 <section
  id="about"
  style={{
    padding: "140px 80px",
    background: "linear-gradient(to bottom, #050014, #0d0221)",
    color: "white",
    fontFamily: "Arial",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >
    <p
      style={{
        color: "#9d7dff",
        fontSize: "18px",
        letterSpacing: "3px",
        marginBottom: "20px",
      }}
    >
      WHO WE ARE
    </p>

    <h2
      style={{
        fontSize: "64px",
        lineHeight: "1.2",
        marginBottom: "40px",
        maxWidth: "900px",
      }}
    >
      Empowering Businesses Through Premium Outsourcing Solutions
    </h2>

    <p
      style={{
        fontSize: "22px",
        lineHeight: "1.9",
        color: "#d4cfff",
        maxWidth: "1000px",
        marginBottom: "80px",
      }}
    >
      Empowered Services LLP helps businesses improve customer
      experiences, optimize operations, and scale efficiently through
      professional outsourcing solutions. We specialize in customer
      support, dispatch services, virtual assistance, medical billing,
      and operational support tailored for global businesses.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "30px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "40px",
          borderRadius: "28px",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
          The Challenge
        </h3>

        <p
          style={{
            color: "#d4cfff",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          Modern businesses struggle to balance customer satisfaction,
          operational efficiency, and rising support costs while
          maintaining consistent service quality.
        </p>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "40px",
          borderRadius: "28px",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Our Solution
        </h3>

        <p
          style={{
            color: "#d4cfff",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          We provide scalable and professional support solutions that
          improve customer satisfaction, streamline operations, and
          reduce operational costs for businesses worldwide.
        </p>
      </div>
    </div>
  </div>
</section>

<section
  id="services"
  style={{
    padding: "120px 80px",
    background: "#0a001f",
    color: "white",
    fontFamily: "Arial",
  }}
>
  <h2 style={{ fontSize: "48px", marginBottom: "40px" }}>
    Services
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "30px",
    }}
  >
    {[
      "Customer Support",
      "Virtual Assistance",
      "Dispatch Support",
      "Medical Billing",
    ].map((service) => (
      <div
        key={service}
        style={{
          padding: "35px",
          borderRadius: "24px",
          background: "#14002d",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h3 style={{ fontSize: "24px" }}>{service}</h3>
      </div>
    ))}
  </div>
</section>

<section
  id="contact"
  style={{
    padding: "120px 80px",
    background: "#050014",
    color: "white",
    fontFamily: "Arial",
  }}
>
  <h2 style={{ fontSize: "48px", marginBottom: "30px" }}>
    Contact Us
  </h2>

  <p style={{ fontSize: "20px", color: "#d1c4ff" }}>
    Email: empoweredservicesllp@gmail.com
  </p>

  <p style={{ fontSize: "20px", color: "#d1c4ff" }}>
    Phone: +91 9679897979
  </p>
</section>
    </main>
  );
}
