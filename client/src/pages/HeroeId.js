import React from "react";
import { useParams } from "react-router-dom";
import getHeroId from "../components/data/getHeroId";

export default function HeroeId() {
  //   const id = props.match.params.heroId;
  const idx = useParams();
  const heroes = getHeroId(idx.heroId);

  return (
    <div>
      <h3>hero id</h3>
    </div>
  );
}
