import React from "react";
// import logo from './logo.svg';
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Forgetpassword from "./components/Forgetpassword";
import Resetpassword from "./components/Resetpassword";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <br />
        <br />
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/Forgetpassword" element={<Forgetpassword />} />
          <Route path="/Resetpassword" element={<Resetpassword />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Route path="/updateQuiz" element={<UpdateQuiz />} /> */}
          {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
          {/* <Route path="/userQuizzes" element={<UserQuizzes />} /> */}
          <Route
          // path="/question"
          // element={<MainQues/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
