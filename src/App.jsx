import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
import GettingStarted from "./onboarding/GettingStarted";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GettingStarted />
    </>
  );
}

export default App;
