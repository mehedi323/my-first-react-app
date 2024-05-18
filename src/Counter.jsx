import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAddCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleRedues = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleAddCount}>Add Count</button>
            <button onClick={handleRedues}>Redues</button>
        </div>
    )
}