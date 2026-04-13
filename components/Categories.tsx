"use client";
import { useState } from "react";

const categories = [
  { name: "Main Dish",  count: "42 items", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&q=80" },
  { name: "Breakfast",  count: "28 items", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=120&q=80" },
  { name: "Dessert",    count: "19 items", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=120&q=80" },
  { name: "Noodles",    count: "15 items", img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=120&q=80" },
];

const Categories = () => {
  const [active, setActive] = useState("Main Dish");

  return (
    <section style={{ background: "#fff", padding: "5rem 3rem", fontFamily: "'DM Sans', sans-serif" }}>
      <p style={{ textAlign: "center", fontSize: "12px", color: "#22c55e", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Categories</p>
      <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.8rem" }}>Popular Categories</h2>
      <p style={{ textAlign: "center", fontSize: "15px", color: "#888", marginBottom: "3rem" }}>Explore our wide variety of delicious food categories</p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        {categories.map((cat) => (
          <div key={cat.name} onClick={() => setActive(cat.name)}
            style={{ background: active === cat.name ? "#f0fdf4" : "#f9fafb", border: `2px solid ${active === cat.name ? "#22c55e" : "transparent"}`, borderRadius: "20px", padding: "2rem 1.5rem", width: "170px", textAlign: "center", cursor: "pointer", transform: active === cat.name ? "translateY(-4px)" : "none", boxShadow: active === cat.name ? "0 12px 28px rgba(34,197,94,.15)" : "none", transition: "all 0.3s" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 1rem", border: `3px solid ${active === cat.name ? "#22c55e" : "#e5e5e5"}` }}>
              <img src={cat.img} alt={cat.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a", marginBottom: "4px" }}>{cat.name}</div>
            <div style={{ fontSize: "12px", color: "#aaa" }}>{cat.count}</div>
          </div>
        ))}

        {/* Browse All */}
        <div style={{ background: "#1a1a1a", border: "2px solid #333", borderRadius: "20px", padding: "2rem 1.5rem", width: "170px", textAlign: "center", cursor: "pointer", transition: "all 0.3s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#333"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#1a1a1a"; }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", margin: "0 auto 1rem" }}>🍽️</div>
          <div style={{ fontWeight: 700, fontSize: "14px", color: "#fff", marginBottom: "4px" }}>Browse All</div>
          <div style={{ fontSize: "12px", color: "#888" }}>View →</div>
        </div>
      </div>
    </section>
  );
};

export default Categories;