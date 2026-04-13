"use client";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Menu", "About", "Contact"];

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 3rem", height: "70px", background: "#fff", borderBottom: "1px solid #f0f0f0", position: "sticky", top: 0, zIndex: 50, fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: "#1a1a1a" }}>Foodie</span>
        <span style={{ width: "10px", height: "10px", background: "#22c55e", borderRadius: "50%", display: "inline-block", marginLeft: "2px" }} />
      </div>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((link) => (
          <li key={link}>
            <button onClick={() => setActive(link)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "15px", fontWeight: 500, color: active === link ? "#22c55e" : "#555", fontFamily: "'DM Sans', sans-serif" }}>
              {link}
            </button>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button style={{ position: "relative", width: "40px", height: "40px", borderRadius: "50%", border: "1.5px solid #e5e5e5", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
          🛒
          <span style={{ position: "absolute", top: "-4px", right: "-4px", background: "#22c55e", color: "#fff", borderRadius: "50%", width: "16px", height: "16px", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>3</span>
        </button>
        <button style={{ background: "#22c55e", color: "#fff", border: "none", padding: "10px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;