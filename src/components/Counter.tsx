import { ReactNode } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({setCount, children}: CounterProps) => {

    return (
    <div>
        <h1>{children}</h1>
        <button onClick={() => setCount(prev => prev +1)}>plus +</button>
        <button onClick={() => setCount(prev => prev -1)}>minus -</button>
    </div>
  )
}
export default Counter