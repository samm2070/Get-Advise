import { useState } from "react";

import './App.css';

function App() {


  const [advice, setAdvice] = useState("Click the Button to fetch Advice");


  async function getAdvice() {

    const res = await fetch("https://api.adviceslip.com/advice");

    const data = await res.json();

    setAdvice(data.slip.advice);



  }


  return (
    <div className="outer">

      <div className="child">
        <h1 className="advice">
          {advice}
        </h1>

        <button className="click" onClick={getAdvice} >Get Advice</button>
      </div>

    </div>
  );
}

export default App;
