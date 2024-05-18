import React from "react";
import { BiReset } from "react-icons/bi";
function TipReset({onReset}) {
  return (
    <div className="flex flex-col px-3">
      <button
        onClick={onReset}
        className="flex gap-2 py-2 text-2xl font-mono items-center justify-center bg-gray-400 rounded text-white"
      >
        <span>
          <BiReset />
        </span>
        Reset
      </button>
    </div>
  );
}

export default TipReset;
