import React from 'react';
import { IconContext } from 'react-icons/lib';
import { PriceData } from '../../data/Data';
import * as s from './Price.styled';

 export default function Price() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <s.PricingSection>
        <s.PricingWrapper>
          <s.PricingHeading>Our Services</s.PricingHeading>

          <s.PricingContainer>
            {PriceData.map((pri, index) => (
                 <s.PricingCard key={index}   to='/sign-up'>
                 <s.PricingCardInfo>
                   <s.PricingCardIcon>
                     {pri.icon}
                   </s.PricingCardIcon>
                   <s.PricingCardPlan> {pri.plan} </s.PricingCardPlan>
                   <s.PricingCardCost>$ {pri.price} </s.PricingCardCost>
                   <s.PricingCardLength>{pri.mes} </s.PricingCardLength>
                   <s.PricingCardFeatures>
                     <s.PricingCardFeature> {pri.new} </s.PricingCardFeature>
                     <s.PricingCardFeature>$ {pri.budget} </s.PricingCardFeature>
                     <s.PricingCardFeature>{pri.feature} </s.PricingCardFeature>
                   </s.PricingCardFeatures>
                   <s.Button >Comprar Plan</s.Button>
                 </s.PricingCardInfo>
               </s.PricingCard>
            ))}
          </s.PricingContainer>

        </s.PricingWrapper>
      </s.PricingSection>
    </IconContext.Provider>
  );
}
