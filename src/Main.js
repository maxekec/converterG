import React, { useState } from "react";
import App from "./App.js";
const MainNum = ({ counter }) => {
  return <h2>MainNum Counter: {counter}</h2>;
};

const Main = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (number) => {
    setCounter(counter + number);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleCounter(1)}>Increment</button>
      <button onClick={() => handleCounter(-1)}>Decrement</button>
      <MainNum counter={counter} />
    </div>
  );
};

export default Main;
