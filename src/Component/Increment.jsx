import React, { useState } from "react";
import { Button } from "@mui/material";
const Increment = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Number: {count}</h2>
      <Button variant="contained" onClick={handleIncrement}>
        Increment
      </Button>
      <Button variant="outlined" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
};

export default Increment;
