import React, { FC, PropsWithChildren, useState } from "react";
import Counter from "./components/Counter.tsx";

interface IApp extends PropsWithChildren {}

const App: FC<IApp> = () => {
  const [state, setState] = useState(0)

  const onCountUp = () => {
    setState(state + 1)
  }
  const onCountDown = () => {
    setState(state - 1)
  }
  return (
    <div >
      <Counter count={state} countDown={onCountDown} countUp={onCountUp}/>
    </div>
  );
}

export default App;
