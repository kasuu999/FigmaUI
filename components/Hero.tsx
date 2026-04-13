"use client";

const Hero = () => {
  return (
    <section style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7, #fefce8)", padding: "5rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4rem", flexWrap: "wrap", fontFamily: "'DM Sans', sans-serif" }}>

      {/* LEFT */}
      <div style={{ maxWidth: "520px", flex: 1, minWidth: "280px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #bbf7d0", color: "#16a34a", padding: "6px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: 600, marginBottom: "1.5rem", boxShadow: "0 2px 12px rgba(34,197,94,.1)" }}>
          <span style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
          Free delivery on first order
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 800, lineHeight: 1.15, color: "#1a1a1a", marginBottom: "1rem" }}>
          Dive into <span style={{ color: "#22c55e" }}>Delights</span> of Delectable Food
        </h1>

        <p style={{ color: "#777", fontSize: "15px", maxWidth: "420px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          Where each plate weaves a story of culinary mastery and every bite is unforgettable.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            style={{ background: "#22c55e", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "50px", fontSize: "15px", fontWeight: 600, cursor: "pointer", boxShadow: "0 8px 24px rgba(34,197,94,.3)", fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
          >Order Now →</button>
          <button
            style={{ border: "2px solid #22c55e", color: "#22c55e", background: "none", padding: "14px 28px", borderRadius: "50px", fontSize: "15px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#f0fdf4"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
          >See Menu</button>
        </div>

        <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
          {[{ value: "200+", label: "Menu Items" }, { value: "40K+", label: "Happy Customers" }, { value: "4.9★", label: "Avg Rating" }].map((stat) => (
            <div key={stat.label}>
              <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#1a1a1a", margin: 0 }}>{stat.value}</h3>
              <p style={{ fontSize: "12px", color: "#aaa", marginTop: "4px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: "380px", height: "380px" }}>
        <div style={{ position: "absolute", width: "360px", height: "360px", background: "radial-gradient(circle, #bbf7d0, #dcfce7)", borderRadius: "50%" }} />
        <div style={{ position: "relative", width: "300px", height: "300px", borderRadius: "50%", overflow: "hidden", border: "6px solid #fff", boxShadow: "0 20px 60px rgba(0,0,0,.15)" }}>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="Food" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ position: "absolute", top: "30px", right: "-10px", background: "#fff", padding: "10px 16px", borderRadius: "14px", boxShadow: "0 8px 32px rgba(0,0,0,.12)", fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap" }}>🕐 25 min delivery</div>
        <div style={{ position: "absolute", bottom: "30px", left: "-10px", background: "#fff", padding: "10px 16px", borderRadius: "14px", boxShadow: "0 8px 32px rgba(0,0,0,.12)", fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap" }}>⭐ 4.9 Top Rated</div>
      </div>
    </section>
  );
};

export default Hero;