import React, { useState } from "react";

export default function StopWatch() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>StopWatch</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}
