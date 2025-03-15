import { useState } from 'react'
import {Header} from '../Components/Header'

export function Home() {
    const [activeNight, setActiveNight] = useState(true);

    const toggleNightMode = (activeNight) => {
        setActiveNight(activeNight);
    }

    return(
        <>
            <Header toggleNightMode={toggleNightMode} />

            <div className={`homeBody ${activeNight ? "homeNight" : "homeDay"}`}>
            </div>
        </>
    )
}