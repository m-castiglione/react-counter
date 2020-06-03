import React from 'react'
import Counter from './Counter'

export default function ButtonPad() {
    return (
        <div>
            <button onClick={this.Counter.increment}>Up Button</button>
            <button onClick={Counter.prototype.decrement}>Down Button</button>
            <button onClick={Counter.prototype.reset}>Reset Button</button>
        </div>
    )
}
