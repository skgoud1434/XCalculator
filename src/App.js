import React, { useState } from "react";
import "./styles.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [res, setResult] = useState("");
  const [data, setData] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      if (!input.trim()) {
        setError("Error!");
        return;
      }
      try {
        setData(eval(input));
      } catch (err) {
        setError("Error");
      }
    } else {
      setInput((prevInput) => prevInput + value);
      setError("");
    }
  };

  const clearInput = () => {
    setInput("");
    setData("");
    setError("");
  };

  return (
    <div className="App">
      <h2>Simple Calculator</h2>
      <input type="text" value={input} readOnly />
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      <div>{data}</div>
      <br />
      <div className="button">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div className="button">
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div className="button">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div className="button">
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => clearInput()}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div></div>
    </div>
  );
}

export default Calculator;

// **********************************************8

// import "./styles.css";
// import { useState } from "react";
// export default function App() {
//   const [data, setData] = useState(" ");

//   const [res, setRes] = useState(false);

//   const [input, setInput] = useState("");

//   const [show, setShow] = useState("");

//   const handleButton = (e) => {
//     if (e.target.value === "=") {
//       if (!e.target.value.trim()) {
//         // setshow("Error");
//         return;
//       }
//     } else {
//       setInput(input + e.target.value);
//       setData(data + e.target.value);
//       setRes(false);
//     }
//   };

//   const handleResult = () => {
//     if (input.trim()) {
//       try {
//         setData(eval(data));
//         setRes(true);
//       } catch (err) {
//         setData(data);
//         // setShow("Invalid Expression");
//       }
//     }
//   };

//   const eraseData = () => {
//     setData(" ");
//     setInput("");
//   };

//   return (
//     <div className="App">
//       <h1>React Calculator</h1>
//       <input type="text" name="" id="" value={input} />
//       <div>{res ? data : " "}</div>
//       {/* {show} */}
//       <div className="container">
//         <div>
//           <button onClick={handleButton} id="7" value={7}>
//             7
//           </button>
//           <button onClick={handleButton} id="8" value={8}>
//             8
//           </button>
//           <button onClick={handleButton} id="9" value={9}>
//             9
//           </button>
//           <button id="+" onClick={handleButton} value={"+"}>
//             +
//           </button>
//         </div>
//         <div>
//           <button id="4" onClick={handleButton} value={4}>
//             4
//           </button>
//           <button id="5" onClick={handleButton} value={5}>
//             5
//           </button>
//           <button id="6" onClick={handleButton} value={6}>
//             6
//           </button>
//           <button onClick={handleButton} id="-" value={"-"}>
//             -
//           </button>
//         </div>
//         <div>
//           <button id="1" onClick={handleButton} value={1}>
//             1
//           </button>
//           <button id="2" onClick={handleButton} value={2}>
//             2
//           </button>
//           <button id="3" onClick={handleButton} value={3}>
//             3
//           </button>

//           <button id="*" onClick={handleButton} value={"*"}>
//             *
//           </button>
//         </div>
//         <div>
//           <button onClick={eraseData}>C</button>
//           <button onClick={handleButton} id="0" value={0}>
//             0
//           </button>

//           <button onClick={handleResult} id="=">
//             =
//           </button>
//           <button onClick={handleButton} id="/" value={"/"}>
//             /
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
