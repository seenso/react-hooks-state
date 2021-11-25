import React, { useState } from "react"; //import both React and the useState hook

function Counter() {
  const [count, setCount] = useState(0); //0 is the initial val of count

  function increment() {
    console.log(`before setState: ${count}`)
    setCount((currentCount) => currentCount + 1);
    // setCount((currentCount) => currentCount + 1);
    console.log(`after setState: ${count}`)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
