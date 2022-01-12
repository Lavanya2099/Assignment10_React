import React from 'react'
import useCounter from '../hooks/useCounter'
function CounterTwo() {

    const [count,increment,decrement,reset]= useCounter(10,20)


    return (
        <div>
            <p>CounterTwo- {count}</p>

            <button onClick={()=>{increment()}}>Increment</button>
            <button onClick={()=>{decrement(50)}} >Decrement</button>
            <button onClick={()=>{reset(11)}}>Reset</button>
        </div>
    )
}

export default CounterTwo
