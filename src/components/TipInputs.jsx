import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function TipInputs({
  amount,
  tip,
  people,
  setPeople,
  setAmount,
  setTip,
  onSubmit,
}) {
  return (
    <div className="py-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 px-2">
          <label className="text-lg text-gray-700 text-bold" htmlFor="amount">
            Bill amount
          </label>
          <input
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="text-xl text-center font-mono font-bold  caret-indigo-600 focus:ring focus:ring-indigo-600 rounded-md outline-none py-2 px-1"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label className="text-xl text-gray-700 text-bold" htmlFor="tip">
            Tip %
          </label>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setTip((prevState) => (prevState < 1 ? 0 : prevState - 1))
              }
              className="px-3 py-1 bg-indigo-400 text-xl rounded text-white"
            >
              <FaMinus />
            </button>
            <input
              value={tip}
              onChange={(e) => setTip(Number(e.target.value))}
              id="tip"
              className="text-xl caret-indigo-600 text-center font-mono font-bold flex-1 focus:ring focus:ring-offset-1 focus:ring-indigo-600 rounded-md outline-none py-2 px-1"
              type="text"
            />
            <button
              onClick={() =>
                setTip((prevState) => (prevState > 99 ? 100 : prevState + 1))
              }
              className="px-3 py-1 bg-indigo-400 text-xl rounded text-white"
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label className="text-xl text-gray-700 text-bold" htmlFor="people">
            Number of people
          </label>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setPeople((prevState) => (prevState < 2 ? 0 : prevState - 1))
              }
              className="px-3 py-1 bg-indigo-400 text-xl rounded text-white"
            >
              <FaMinus />
            </button>
            <input
              id="people"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="text-xl text-center font-mono font-bold  caret-indigo-600 flex-1 focus:ring focus:ring-offset-1 focus:ring-indigo-600 rounded-md outline-none py-2 px-1"
              type="text"
            />
            <button
              onClick={() => setPeople((prevState) => prevState + 1)}
              className="px-3 py-1 bg-indigo-400 text-xl rounded text-white"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TipInputs;
