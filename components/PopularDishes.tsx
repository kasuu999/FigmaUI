
"use client";
import DishCard from "./DishCard";

const dishes = [
  { title: "Garden Fresh Salad",      price: "$12", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",   rating: "4.9", time: "15 min" },
  { title: "Crispy Burger",           price: "$10", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",  rating: "4.7", time: "18 min" },
  { title: "Grilled Chicken",         price: "$18", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&q=80", rating: "4.9", time: "25 min" },
  { title: "Margherita Pizza",        price: "$14", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",   rating: "4.8", time: "30 min" },
  { title: "Sushi Platter",           price: "$22", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80",   rating: "5.0", time: "20 min" },
  { title: "Grilled Chicken Special", price: "$16", image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&q=80", rating: "4.6", time: "22 min" },
];

const PopularDishes = () => {
  return (
    <section style={{ background: "#fafafa", padding: "5rem 3rem", fontFamily: "'DM Sans', sans-serif" }}>
      <p style={{ textAlign: "center", fontSize: "12px", color: "#22c55e", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Menu</p>
      <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display', serif", fontSize: "38px", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.8rem" }}>Standout Dishes From Our Menu</h2>
      <p style={{ textAlign: "center", fontSize: "15px", color: "#888", marginBottom: "3rem" }}>Handpicked favorites loved by our customers</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        {dishes.map((dish, i) => <DishCard key={i} {...dish} />)}
      </div>
    </section>
  );
};

export default PopularDishes;