import React from "react";

// Star component
const Star = ({ filled }) => (
  <svg
    className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

// StarRating component
const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <span className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </span>
  );
};

export default Rating;
