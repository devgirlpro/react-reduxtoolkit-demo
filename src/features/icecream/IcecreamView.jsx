import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [inputValue, setInputValue] = useState(1)
  const numberOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number Of IceCreams - {numberOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())} >Order IceCream</button>
        <input 
          type="number" 
          value= {inputValue} 
          onChange={(e) => setInputValue(parseInt(e.target.value))} 
        />
        <button onClick={() => dispatch(restocked(inputValue))} >Restocked Icecreams</button>
    </div>
  )
}
