import React from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions= [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) {
  return (
    <div className='text-black bg-white w-full h-28 p-3 flex justify-between items-center rounded-md m-2'>
       <div>
            <label htmlFor="curinput"
                className='block mb-2
                text-gray-400'
            >{label}</label>
            <input type="number"
                value={amount}
                className='outline-none'
                disabled = {amountDisable}
                onChange={(e) => onAmountChange && onAmountChange(+e.target.value)}
            />
       </div>
       <div>
        <label htmlFor=""
            className='block text-gray-400'
        >Currency Type</label>
        <select name="" id=""
            className='bg-gray-200 rounded pl-1 pr-1 outline-none mt-2'
            value={selectCurrency}
            onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled={currencyDisable}
        >
            <option value="usd">usd</option>
            {
                currencyOptions.map((currency)=>
                (<option key={currency} value={currency}>{currency}</option>)
                )
            }
        </select>
       </div>
    </div>
  )
}

export default Input
