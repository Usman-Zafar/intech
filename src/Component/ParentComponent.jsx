import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState("");

  // Callback function to receive data from the child component
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent onDataReady={handleDataFromChild} />
      {/* Render the data received from the child */}
      <p>Data from Child: {dataFromChild}</p>
    </div>
  );
};

export default ParentComponent;
