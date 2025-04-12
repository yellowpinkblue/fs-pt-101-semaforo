import React, {useState} from "react";


export const Semaforo = () => {
    const [colorActivo, setColorActivo] = useState("red");
  
    return (
      <div className="semaforoTrafico">
        <div
          className={`light red ${colorActivo === "red" ? "glow" : ""}`}
          onClick={() => setColorActivo("red")}
        ></div>
        <div
          className={`light yellow ${colorActivo === "yellow" ? "glow" : ""}`}
          onClick={() => setColorActivo("yellow")}
        ></div>
        <div
          className={`light green ${colorActivo === "green" ? "glow" : ""}`}
          onClick={() => setColorActivo("green")}
        ></div>
      </div>
    );
  };
  
  // export default Semaforo;


