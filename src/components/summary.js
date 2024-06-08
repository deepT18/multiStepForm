import React from "react";

function Summary({ activeStep, setActiveStep }) {
  return (
    <div>
      <div>
        <div className="heading">
          <h2>Summary</h2>
          <p>Double check everything looks OK before confirming</p>
        </div>
      </div>
      <button onClick={() => setActiveStep(1)}>Next Step</button>
    </div>
  );
}

export default Summary;
