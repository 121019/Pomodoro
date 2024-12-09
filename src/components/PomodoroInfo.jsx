import React from "react";
import { Link } from "react-router-dom";
import "./PomodoroInfo.css";

const PomodoroInfo = () => {
    return (
        <>
            <div className="pomodoro-info">
                Qu'est-ce que la méthode Pomodoro ?
            </div>
            <div className="historic">
                La méthode Pomodoro est une technique de gestion du temps développée par Francesco Cirillo à la fin des années 1980.
                Elle consiste à diviser le travail en intervalles de 25 minutes appelés "pomodoros", suivis d'une courte pause.
                Cela aide à améliorer la productivité et à maintenir une concentration optimale.<br />

                <p className="spacer">
                Après quatre pomodoros, une pause plus longue de 15 à 30 minutes est prise. Cette méthode encourage l'efficacité et prévient l'épuisement.</p>
            </div>
            <img src="/Assets/PomodoroImage.png" alt="Pomodoro" className="pomodoro-image" /> {/* Image insérée ici */}
{/*Image de : https://sarahatimi.com/2020/02/20/le-pomodoro-comment-travailler-efficacement-et-eviter-les-distractions-en-periode-de-rush/*/}

            <div className="back-button-container">
                <Link to="/" className="back-button">Retour</Link>
            </div>
        </>
    );
};

export default PomodoroInfo;
