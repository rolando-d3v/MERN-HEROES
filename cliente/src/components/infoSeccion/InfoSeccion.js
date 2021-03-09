import React from "react";
import { Container } from "../../style/globalStyled";
import { Link } from "react-router-dom";
import * as s from "./InfoSeccion.styled";

export default function InfoSeccion({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  lightText,
  buttonLabel,
  description,
  headline,
  topLine,
  img,
  alt,
  start,
}) {
  return (
    <div>
      <s.InfoSec lightBg={(lightBg, imgStart)}>
        <Container>
          <s.InfoRow imgStart={imgStart}>
            <s.InfoColumn>
              <s.TextWrapper>
                <s.TopLine lightTopLine={lightTopLine}>{topLine}</s.TopLine>
                <s.Heading lightText={lightText}>{headline} </s.Heading>
                <s.Subtitle lightTextDesc={lightTextDesc}>
                  {description}
                </s.Subtitle>
                <Link to="/sign-up">
                  <s.Button>{buttonLabel}</s.Button>
                </Link>
              </s.TextWrapper>
            </s.InfoColumn>
            <s.InfoColumn>
                <s.ImgWrapper start={start} >
                        <s.Img src={img} alt={alt} />
                </s.ImgWrapper>
            </s.InfoColumn>
          </s.InfoRow>
        </Container>
      </s.InfoSec>
    </div>
  );
}
