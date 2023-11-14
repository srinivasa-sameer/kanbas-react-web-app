import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(7);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Up
      </button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        Down
      </button>
    </div>
  );
};

export default Counter;
