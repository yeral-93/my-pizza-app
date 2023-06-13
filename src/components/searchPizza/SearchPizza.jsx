import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../home/Footer";
import search from "../../assets/search-outline.svg";
import {Background, DivSearchPizza, H2Name, InputSearch, PizzaSearch } from "./StyleSearchPizza";
import Header from "../home/Header";
import { get } from "../../service/apiPizza";



const SearchPizza = () => {
  const [links, setLinks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const searchTerm = document.querySelector("input").value.toLowerCase();
    const results = links.filter((pizza) =>
      pizza.nombre.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  const getUsers = async () => {
    const response = await get("pizzas");
    console.log(response);
    setLinks(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Background>
      <PizzaSearch>
        <InputSearch>
          <input placeholder="pizza de peperoni, napolitana, haw..." />
          <button onClick={handleSearch}>
            <img src={search} alt="search" />
          </button>
        </InputSearch>
        <H2Name>
          <h2>{searchResults.length} resultados</h2>
        </H2Name>
        {searchResults.map((pizza) => (
          <DivSearchPizza key={pizza.id}>
            <figure>
              <img src={pizza.imagen} alt={pizza.nombre} />
            </figure>
            <NavLink to={`/detailspizza/${pizza.id}`}>
              {pizza.nombre}
            </NavLink>
            <h4>$ {pizza.precio} COP</h4>
          </DivSearchPizza>
        ))}
      </PizzaSearch>
      </Background>
      <Footer />
    </>
  );
};

export default SearchPizza;

