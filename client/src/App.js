import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Regestry from "./components/regestry/Regestry";
import "./App.css"

export default function App() {

  return(
    <Router>
      <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/regestry" element={<Regestry />} />
      </Routes>
      </div>
    </Router>
  )
}