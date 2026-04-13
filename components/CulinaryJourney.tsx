
"use client";const features = [
  { icon: "🏆", title: "Award Winning", desc: "Recognized for excellence in taste & service" },
  { icon: "👨‍🍳", title: "Expert Chefs",   desc: "20+ years of culinary mastery" },
  { icon: "🌿", title: "Organic Food",   desc: "Farm-fresh, 100% natural ingredients" },
  { icon: "💚", title: "Made with Love", desc: "Every plate is crafted with passion" },
];

const CulinaryJourney = () => {
  return (
    <section style={{ background: "#fafafa", padding: "5rem 3rem", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", maxWidth: "1100px", margin: "0 auto" }}>

        {/* Left image */}
        <div style={{ flex: 1, minWidth: "280px", maxWidth: "480px", height: "420px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,.1)" }}>
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Our Restaurant" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>

        {/* Right text */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <p style={{ fontSize: "12px", color: "#22c55e", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Story</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 700, color: "#1a1a1a", marginBottom: "1rem", lineHeight: 1.2 }}>Our Culinary Journey And Services</h2>
          <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.8, marginBottom: "2rem" }}>From a small kitchen dream to a beloved restaurant — every dish we serve carries the passion of our chefs and the warmth of our family.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {features.map((f) => (
              <div key={f.title}
                style={{ background: "#fff", borderRadius: "16px", padding: "1.2rem", border: "1px solid #f0f0f0", display: "flex", gap: "0.8rem", alignItems: "flex-start", transition: "box-shadow .3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(34,197,94,.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                <span style={{ fontSize: "24px", flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a", marginBottom: "4px" }}>{f.title}</div>
                  <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryJourney;