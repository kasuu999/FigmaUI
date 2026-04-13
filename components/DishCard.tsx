"use client";

interface Props {
  title: string;
  price: string;
  image: string;
  rating: string;
  time: string;
}

const DishCard = ({ title, price, image, rating, time }: Props) => {
  return (
    <div
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {title}
    </div>
  );
};

export default DishCard;