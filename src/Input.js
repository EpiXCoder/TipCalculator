import React, { useState } from 'react';
import './Input.css';


function Input() {
  const [bill, setBill] = useState(0)
  const [tipPercent, setTipPercent] = useState(0)
  const [split, setSplit] = useState(1)

  const [Total, setTotal] = useState('')
  const [tipOutput, setTipOutput] = useState('')
  const [splitOutput, setSplitOutput] = useState('')

  const handleCalc = () => {
    const tipCalc = (Number(bill) * (Number(tipPercent)/100));
    const totalCalc = (Number(bill) + tipCalc);
    const perPerson = (totalCalc / Number(split));
  
    setTotal(totalCalc);
    setTipOutput(tipCalc);
    setSplitOutput(perPerson);
  }

  return (
    <div>
      <form className='form'>
        <p>Bill Amount $:  
        <input 
          type="number"
          value={bill}
          min = "0"
          step="0.01"
          onChange={(e) => setBill(e.target.value )}
        /></p><br/>
        <p>Tip:  
        <input 
          type="number"
          value={tipPercent}
          min = "0"
          max = "100"
          onChange={(e) => setTipPercent(e.target.value )}
        />%</p><br/>
        <p>Split between 
        <input 
          type="number"
          min="0"
          max="1000"
          value={split}
          onChange={(e) => setSplit(e.target.value )}
        />
         people.</p><br/>
      </form>
      <button type="button" onClick={() => handleCalc()}>Calculate</button>
      <p>Tip Amount: ${Number(tipOutput).toFixed(2)}</p>
      <p>Total : ${Number(Total).toFixed(2)}</p>
      <p>Each person owing: ${Number(splitOutput).toFixed(2)}</p>
    </div>
  )
}

export default Input;