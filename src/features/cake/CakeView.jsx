import React from 'react';
import { useSelector } from 'react-redux';

export const CakeView = () => {
 const numberOfCakes =  useSelector((state) => state.cake.numberOfCakes)
  return (
    <div>
        <h2>Number Of Cakes -{numberOfCakes} </h2>
        <button>Order Cake</button>
        <button>Restore Cakes</button>
    </div>
  )
}

