
"use client";
const services = [
  { icon: "🚀", title: "Fast Delivery",      desc: "Get your food delivered hot and fresh within 30 minutes guaranteed." },
  { icon: "🥬", title: "Fresh Ingredients",  desc: "We use only the freshest, locally sourced ingredients in every dish." },
  { icon: "🕐", title: "24/7 Service",       desc: "We are always open. Order anytime, day or night, we have got you covered." },
  { icon: "💳", title: "Easy Payment",       desc: "Multiple payment options available for a smooth checkout experience." },
];

const Services = () => {
  return (
    <section style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", padding: "5rem 3rem", fontFamily: "'DM Sans', sans-serif" }}>
      <p style={{ textAlign: "center", fontSize: "12px", color: "#16a34a", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Why Us</p>
      <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.8rem" }}>Our Services</h2>
      <p style={{ textAlign: "center", fontSize: "15px", color: "#555", marginBottom: "3rem" }}>We go above and beyond to make your dining experience special</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        {services.map((s, i) => (
          <div key={i}
            style={{ background: "#fff", borderRadius: "20px", padding: "2rem", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,.06)", border: "1px solid #e8f5e9", transition: "transform .3s, box-shadow .3s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(34,197,94,.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,.06)"; }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", margin: "0 auto 1.2rem" }}>{s.icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.8rem" }}>{s.title}</h3>
            <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;