import React from 'react'
import InfoSeccion from '../../components/infoSeccion/InfoSeccion'
import {homeObjOne} from './Data'

export default function Home() {


    return (
        <>
            <InfoSeccion {...homeObjOne} />
        </>
    )
}
