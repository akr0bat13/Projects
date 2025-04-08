import React from 'react'
import logProps from './hoc/log-props.tsx'

const Counter = ({count, countUp, countDown}) => {
  return (
    <div style={{display: 'flex', gap: 20}}>
      <button onClick={countDown}>-</button>
      <div>{count}</div>
      <button onClick={countUp}>+</button>
    </div>
  )
}

export default logProps(Counter)