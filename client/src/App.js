import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css"

export default function App() {

  return(
    <Router>
      <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      </div>
    </Router>
  )
}