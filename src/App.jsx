import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
import GettingStarted from "./onboarding/GettingStarted";
import Layout from "./onboarding/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoDetailsLayout from "./onboarding/InfoDetailsLayout";
import LoginLayout from "./login/LoginLayout";
import ProtectedRoute from "./RouteProtection/ProtectedRoute";
import SignUpLayout from "./onboarding/SignUpLayout";

function App() {
  return (
    <div className="appLayout ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/sign-up" element={<SignUpLayout/>}/>
          <Route path="/on-boarding" element={<InfoDetailsLayout />} />
          <Route path="/login/*" element={<LoginLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
