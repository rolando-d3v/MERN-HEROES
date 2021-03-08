import React from "react";
import { Container } from "../../style/globalStyled";
import * as s from "./InfoSeccion.styled";

export default function InfoSeccion({ lightBg }) {
  return (
    <div>
      <s.InfoSec lightBg={lightBg}>
        <Container>
          <s.InfoRow>
            <s.InfoColumn>
              <s.TextWrapper> hola mundo</s.TextWrapper>
            </s.InfoColumn>
          </s.InfoRow>
        </Container>
      </s.InfoSec>
    </div>
  );
}
