import React from 'react';
import { useSelector } from 'react-redux';

export const IcecreamView = () => {
  const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIcecreams)
  return (
    <div>
        <h2>Number Of IceCreams - {numberOfIcecreams}</h2>
        <button>Order IceCream</button>
        <button>Restocked Icecreams</button>
    </div>
  )
}

