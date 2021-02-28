import React, { useState } from "react";
import { heroes } from "../components/data/dataHero";
import HeroCard from "../components/heroes/HeroCard";

export default function Search() {
  const [search, setSearch] = useState("");

  const filterHero = heroes;

  const obtenerDato = (e) => {
    setSearch(e.target.value);
  };
  const buscarData = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full flex' >
      <div className='w-6/12' >
        <form  className='p-4'  onSubmit={buscarData}>
          <div className='mb-4' >
            <input
              className="px-4 py-1 rounded bg-gray-300 leading-tight"
              type="text"
              onChange={obtenerDato}
            />
          </div>
          <button
            className="px-4 py-1  text-white font-bold bg-blueGray-900 rounded"
            type="button"
          >
            Search Hero
          </button>
        </form>
      </div>
      <div className='w-6/12' >
        {filterHero.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
