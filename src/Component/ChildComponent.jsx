import React, { useState } from "react";

const ChildComponent = ({ onDataReady }) => {
  const [data, setData] = useState("");

  const handleChange = (event) => {
    const newData = event.target.value;
    setData(newData);
    // Call the callback function to pass data to the parent
    onDataReady(newData);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" value={data} onChange={handleChange} />
    </div>
  );
};

export default ChildComponent;
