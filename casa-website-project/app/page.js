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
    top: "72px",
    left: "25px",
    zIndex: 10,
  }}
>
  <img
    src="/logo.png"
    alt="CASCA Logo"
    style={{
      width: "210px",
      objectFit: "contain",
      borderRadius: "18px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
      background: "transparent",
    }}
  />
</div>

    <div
  style={{
    position: "absolute",
    top: "220px",
    left: "80px",
    zIndex: 20,
    maxWidth: "700px",
    color: "white",
    fontFamily: "Arial",
  }}
>
  <h1
    style={{
      fontSize: "72px",
      lineHeight: "1.1",
      fontWeight: "bold",
      marginBottom: "30px",
      textShadow: "0 4px 30px rgba(0,0,0,0.45)",
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
      maxWidth: "650px",
    }}
  >
    Customer Support • Dispatch Services • Virtual Assistance • Medical Billing
  </p>

  <div style={{ display: "flex", gap: "20px" }}>
    <a
      href="#contact"
      style={{
        padding: "18px 34px",
        background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        borderRadius: "14px",
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 10px 30px rgba(139,92,246,0.4)",
      }}
    >
      Contact Us
    </a>

    <a
      href="#services"
      style={{
        padding: "18px 34px",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "14px",
        color: "white",
        textDecoration: "none",
        backdropFilter: "blur(10px)",
      }}
    >
      Explore Services
    </a>
  </div>
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
    animation: "float 3s ease-in-out infinite",
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
      professional outsourcing solutions. 
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
  style={{
    padding: "120px 80px",
    background: "linear-gradient(to bottom, #050014, #0d0221)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "80px",
    flexWrap: "wrap"
  }}
>
  <div style={{ flex: 1, minWidth: "320px" }}>
    <p
      style={{
        color: "#d1a4ff",
        letterSpacing: "4px",
        marginBottom: "20px",
        fontSize: "18px"
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
    fontWeight: "bold"
  }}
>
  Meet The <span style={{ color: "#f59e0b" }}>Founder</span>
</h2>

<p
  style={{
    fontSize: "22px",
    lineHeight: "1.9",
    color: "#d4d4d8",
    marginBottom: "30px"
  }}
>
  K. Anand brings over 20 years of leadership experience in the BPO
  industry with expertise in customer support, operational excellence,
  business development, and scalable outsourcing solutions.
</p>

<p
  style={{
    fontSize: "20px",
    lineHeight: "1.9",
    color: "#d4d4d8",
    marginBottom: "40px"
  }}
>
  Through Empowered Services LLP, his vision is to build a globally trusted
  outsourcing company focused on reliability, innovation, and premium client
  experiences.
</p>

<div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  }}
>
  <div
    style={{
      border: "1px solid #f59e0b",
      padding: "18px 30px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.04)"
    }}
  >
    <h3 style={{ color: "#f59e0b", fontSize: "28px" }}>20+</h3>
    <p>Years Experience</p>
  </div>

  <div
    style={{
      border: "1px solid #f59e0b",
      padding: "18px 30px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.04)"
    }}
  >
    <h3 style={{ color: "#f59e0b", fontSize: "28px" }}>Global</h3>
    <p>Business Vision</p>
  </div>
</div>
```

  </div>

  <div
    style={{
      flex: 1,
      minWidth: "320px",
      textAlign: "center"
    }}
  >
    <img
      src="/founder.png.jpeg"
      alt="Founder"
      style={{
        width: "100%",
        maxWidth: "520px",
        borderRadius: "30px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        border: "2px solid rgba(245,158,11,0.3)",
        animation: "float 3s ease-in-out infinite"
      }}
    />
  </div>
</section>
<section
  style={{
    padding: "80px 60px",
    background: "#070014",
    color: "white"
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "30px",
      maxWidth: "1300px",
      margin: "0 auto"
    }}
  >
    {[
      {
        number: "20+",
        title: "Years Leadership Experience"
      },
      {
        number: "Global",
        title: "Business Vision"
      },
      {
        number: "24/7",
        title: "Operational Support"
      },
      {
        number: "Scalable",
        title: "Solutions & Growth"
      }
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "linear-gradient(to bottom right, #120024, #1f003d)",
          border: "1px solid rgba(245,158,11,0.25)",
          borderRadius: "24px",
          padding: "40px 30px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
          transition: "0.4s"
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#f59e0b",
            marginBottom: "15px"
          }}
        >
          {item.number}
        </h2>

```
    <p
      style={{
        fontSize: "20px",
        color: "#e4e4e7",
        lineHeight: "1.6"
      }}
    >
      {item.title}
    </p>
  </div>
))}
```

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
points: [
"Inbound & outbound calls",
"Email & chat support",
"CRM coordination",
"24/7 assistance"
]
},

{
title: "Virtual Assistance",
desc: "Professional remote assistance for business operations.",
icon: "💻",
points: [
"Administrative tasks",
"Calendar management",
"Data organization",
"Business coordination"
]
},

{
title: "Dispatch Support",
desc: "Efficient dispatch coordination and logistics communication.",
icon: "🚚",
points: [
"Real-time dispatch support",
"Driver coordination",
"Route communication",
"Operational management"
]
},

{
title: "Medical Billing",
desc: "Accurate healthcare billing and claims processing services.",
icon: "🏥",
points: [
"Claims processing",
"Insurance verification",
"Payment posting",
"Revenue cycle support"
]
},


].map((service) => (

  <div
  key={service.title}
  style={{
    perspective: "1500px",
    minHeight: "320px"
  }}
>
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "320px",
      transformStyle: "preserve-3d",
      transition: "transform 0.8s",
      cursor: "pointer"
    }}
    className="flip-card"
  >

```
{/* FRONT */}
<div
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    background:
      "linear-gradient(145deg, rgba(120,0,255,0.18), rgba(20,0,40,0.95))",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "40px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 30px rgba(162, 0, 255, 0.18)",
    overflow: "hidden"
  }}
