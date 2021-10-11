import React, { useState } from "react";
import CountViewer from "../CountViewer";
import classes from "./index.module.css";

// type annotation for props 
type AppProps = {
}


const App = ({}:AppProps):JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={classes.container}>
      <header className={classes.heading}>
        <h1 className={classes.headingText}>Counter example</h1>
      </header>
      <main className={classes.main}>
        <CountViewer count={count} />
        <button
          className={classes.incrementButton}
          onClick={():void => setCount((prev) => prev + 1)}
        >
          ➕ Increment
        </button>
      </main>
    </div>
  );
};

export default App;
