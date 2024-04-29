import NumeroDisplay from "@/components/numeroDisplay";
import { useState } from "react";

export default function contador() {
  const [numero, setNumero] = useState(0);

  function mais() {
    setNumero(numero + 1);
  }

  function menos() {
    setNumero(numero - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador</h1>
      <NumeroDisplay numero={numero}></NumeroDisplay>
      <div>
        <button onClick={menos}>-</button>
        <button onClick={mais}>+</button>
      </div>
    </div>
  );
}
