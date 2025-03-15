import Moon from '../Assets/moon.svg';
import Sun from '../Assets/sun-dim.svg';
import { useState } from 'react';

export function Header({toggleNightMode}) {
    const [activeNight, setActiveNight] = useState(true);

    const handleButton = () => {
        setActiveNight(!activeNight);
        toggleNightMode(!activeNight);
    }

    return(
        <>
            <div className="headerBody">
                <h1 className="logo">la & ce</h1>
                <button className={activeNight ? "buttonHeader" : "buttonHeaderDay"} onClick={handleButton}>
                    <img src={Moon} alt="night" className={activeNight ? "buttonNight" : "buttonNightActive"}/>
                    <img src={Sun} alt="night" className={activeNight ? "buttonDay" : "buttonDayActive"}/>
                </button>
            </div>
        </>
    )
}