>
  <div
    style={{
      width: "75px",
      height: "75px",
      borderRadius: "22px",
      background:
        "linear-gradient(135deg, #a855f7, #6d28d9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "34px",
      marginBottom: "25px",
      boxShadow: "0 0 25px rgba(168,85,247,0.6)"
    }}
  >
    {service.icon}
  </div>

  <h3
    style={{
      fontSize: "34px",
      marginBottom: "18px",
      color: "white",
      lineHeight: "1.2"
    }}
  >
    {service.title}
  </h3>

  <p
    style={{
      color: "#d8c7ff",
      fontSize: "18px",
      lineHeight: "1.8"
    }}
  >
    {service.desc}
  </p>
</div>

{/* BACK */}
<div
  style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    background:
      "linear-gradient(145deg, rgba(255,140,0,0.18), rgba(20,0,40,0.95))",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0 0 35px rgba(255,140,0,0.18)"
  }}
>
  <h3
    style={{
      color: "#f59e0b",
      fontSize: "28px",
      marginBottom: "20px"
    }}
  >
    Why Choose Us
  </h3>

  <ul
    style={{
      color: "#f3f4f6",
      lineHeight: "2",
      paddingLeft: "20px",
      fontSize: "17px"
    }}
  >
    {service.points.map((point, index) => (
  <li key={index}>{point}</li>
))}
  </ul>
</div>
```

  </div>
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
  style={{
    padding: "120px 80px",
    background: "linear-gradient(to bottom, #070014, #0d0221)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
  }}
>
  <div style={{ flex: 1, minWidth: "320px" }}>
    <p
      style={{
        color: "#d1a4ff",
        letterSpacing: "4px",
        marginBottom: "20px",
        fontSize: "14px",
      }}
    >
      FOUNDER MESSAGE
    </p>

    <h2
      style={{
        fontSize: "56px",
        lineHeight: "1.1",
        marginBottom: "30px",
      }}
    >
      Building Premium Global
      <br />
      Outsourcing Solutions
    </h2>

    <p
      style={{
        fontSize: "20px",
        color: "#d1c4ff",
        lineHeight: "1.8",
        maxWidth: "700px",
      }}
    >
      Empowered Services LLP was founded with a vision to deliver
      premium outsourcing, customer support, virtual assistance,
      dispatch coordination, and digital business solutions for
      international clients with professionalism and operational excellence.
    </p>

    <div
      style={{
        marginTop: "40px",
        padding: "25px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
        K. Anand
      </h3>

      <p style={{ color: "#d1c4ff", fontSize: "18px" }}>
        Founder — Empowered Services LLP
      </p>

      <p
        style={{
          color: "#bba7ff",
          marginTop: "15px",
          lineHeight: "1.7",
        }}
      >
        16+ years of experience in BPO operations,
        customer service excellence, dispatch coordination,
        and international business support solutions.
      </p>
    </div>
  </div>

  <div
    style={{
      flex: 1,
      minWidth: "320px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src="/founder.jpg"
      alt="Founder"
      style={{
        width: "100%",
        maxWidth: "500px",
        borderRadius: "30px",
        boxShadow: "0 20px 60px rgba(138,43,226,0.35)",
        animation: "float 4s ease-in-out infinite",
      }}
    />
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
