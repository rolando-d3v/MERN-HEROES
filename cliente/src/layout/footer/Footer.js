import React from "react";
import { footerData } from "../../data/Data";
import * as s from "./Footer.styled";

export default function Footer() {
  return (
    <s.FooterContainer>
      <s.FooterSuscription>
        <s.FooterSubHeading>
          Join our exclusive en una puerta de la esperanza en el peru
        </s.FooterSubHeading>
        <s.FooterSubText> you can unsubscribe at any time</s.FooterSubText>
        <s.Form>
          <s.FormInput
            type="email"
            name="email"
            placeholder="Escribe tu email"
          />
          <s.Button> Suscribe </s.Button>
        </s.Form>
      </s.FooterSuscription>

      <s.FooterLinksContainer>
        <s.FooterLinksWrapper>
          {footerData.map((foo, index) => (
            <s.FooterLinksItems key={index}>
              <s.FooterLinkTitle> {foo.title} </s.FooterLinkTitle>
              {foo.links.map((link, index) => (
                <s.FooterLink key={index}  to="/sign-up">{link.link1} </s.FooterLink>
              ))}
            </s.FooterLinksItems>
          ))}
        </s.FooterLinksWrapper>
      </s.FooterLinksContainer>
    </s.FooterContainer>
  );
}
