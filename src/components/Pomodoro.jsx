import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Pomodoro.css";
import alarmSound from "/Assets/Alarm.wav"; // Assurez-vous que le chemin est correct

const Pomodoro = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes en secondes
    const [isRunning, setIsRunning] = useState(false);
    const audioRef = useRef(null); // Référence pour le son

    useEffect(() => {
        let interval;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isRunning) {
            clearInterval(interval);
        } else if (timeLeft === 0) {
            clearInterval(interval);
            audioRef.current.play(); // Joue le son lorsque le timer est terminé
            alert("Pomodoro terminé ! Prends une pause.");
        }

        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setTimeLeft(25 * 60); // Réinitialisation à 25 minutes
        setIsRunning(false);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="pomodoro-wrapper">
            <audio ref={audioRef} src={alarmSound} /> {/* Utilisez le fichier importé */}
            <div className="Pomodoro">Pomodoro</div>
            <div className="pomodoro-container">
                <div className="gothic-text">{formatTime(timeLeft)}</div>
                <div className="button-container">
                    <button className="button" onClick={startTimer}>
                        {isRunning ? "Pause" : "Démarrer"}
                    </button>
                    <button className="button" onClick={resetTimer}>
                        Réinitialiser
                    </button>
                </div>
            </div>
            <div className="info-link">
                <Link to="/info" className="buttonInfo">En savoir plus sur la méthode Pomodoro</Link>
            </div>
        </div>
        
    );
};

export default Pomodoro;
