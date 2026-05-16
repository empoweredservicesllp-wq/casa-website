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
    top: "90px",
    left: "30px",
    zIndex: 10,
  }}
>
  <img
    src="/logo.png"
    alt="CASCA Logo"
    style={{
      width: "140px",
      objectFit: "contain",
      borderRadius: "18px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
      background: "transparent",
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
          padding: "22px 40px",
          zIndex: 10,
          color: "white",
          fontFamily: "Arial",
          fontSize: "16px",
          backdropFilter: "blur(14px)",
background: "rgba(5,0,20,0.45)",
borderBottom: "1px solid rgba(255,255,255,0.08)",
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
  {
    title: "Customer Support",
    desc: "24/7 customer interaction and client relationship management.",
    icon: "🎧",
  },
  {
    title: "Virtual Assistance",
    desc: "Professional remote assistance for business operations.",
    icon: "💻",
  },
  {
    title: "Dispatch Support",
    desc: "Efficient dispatch coordination and logistics communication.",
    icon: "🚚",
  },
  {
    title: "Medical Billing",
    desc: "Accurate healthcare billing and claims processing services.",
    icon: "🏥",
  },
].map((service) => (

  <div
    key={service.title}
    style={{
      background:
        "linear-gradient(145deg, rgba(120,0,255,0.18), rgba(20,0,40,0.95))",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "28px",
      padding: "40px",
      minHeight: "260px",
      transition: "0.4s ease",
      backdropFilter: "blur(10px)",
      boxShadow: "0 0 30px rgba(162, 0, 255, 0.18)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "70px",
        height: "70px",
        borderRadius: "20px",
        background:
          "linear-gradient(135deg, #a855f7, #6d28d9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        marginBottom: "25px",
        boxShadow: "0 0 25px rgba(168,85,247,0.6)",
      }}
    >
      {service.icon}
    </div>

    <h3
      style={{
        fontSize: "30px",
        marginBottom: "18px",
        color: "white",
      }}
    >
      {service.title}
    </h3>

    <p
      style={{
        color: "#d8c7ff",
        fontSize: "17px",
        lineHeight: "1.8",
      }}
    >
      {service.desc}
    </p>
  </div>
))}
      
     
  </div>
</section>
<section
  id="about"
  style={{
    padding: "140px 80px",
    background:
      "linear-gradient(180deg, #050014 0%, #0a001f 100%)",
    color: "white",
    fontFamily: "Arial",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      top: "-120px",
      right: "-120px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "rgba(140,0,255,0.18)",
      filter: "blur(120px)",
    }}
  />

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
    }}
  >
    <div>
      <p
        style={{
          color: "#9f7aea",
          letterSpacing: "3px",
          marginBottom: "20px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        ABOUT EMPOWERED SERVICES LLP
      </p>

      <h2
        style={{
          fontSize: "56px",
          lineHeight: "1.2",
          marginBottom: "30px",
        }}
      >
        Delivering Premium BPO Solutions
        For Global Businesses
      </h2>

      <p
        style={{
          color: "#d1c4ff",
          lineHeight: "1.9",
          fontSize: "18px",
          marginBottom: "25px",
        }}
      >
        Empowered Services LLP is a modern Business
        Process Outsourcing company based in Asansol,
        India, serving clients across the US and UK.
      </p>

      <p
        style={{
          color: "#d1c4ff",
          lineHeight: "1.9",
          fontSize: "18px",
          marginBottom: "25px",
        }}
      >
        We specialize in customer support, virtual
        assistance, dispatch coordination, and medical
        billing solutions with a strong focus on
        professionalism, communication, and operational
        excellence.
      </p>

      <p
        style={{
          color: "#d1c4ff",
          lineHeight: "1.9",
          fontSize: "18px",
        }}
      >
        Our mission is to empower businesses with
        reliable remote teams that improve efficiency,
        customer satisfaction, and long-term growth.
      </p>
    </div>

    <div
      style={{
        background:
          "linear-gradient(145deg, rgba(90,0,150,0.35), rgba(20,0,40,0.95))",
        borderRadius: "32px",
        padding: "50px",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 0 40px rgba(140,0,255,0.15)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "42px",
              color: "#bb86fc",
              marginBottom: "10px",
            }}
          >
            20+
          </h3>

          <p style={{ color: "#d1c4ff" }}>
            Years Industry Experience
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: "42px",
              color: "#bb86fc",
              marginBottom: "10px",
            }}
          >
            GLOBAL
          </h3>

          <p style={{ color: "#d1c4ff" }}>
            Global Business Solutions
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: "42px",
              color: "#bb86fc",
              marginBottom: "10px",
            }}
          >
            24/7
          </h3>

          <p style={{ color: "#d1c4ff" }}>
            Reliable Service Availability
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: "42px",
              color: "#bb86fc",
              marginBottom: "10px",
            }}
          >
            100%
          </h3>

          <p style={{ color: "#d1c4ff" }}>
            Client-Focused Approach
          </p>
        </div>
      </div>
    </div>
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
