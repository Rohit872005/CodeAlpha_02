import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "../styles.css";

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
  "C",
];

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
