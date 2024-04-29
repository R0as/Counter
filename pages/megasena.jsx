import { useState,useEffect } from "react";
import { mega } from "../functions/mega";
import NumeroDisplay from "@/components/numeroDisplay";

export default function megasena() {
  const [numeros, setNumeros] = useState(mega());

  function renderNumeros() {
    return numeros.map(
        numero => <NumeroDisplay key={numero} numero ={numero}/>
    )
  }
  return (
    <div>
      <h1>Mega Sena</h1>
      <div
      style ={{
        display: "flex"
      }}>
        {renderNumeros()}
      </div>
    </div>
  );
}
