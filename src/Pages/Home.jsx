import { useState } from 'react'
import {Header} from '../Components/Header'

/*import fixYou from '../Audios/fixYou.mp3'*/
import fixyouImg from '../Assets/fixyou.jpg'

import play from '../Assets/play.svg'
import pause from '../Assets/pause.svg'

import audioFile from '../Audios/fixYou.mp3'

export function Home() {
    const [activeNight, setActiveNight] = useState(true);
    const [playing, setPlaying] = useState(false); 
    const [audio] = useState(new Audio(audioFile));

    const toggleNightMode = (activeNight) => {
        setActiveNight(activeNight);
    }

    const handleButtonPlay = () => {
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
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
                                    <button className={activeNight ? "buttonMusicNight" : "buttonMusicDay"} onClick={handleButtonPlay} >
                                        <img src={play} alt="play" className={playing ? "playOn" : "play"}/>
                                        <img src={pause} alt="pause" className={playing ? "pauseOn" : "pause"}/>
                                    </button>
                                    <div className="timelineBody">
                                        <div className='line'></div>
                                        <div className='time'>0:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}