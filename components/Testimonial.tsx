"use client";
const testimonials = [
  { name: "Ayesha Khan",  role: "Food Blogger",     text: "The food was absolutely amazing, fresh, and delicious. Every dish feels like it was made with love!", avatar: "AK" },
  { name: "Rahul Sharma", role: "Regular Customer", text: "Best restaurant experience ever! Super fast delivery and perfect packaging. Will definitely order again.", avatar: "RS" },
  { name: "Priya Patel",  role: "Food Lover",       text: "I tried the sushi platter and it was outstanding. The quality is consistently excellent every time.", avatar: "PP" },
];

const Testimonial = () => {
  return (
    <section style={{ background: "#fff", padding: "5rem 3rem", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "3rem", marginBottom: "4rem", flexWrap: "wrap", justifyContent: "center", maxWidth: "1100px", margin: "0 auto 4rem" }}>
        <div style={{ width: "260px", height: "300px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,.1)", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80" alt="Chef" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ maxWidth: "460px" }}>
          <p style={{ fontSize: "12px", color: "#22c55e", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Testimonials</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 700, color: "#1a1a1a", marginBottom: "1rem", lineHeight: 1.2 }}>What Our Customers Say About Us</h2>
          <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.7 }}>Real reviews from real food lovers who keep coming back for more.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: "#f9fafb", borderRadius: "20px", padding: "2rem", border: "1px solid #f0f0f0", transition: "box-shadow .3s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(34,197,94,.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
            <div style={{ fontSize: "52px", color: "#22c55e", lineHeight: 1, marginBottom: "1rem", fontFamily: "serif" }}>"</div>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8, marginBottom: "1.2rem" }}>{t.text}</p>
            <div style={{ color: "#f59e0b", fontSize: "16px", marginBottom: "1rem" }}>★★★★★</div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#22c55e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px", flexShrink: 0 }}>{t.avatar}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a" }}>{t.name}</div>
                <div style={{ fontSize: "12px", color: "#aaa" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;