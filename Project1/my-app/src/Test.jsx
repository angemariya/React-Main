import { useEffect, useState } from "react";

export const Test = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) ?? 1300);
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("Onmount");
    localStorage.setItem("count", count);
  }, [count, name]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev +1)}>Add</button>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
