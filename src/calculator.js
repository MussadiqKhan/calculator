import React, { useState } from "react";
import "./App.css";
import * as math from "mathjs";

function Calculator() {
  const [num, setNum] = useState([]);
  const handleClick = e => {
    const value = e.target.value;
    switch (value) {
      case "C":
        setNum([]);
        break;
      case "=":
        calculateOperations();
        break;
      case "t":
        let nums = num.splice(-1, 1);
        setNum(num => [...num]);
        console.log(num);
        break;
      default:
        const item = e.target.value;
        setNum(num => [...num, item]);
        break;
    }
  };
  const calculateOperations = () => {
    let result = num.join("");
    if (result) {
      result = math.evaluate(result);
      result = math.format(result, { precision: 14 });
      setNum(num => [...result]);
      console.log(result);
    }
  };

  return (
    <div className="Calculator">
      <div className="screen">{num}</div>
      <div className="keypad">
        <div className="keypoad1">
          <button onClick={handleClick} label="1" value="1">
            1
          </button>
          <button onClick={handleClick} label="2" value="2">
            2
          </button>
          <button onClick={handleClick} label="3" value="3">
            3
          </button>
          <button className="plus" onClick={handleClick} label="3" value="+">
            +
          </button>
        </div>
        <div className="keypoad1">
          <button onClick={handleClick} value="4">
            4
          </button>
          <button onClick={handleClick} value="5">
            5
          </button>
          <button onClick={handleClick} label="6" value="6">
            6
          </button>
          <button className="minus" onClick={handleClick} label="1" value="-">
            -
          </button>
        </div>
        <div className="keypoad1">
          <button onClick={handleClick} label="1" value="7">
            7
          </button>
          <button onClick={handleClick} label="1" value="8">
            8
          </button>
          <button onClick={handleClick} label="1" value="9">
            9
          </button>
          <button className="mult" onClick={handleClick} label="1" value="*">
            *
          </button>
        </div>
        <div className="keypoad1">
          <button onClick={handleClick} label="1" value="0">
            0
          </button>
          <button onClick={handleClick} label="1" value=".">
            .
          </button>
          <button onClick={handleClick} label="1" value="C">
            C
          </button>
          <button className="div" onClick={handleClick} label="1" value="/">
            /
          </button>
        </div>
        <div className="keypoad1">
          <button onClick={handleClick} label="1" value="t">
            &larr;
          </button>
          <button className="equal" onClick={handleClick} label="1" value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
