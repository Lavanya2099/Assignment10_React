import React, {useState} from 'react'
import useDocument from '../hooks/useDocument';

function Two() {
  const [count, setCount] = useState(0)
  useDocument(count)
  return (
    <div>
        <p>Two- {count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default Two 