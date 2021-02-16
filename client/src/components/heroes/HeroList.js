import React from "react";
import getHeroPublisher from "../data/getHeroPublisher";
import HeroCard from "./HeroCard";

export default function HeroList({ publisher }) {
  const heroes = getHeroPublisher(publisher);

  return (
    <div>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
