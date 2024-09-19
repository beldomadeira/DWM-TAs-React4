import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar 1</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Restar 1</button>
        <button onClick={() => setCount(0)}>Reiniciar</button>
        </div>
    );
    }

export default Counter;