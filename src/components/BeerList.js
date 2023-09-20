// src/components/BeerList.js
import React from "react";
import BeerCard from "./BeerCard";

const BeerList = ({ beers }) => {
  return (
    <div className="row">
      {beers.map((beer, index) => (
        <div className="col-md-4" key={beer.id}>
          <BeerCard beer={beer} />
          {/* Close the row after every 3 beer cards */}
          {(index + 1) % 3 === 0 && <div className="w-100"></div>}
        </div>
      ))}
    </div>
  );
};

export default BeerList;
