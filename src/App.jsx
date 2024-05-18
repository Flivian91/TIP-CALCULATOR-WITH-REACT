import { useState } from "react";
import "./App.css";
import TipMain from "./components/TipMain";
import { CiCalculator1 } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";

function App() {
  return (
    <div className="flex justify-center items-center mt-5 flex-col ">
      <div className="text-5xl font-mono font-bold text-gray-800 py-5 uppercase flex gap-2">
        <span>
          <CiCalculator1 />
        </span>
        <h1>tip calculator</h1>
        <span>
        <GiMoneyStack />
        </span>
      </div>
      <TipMain />
      <div className="absolute bottom-0  left-0 w-full py-2 bg-gray-300 flex items-center justify-center">
        <small className="text-xl font-mono">All copyright reserved</small>
      </div>
    </div>
  );
}

export default App;
