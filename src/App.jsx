
import { useState } from "react"
import Input from "../components/input"
import useCurrencyConvertor from "./customHook/currencyConvertor"

function App() {

  const [amount,setAmount]=useState(' ')
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmout]=useState(' ')

  const currencyInfo=useCurrencyConvertor(from)

  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmout(amount)
    setAmount(convertedAmount)
  }

  const finalAns=()=>{
    setConvertedAmout(amount*(currencyInfo[to]) || 1)
  }
  return (
    <>

      <div className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center " style={{ backgroundImage: `url('https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') `}}>
        <div className="w-[40vw] h-[40vh] backdrop-blur-xl bg-white/30 m-auto flex  flex-col justify-center items-center rounded-3xl">
          <div className="to w-[100%] h-[45%] bg-indigo-700 rounded-3xl">
            <Input
              amount={amount}     
              currencyOption={options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amt)=>setAmount(amt)}
            />
          </div>
          <button className="bg-blue-700 p-2 text-red-50 rounded-xl" onClick={swap}>SWAP</button>
          <div className="form w-[100%] h-[45%] bg-slate-700 rounded-3xl">
            <Input
             amount={convertedAmount}     
              currencyOption={options}
              onAmountChange={(amt)=>setConvertedAmout(amt)}
             onCurrencyChange={(currency)=>setTo(currency)}
             selectCurrency={to}
            />
          </div>
          <button className="bg-yellow-400 rounded-xl p-2" onClick={finalAns} >Convert</button>
        </div>
        
      </div>
      
    </>
  )
}

export default App 