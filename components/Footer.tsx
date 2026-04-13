
"use client";const Footer = () => {
  return (
    <footer style={{ background: "#111", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ padding: "4rem 3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700 }}>Foodie</span>
            <span style={{ width: "10px", height: "10px", background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
          </div>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.8, maxWidth: "220px" }}>Where each plate weaves a story of culinary mastery and love.</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "1.2rem" }}>
            {["📘","📸","🐦","▶️"].map((icon, i) => (
              <div key={i} style={{ width: "36px", height: "36px", background: "#222", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", cursor: "pointer", transition: "background .2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#22c55e"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#222"; }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "1.2rem" }}>Quick Links</h4>
          {["Home","Menu","About Us","Contact"].map((link) => (
            <div key={link} style={{ fontSize: "14px", color: "#888", marginBottom: "0.6rem", cursor: "pointer", transition: "color .2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.color = "#22c55e"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.color = "#888"; }}>
              → {link}
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "1.2rem" }}>Categories</h4>
          {["Main Dish","Breakfast","Dessert","Noodles","Beverages"].map((cat) => (
            <div key={cat} style={{ fontSize: "14px", color: "#888", marginBottom: "0.6rem", cursor: "pointer", transition: "color .2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.color = "#22c55e"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.color = "#888"; }}>
              → {cat}
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "1.2rem" }}>Contact Us</h4>
          {[{ icon: "📍", text: "123 Food Street, Bhopal, MP" }, { icon: "📞", text: "+91 98266 40483" }, { icon: "✉️", text: "hello@foodie.com" }].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", fontSize: "14px", color: "#888", marginBottom: "0.8rem" }}>
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid #222", padding: "1.5rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "13px", color: "#555" }}>© 2026 Foodie. All Rights Reserved.</p>
        <p style={{ fontSize: "13px", color: "#555" }}>Made with ❤️ for food lovers</p>
      </div>
    </footer>
  );
};

export default Footer;