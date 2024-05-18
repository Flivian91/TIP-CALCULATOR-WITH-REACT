import React from "react";
import TipAmount from "./TipAmount";
import TipPersonTotal from "./TipPersonTotal";
import TipTotalAmount from "./TipTotalAmount";
import TipReset from "./TipReset";
import { useState } from "react";

function TipDisplay({ totalTip, totalPerson, totalAmount, onReset }) {
  return (
    <div className="flex flex-col py-5 gap-5">
      <TipAmount totalTip={totalTip} />
      <TipPersonTotal totalPerson={totalPerson} />
      <TipTotalAmount totalAmount={totalAmount} />
      <TipReset onReset={onReset} />
    </div>
  );
}

export default TipDisplay;
