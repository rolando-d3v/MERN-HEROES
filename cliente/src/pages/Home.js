import React from "react";
import InfoSeccion from "../components/infoSeccion/InfoSeccion";
import Footer from "../layout/footer/Footer";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "../data/Data";

export default function Home() {
  return (
    <>
      <InfoSeccion {...homeObjOne} />
      <InfoSeccion {...homeObjThree} />
      <InfoSeccion {...homeObjTwo} />
      <InfoSeccion {...homeObjFour} />
      <Footer/>
    </>
  );
}
