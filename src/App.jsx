import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

 import Pomodoro from './components/Pomodoro';
 import './index.css';
 import './components/Pomodoro';
 import PomodoroInfo from "./components/PomodoroInfo";

 
function App() {
  return (    
   <Router>
    <div>
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        <Route path="/info" element={<PomodoroInfo />} />
      </Routes>
      </div>
    </Router>
     
  );
}

export default App;

