import React, { useState } from "react";
import { Login } from "./Assets/Login"
import { Success } from "./Assets/Companenta/Success"

function App() {

  const [token, setToken] = useState(localStorage.getItem("userToken") || "[]")

  return (
    <div className="App">
      {token ? <Login token={token} setToken={setToken} /> : <Success />}
    </div>
  );
}

export default App;
