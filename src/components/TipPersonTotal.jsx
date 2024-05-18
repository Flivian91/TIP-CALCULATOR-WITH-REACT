import React from "react";

function TipPersonTotal({totalPerson}) {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex flex-col gap-0">
        <h1 className="text-2xl font-mono font-bold text-gray-900">Total</h1>
        <span className="text-base text-gray-600">per person</span>
      </div>
      <span className="text-4xl font-mono font-bold text-gray-900">${totalPerson.toFixed(2)}</span>
    </div>
  );
}

export default TipPersonTotal;
