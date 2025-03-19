import { useState, useEffect } from 'react'
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
    const [currentTime, setCurrentTime] = useState(0);

    const toggleNightMode = (activeNight) => {
        setActiveNight(activeNight);
    };

    const handleButtonPlay = () => {
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('timeupdate', updateTime);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
        };
    }, [audio]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

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
                                        <div className='time'>{formatTime(currentTime)}</div>
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