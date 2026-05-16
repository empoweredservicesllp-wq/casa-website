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
  id="about"
  style={{
    padding: "120px 80px",
    background: "#050014",
    color: "white",
    fontFamily: "Arial",
  }}
>
  <h2 style={{ fontSize: "48px", marginBottom: "30px" }}>
    About Us
  </h2>

  <p
    style={{
      fontSize: "20px",
      lineHeight: "1.8",
      color: "#d1c4ff",
      maxWidth: "900px",
    }}
  >
    CASCA delivers premium outsourcing solutions including customer
    support, virtual assistance, dispatch support, medical billing,
    and digital operations for global businesses.
  </p>
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
