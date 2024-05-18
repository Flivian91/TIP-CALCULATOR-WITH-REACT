import React, { useState } from "react";
import TipInputs from "./TipInputs";
import TipDisplay from "./TipDisplay";

function TipMain() {
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);
  // Submit functionalities
  function handleSubmit(e) {
    e.preventDefault();
  }

  const totalTip = (amount * (tip / people)) / 100;

  const totalAmount = amount + totalTip;
  const totalPerson = totalAmount / people;
  function handleReset(){
    setAmount(0)
    setPeople(1)
    setTip(10)
  }
  return (
    <div className="w-3/4 bg-gray-200 grid grid-cols-2 gap-3 shadow-xl py-4 px-2">
      <TipInputs
        amount={amount}
        tip={tip}
        people={people}
        setPeople={setPeople}
        setTip={setTip}
        setAmount={setAmount}
        onSubmit={handleSubmit}
      />
      <TipDisplay
        totalTip={totalTip}
        totalPerson={totalPerson}
        totalAmount={totalAmount}
        onReset={handleReset}
      />
    </div>
  );
}

export default TipMain;
