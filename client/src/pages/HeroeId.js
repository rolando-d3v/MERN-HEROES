import React from "react";
import { useParams } from "react-router-dom";
import getHeroId from "../components/data/getHeroId";

export default function HeroeId() {
  //   const id = props.match.params.heroId;
  const idx = useParams();
  const heroes = getHeroId(idx.heroId);

  const {id,superhero} = heroes

  return (
    <div className='flex bg-coolGray-600 ' >
     <div>
       <img src={`/assets/heroes/${id}.jpg`} alt=""/>
     </div>
     <div>
     <h3 className='3xl font-bold text-white' >{superhero} </h3>
     </div>
    </div>
  );
}
