import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authentication";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUpForm />
      <Authenticate />
    </>
  );
}

export default App;
