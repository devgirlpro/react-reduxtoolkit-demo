import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const numberOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number Of IceCreams - {numberOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())} >Order IceCream</button>
        <button onClick={() => dispatch(restocked(4))} >Restocked Icecreams</button>
    </div>
  )
}
