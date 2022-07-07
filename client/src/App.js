import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Regestry from "./components/regestry/Regestry";
import Login from "./components/login/Login";
import { InfoContextProvider } from "./context/InfosContext";
import "./App.css"

export default function App() {

  return(
    <Router>
      <div className="app">
      <InfoContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/regestry" element={<Regestry />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </InfoContextProvider>
      </div>
    </Router>
  )
}