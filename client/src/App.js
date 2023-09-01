import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div className="App">{!isLoggedIn ? <LoginPage setIsLoggedIn={setIsLoggedIn}/> : <HomePage />}</div>;
}

export default App;
