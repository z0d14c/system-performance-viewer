import React from 'react'
import RaisedButton from 'material-ui/Button';

export const Counter = ({ counter, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <RaisedButton className='btn btn-primary' onClick={increment}>
      Increment
    </RaisedButton>
    {' '}
    <RaisedButton className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </RaisedButton>
  </div>
)

export default Counter
