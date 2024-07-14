// 6. useCallback

// Purpose: Memoizes a function, optimizing performance by preventing unnecessary re-creations.

// Example:

import React, { useCallback, useState } from 'react';

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <p>Count: {count}</p>
    </div>
  );
}
