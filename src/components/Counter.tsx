import { ReactElement, useState } from "react"

export default function Counter(): ReactElement {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <button onClick={() => setCount((c) => c + 1)}>
                count is {count}
            </button>
        </div>
    )
}
