import React from "react";
import InfoSeccion from "../../components/infoSeccion/InfoSeccion";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

export default function Home() {
  return (
    <>
      <InfoSeccion {...homeObjOne} />
      <InfoSeccion {...homeObjTwo} />
      <InfoSeccion {...homeObjThree} />
      <InfoSeccion {...homeObjFour} />
    </>
  );
}
