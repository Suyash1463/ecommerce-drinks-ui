// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Add Bootstrap CSS to your App.css

import BeerList from "./components/BeerList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      setBeers(response.data);
      setFilteredBeers(response.data);
    });
  }, []);

  const handleSearch = (query) => {
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Punk API Beers</h1>
      <SearchBar handleSearch={handleSearch} />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default App;
