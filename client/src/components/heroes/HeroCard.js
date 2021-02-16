import React from 'react'

export default function HeroCard({hero}) {


    const {id, alter_ego, first_appearance, characters, superhero} = hero


    return (
        <div>
            <div>
                <div>
                    <img src={`./assets/heroes/${id}.jpg`} alt={superhero}/>
                </div>
            </div>
            
        </div>
    )
}
