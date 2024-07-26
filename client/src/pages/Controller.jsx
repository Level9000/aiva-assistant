import React from 'react';
import './Controller.css'
import {useWebSocket} from "../hooks/WebSocketContext";
import scene1Part1 from "../audio/scene-1-part-1.mp3"
import scene1Part2 from "../audio/scene-1-part-2.mp3"
import scene1Part3 from "../audio/scene-1-part-3.mp3"
import scene1Part4 from "../audio/scene-1-part-4.mp3"
import scene2Part1 from "../audio/scene-2-part-1.mp3"
import scene2Part2 from "../audio/scene-2-part-2.mp3"
import scene2Part3 from "../audio/scene-2-part-3.mp3"
import scene2Part4 from "../audio/scene-2-part-4.mp3"


const Controller = () => {
    const {ws} = useWebSocket();

    const audioFiles = {
        scene1Part1,
        scene1Part2,
        scene1Part3,
        scene1Part4,
        scene2Part1,
        scene2Part2,
        scene2Part3,
        scene2Part4,
    };

    const playAudio = (audioFileKey) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send("start animation");
            console.log("animation message sent from controller to server")

            const audioSrc = audioFiles[audioFileKey];
            if (audioSrc) {
             const audioPlayer = new Audio(audioSrc);
                audioPlayer.play().catch(e => console.error("Playback failed:", e));
            } else {
             console.warn("Audio file not found:", audioFileKey);
            }
        } else {
            console.log("WebSocket is not ready.");
        }
    };

    return (
        <div className="control-panel">
            <div className="nav-buttons-container">
                <div className="scene" id="scene1">
                    <h1 className="headers">Scene 1</h1>
                    <button className="nav-buttons" onClick={() => playAudio('scene1Part1')}>1</button>
                    <button className="nav-buttons" onClick={() => playAudio('scene1Part2')}>2</button>
                    <button className="nav-buttons" onClick={() => playAudio('scene1Part3')}>3</button>
                    <button className="nav-buttons" onClick={() => playAudio('scene1Part4')}>4</button>
                </div>
                <div className="scene" id="scene2">
                    <h1 className="headers">Scene 2</h1>
                    <button className="nav-buttons" onClick={() => playAudio('scene2Part1')}>1</button>
                    <button className="nav-buttons" onClick={() => playAudio('scene2Part2')}>2</button>
                    <button className="nav-buttons" onClick={() => playAudio('scene2Part3')}>3</button>
                    <button className="nav-buttons" onClick={() => playAudio('scene2Part4')}>4</button>
                </div>
            </div>
        </div>
    );
};

export default Controller;