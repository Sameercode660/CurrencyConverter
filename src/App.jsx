import { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [selectCurrency, setSelectCurrency] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <>
      <div className="w-1/3 bg-slate-100 bg-opacity-80 flex justify-center items-center flex-col rounded ">
        <div className="w-11/12 z-0 relative top-5 right-2">
          <Input
            label={"From"}
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>
        <button
          className="w-20 h-8 bg-blue-600 rounded-md relative z-50 right-2 text-white border-2 border-white"
          onClick={swap}
        >
          Swap
        </button>
        <div className="w-11/12 z-0 relative bottom-5 right-2">
          <Input
            label={"To"}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
          />
        </div>
        <button
          className="w-11/12 relative bottom-4 bg-blue-600 text-white h-9 rounded-md text-center "
          onClick={convert}
        >
          Convert 
          {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </>
  );
}

export default App;
