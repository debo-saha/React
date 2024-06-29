function Input({
    amount,
    onAmountChange,
    selectCurrency = ' ',
    onCurrencyChange,
    currencyOption = []
}) {
    return (
        <div className="flex " style={{justifyContent:"space-evenly", padding:"35px"}}>
            <div className="flex" style={{gap:"20px"}}>
                <label className="text-white " htmlFor="amount">Amount</label>
                <input

                    id="amount"
                    className="outline-none w-full px-2 rounded-lg py-1"
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <select
                aria-placeholder="Select"
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOption.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}

export default Input
