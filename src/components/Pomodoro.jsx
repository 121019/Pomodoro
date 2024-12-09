import React, { useState, useEffect } from "react";
import "./Pomodoro.css";  // Assure-toi que le fichier CSS est importé

const Pomodoro = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes en secondes
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isRunning) {
            clearInterval(interval);
        } else {
            clearInterval(interval);
            alert("Pomodoro terminé ! Prends une pause.");
        }

        return () => clearInterval(interval); // Nettoyage de l'intervalle
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
      <><div className="Pomodoro">Pomodoro</div>
      <div className="pomodoro-wrapper">

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
      </div></>
    );
};

export default Pomodoro;
