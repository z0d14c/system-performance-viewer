import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';

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
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
