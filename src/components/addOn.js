import React from "react";

function AddOn({ activeStep, setActiveStep }) {
  return (
    <div>
      <div>
        <div className="heading">
          <h2>Pick add-ons</h2>
          <p>Add-ons help enhancing your gaming experience</p>
        </div>
      </div>
      <button onClick={() => setActiveStep(4)}>Next Step</button>
    </div>
  );
}

export default AddOn;
