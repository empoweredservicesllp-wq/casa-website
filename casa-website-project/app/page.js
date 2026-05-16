export default function Home() {
  return (
    <main
      style={{
        background: "#070014",
        minHeight: "100vh",
        margin: 0,
      }}
    >
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
        <span>Home</span>
        <span>About Us</span>
        <span>Services</span>
        <span>Industries</span>
        <span>Careers</span>
        <span>Contact</span>

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
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/hero-image.png')",
         backgroundSize: "cover",
backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
    </main>
  );
}
