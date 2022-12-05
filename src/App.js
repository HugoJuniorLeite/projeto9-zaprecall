import Body from "./components/Body";
import GlobalStyle from '../src/assets/styles/GlobalStyle';
import { useState } from "react";
import Login from "./components/Login";

function App() {

  const [login,setLogin]=useState(true)
  return (
    <>
      <GlobalStyle />
      {login ===true? <Login setLogin={setLogin}/> :<Body />}
    </>
  );
}

export default App;
