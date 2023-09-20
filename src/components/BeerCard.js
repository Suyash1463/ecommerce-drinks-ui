// src/components/BeerCard.js
import React from "react";

const BeerCard = ({ beer }) => {
  return (
    <div className="card mb-3">
      <img src={beer.image_url} className="card-img-top" alt={beer.name} />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.tagline}</p>
      </div>
    </div>
  );
};

export default BeerCard;
