import { useState } from 'react'
import {Header} from '../Components/Header'

/*import fixYou from '../Audios/fixYou.mp3'*/
import fixyouImg from '../Assets/fixyou.jpg'

import play from '../Assets/play.svg'
import pause from '../Assets/pause.svg'
import next from '../Assets/caret-line-right-fill.svg'
import back from '../Assets/caret-line-left-fill.svg'

export function Home() {
    const [activeNight, setActiveNight] = useState(true);
    const [playing, setPlaying] = useState(true);

    const toggleNightMode = (activeNight) => {
        setActiveNight(activeNight);
    }

    const handleButtonPlay = () => {
        setPlaying(!playing);
    }

    return(
        <>
            <Header toggleNightMode={toggleNightMode} />

            <div className={`homeBody ${activeNight ? "homeNight" : "homeDay"}`}>
                <div className="bodyMusic">
                    <div className="bgMusic">
                        <div className="boxMusic">
                            <img src={fixyouImg} alt="capa fix you" className="imageMusic"/>
                            <div className='bodyMusicControls'>
                                <div className='infoMusic'>
                                    <h2>Fix you</h2>
                                </div>
                                
                                <div className="musicControls">
                                    <button className="buttonMusic"><img src={back} alt="voltar" className="back"/></button>
                                    <button className="buttonMusic" onClick={handleButtonPlay}>
                                        <img src={play} alt="play" className={playing ? "play" : "playOn"}/>
                                        <img src={pause} alt="pause" className={playing ? "pause" : "pauseOn"}/>
                                    </button>
                                    <button className="buttonMusic"><img src={next} alt="próxima" className="next"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
                /*<audio preload='metadata' controls >
                    <source src={fixYou} type="audio/mpeg"/>
                </audio>*/