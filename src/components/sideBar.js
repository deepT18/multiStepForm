import React from "react";
import "./components.css";

function Sidebar({ activeStep, setActiveStep }) {
  return (
    <div className="sideBar">
      <div className="steps">
        <div className="step" onClick={() => setActiveStep(1)}>
          <div className="circle">1</div>
          <div className="info">
            <p>Step 1</p>
            <h5>YOUR INFO</h5>
          </div>
        </div>
        <div className="step" onClick={() => setActiveStep(2)}>
          <div className="circle">2</div>
          <div className="info">
            <p>Step 2</p>
            <h5>SELECT PLAN</h5>
          </div>
        </div>
        <div className="step" onClick={() => setActiveStep(3)}>
          <div className="circle">3</div>
          <div className="info">
            <p>Step 3</p>
            <h5>ADD-ONS</h5>
          </div>
        </div>
        <div className="step" onClick={() => setActiveStep(4)}>
          <div className="circle">4</div>
          <div className="info">
            <p>Step 4</p>
            <h5>SUMMARY</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
