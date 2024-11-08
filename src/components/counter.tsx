'use client'
import React from 'react';
import {incrementByAmount } from './redux/slices/counterSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from './redux/store/store';


const Counter = () => {
  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incrementByAmount(1000))}>Increment by 1000</button>
      <button onClick={() => dispatch(incrementByAmount(2000))}>Increment by 2000</button>
      <button onClick={() => dispatch(incrementByAmount(3000))}>Increment by 3000</button>
    </div>
  );
};

export default Counter;