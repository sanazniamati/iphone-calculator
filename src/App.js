import "./App.css";
import Button from "./Button.js";
import { useState } from "react";

const App = () => {
  const [value, setvalue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handelButtonPress = (content) => () => {
    const number = parseFloat(value);

    if (content === "AC") {
      setMemory(null);
      setOperator(null);
      setvalue("0");
      return;
    }
    if (content === "±") {
      setvalue((number * -1).toString());
      return;
    }
    if (content === "%") {
      setMemory(null);
      setOperator(null);
      setvalue((number / 100).toString());
      return;
    }
    if (content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("+");
      setvalue("0");
      return;
    }
    if (content === "-") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("-");
      setvalue("0");
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("×");
      setvalue("0");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setOperator("÷");
      setvalue("0");
      return;
    }
    if (content === "=") {
      if (!operator) return;
      if (operator === "+") {
        setvalue((memory + parseFloat(value)).toString());
      } else if (operator === "-") {
        setvalue((memory - parseFloat(value)).toString());
      } else if (operator === "÷") {
        setvalue((memory / parseFloat(value)).toString());
      } else if (operator === "×") {
        setvalue((memory * parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }
    setvalue(parseFloat(number + content).toString());
  };

  return (
    <div className="App">
      {/* <div className="top">4.34</div> */}
      <div className="display">{value}</div>
      <div className="display-buttons">
        <Button onButtonClic={handelButtonPress} content="AC" type="function" />
        <Button onButtonClic={handelButtonPress} content="±" type="function" />
        <Button onButtonClic={handelButtonPress} content="%" type="function" />
        <Button onButtonClic={handelButtonPress} content="÷" type="operator" />
        <Button onButtonClic={handelButtonPress} content="7" />
        <Button onButtonClic={handelButtonPress} content="8" />
        <Button onButtonClic={handelButtonPress} content="9" />
        <Button onButtonClic={handelButtonPress} content="×" type="operator" />
        <Button onButtonClic={handelButtonPress} content="4" />
        <Button onButtonClic={handelButtonPress} content="5" />
        <Button onButtonClic={handelButtonPress} content="6" />
        <Button onButtonClic={handelButtonPress} content="-" type="operator" />
        <Button onButtonClic={handelButtonPress} content="1" />
        <Button onButtonClic={handelButtonPress} content="2" />
        <Button onButtonClic={handelButtonPress} content="3" />
        <Button onButtonClic={handelButtonPress} content="+" type="operator" />
        <Button onButtonClic={handelButtonPress} content="0" />
        <Button onButtonClic={handelButtonPress} content="." />
        <Button onButtonClic={handelButtonPress} content="=" type="operator" />
      </div>
      {/* <div className="bottom">-</div> */}
    </div>
  );
};
export default App;
