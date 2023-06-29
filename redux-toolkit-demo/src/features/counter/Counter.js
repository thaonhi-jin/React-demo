import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const amountInput = useRef()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
        <input ref={amountInput} />
        <button
          aria-label="Increment value by Amount"
          onClick={() => dispatch(incrementByAmount(amountInput.current.value, 3))}
        >
          Increment
        </button>
      </div>
    </div>
  )
}