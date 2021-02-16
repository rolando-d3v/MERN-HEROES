import React from 'react'
import getHeroPublisher from '../data/getHeroPublisher'


export default function HeroList({publisher}) {


    const heroes = getHeroPublisher(publisher)

    return (
        <ul>
            {heroes.map(hero => (
                <li key={hero.id} >
                      {hero.superhero}  
                </li>
            ))}
        </ul>
    )
}
