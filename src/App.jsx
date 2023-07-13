import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./route/router";
import AuthContextProvider from "./contexts/auth-context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
