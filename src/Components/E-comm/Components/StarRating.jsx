import React from "react";
import "../Components/StarRating.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating, count }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} className="star" />);
    }

    const remainingStars = count - stars.length;

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty ${i}`} className="empty-star" />);
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
