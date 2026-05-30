export default function Home() {
  const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  padding: "16px",
  borderRadius: "12px",
  color: "white",
};
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
   <a href="#home" style={{color:"white",textDecoration:"none"}}>Home</a>
<a href="#about" style={{color:"white",textDecoration:"none"}}>About</a>
<a href="#services" style={{color:"white",textDecoration:"none"}}>Services</a>
<a href="#industries" style={{color:"white",textDecoration:"none"}}>Industries</a>
<a href="#contact" style={{color:"white",textDecoration:"none"}}>Contact</a>
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
       <div
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "40px",
    borderRadius: "24px",
    backdropFilter: "blur(10px)",
  }}
>
         <h3
  style={{
    fontSize: "30px",
    marginBottom: "20px",
  }}
>
            The Challenge
          </h3>

      <p
  style={{
    color: "#d4cfff",
    lineHeight: "1.8",
    fontSize: "18px",
  }}
>
            Modern businesses face increasing customer expectations,
            rising operational expenses and the need to deliver
            exceptional service consistently across multiple channels.
          </p>
        </div>

        <div
  style={{
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "40px",
    borderRadius: "24px",
    backdropFilter: "blur(10px)",
  }}
>
<h3
  style={{
    fontSize: "30px",
    marginBottom: "20px",
  }}
>
            Our Solution
          </h3>

          <p
  style={{
    color: "#d4cfff",
    lineHeight: "1.8",
    fontSize: "18px",
  }}
>
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
<section
  id="industries"
  style={{
    padding: "120px 80px",
    background: "#0a001f",
    color: "white",
    fontFamily: "Arial",
  }}
>
  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "56px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      Industries We Serve
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#d4cfff",
        fontSize: "20px",
        marginBottom: "60px",
      }}
    >
      Delivering specialized outsourcing solutions across diverse industries.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "25px",
      }}
    >
      {[
        "Medical Billing",
        "Logistics & Transportation",
        "E-Commerce",
        "Technology",
        "Telecommunications",
      
        
        "Customer Service",
      ].map((industry) => (
        <div
          key={industry}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "35px",
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              color: "#f59e0b",
            }}
          >
            {industry}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

<section
  id="why-us"
  style={{
    padding: "120px 80px",
    background: "linear-gradient(to bottom,#050014,#0d0221)",
    color: "white",
    fontFamily: "Arial",
  }}
>
  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "56px",
        textAlign: "center",
        marginBottom: "70px",
      }}
    >
      Why Choose Us
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "30px",
      }}
    >
      {[
        {
          title: "16+ Years Experience",
          desc: "Deep industry expertise and operational excellence.",
        },
        {
          title: "24/7 Support",
          desc: "Round-the-clock assistance for global businesses.",
        },
        {
          title: "Scalable Solutions",
          desc: "Flexible teams that grow with your business needs.",
        },
        {
          title: "Quality Focused",
          desc: "Consistent service delivery with measurable results.",
        },
        {
          title: "Cost Efficient",
          desc: "Reduce operational costs without compromising quality.",
        },
        {
          title: "Global Reach",
          desc: "Supporting clients across multiple international markets.",
        },
      ].map((item) => (
        <div
          key={item.title}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "35px",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              color: "#f59e0b",
              fontSize: "28px",
              marginBottom: "15px",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#d4cfff",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SERVICES */}

<section
  id="services"
  style={{
    padding: "120px 80px",
    background: "#070014",
    color: "white",
  }}
>
  <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "56px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      Our Services
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "#d4cfff",
        fontSize: "20px",
        marginBottom: "60px",
      }}
    >
      Professional outsourcing solutions designed for growth.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "30px",
      }}
    >
      {[
        "Customer Support",
        "Virtual Assistance",
        "Medical Billing",
        "Dispatch Services",
        "Email Support",
        "Back Office Operations",
      ].map((service) => (
        <div
          key={service}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "40px",
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              color: "#f59e0b",
              fontSize: "26px",
            }}
          >
            {service}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

{/* TESTIMONIALS */}



{/* CONTACT */}

<section
  id="contact"
  style={{
    padding: "120px 80px",
    background: "#050014",
    color: "white",
  }}
>
  <div style={{ maxWidth: "800px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "56px",
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      Contact Us
    </h2>

    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <input placeholder="Name" style={inputStyle} />
      <input placeholder="Email" style={inputStyle} />
      <input placeholder="Phone" style={inputStyle} />
      <input placeholder="Company" style={inputStyle} />
      <textarea
        placeholder="Message"
        rows="6"
        style={inputStyle}
      />

      <button
        style={{
          background: "#f59e0b",
          color: "white",
          border: "none",
          padding: "16px",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Send Message
      </button>
    </form>
  </div>
</section>

{/* WHATSAPP */}

<a
  href="https://wa.me/919679897979"
  target="_blank"
  rel="noreferrer"
  style={{
    position: "fixed",
    right: "25px",
    bottom: "25px",
    background: "#25D366",
    color: "white",
    padding: "18px 22px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    zIndex: 9999,
  }}
>
  WhatsApp
</a>

{/* FOOTER */}

<footer
  style={{
    background: "#030008",
    padding: "40px",
    textAlign: "center",
    color: "#d4cfff",
  }}
>
  <h3 style={{ color: "#f59e0b" }}>
    Empowered Services LLP
  </h3>

  <p>Email: info@empoweredservices.in</p>
  <p>Phone: +91 9679897979</p>

  <p style={{ marginTop: "20px" }}>
    © 2026 Empowered Services LLP. All Rights Reserved.
  </p>
</footer>

</main>


);
}

