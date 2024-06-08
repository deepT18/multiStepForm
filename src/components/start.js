import React, { useState } from "react";
import Sidebar from "./sideBar";
import "./components.css";
import PlanPage from "./plans"
import YourInfo from "./yourInfo";
import AddOn from "./addOn";
import Summary from "./summary";

function Form() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div>
      <div className="container">
        <div className="formContainer">
          <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />
          <div className="form">
            {activeStep === 1 && (
              <YourInfo activeStep={activeStep} setActiveStep={setActiveStep}/>
            )}
            {activeStep === 2 && (
              <PlanPage activeStep={activeStep} setActiveStep={setActiveStep}/>
            )}
            {activeStep === 3 && (
              <AddOn activeStep={activeStep} setActiveStep={setActiveStep}/>
            )}
            {activeStep === 4 && (
              <Summary activeStep={activeStep} setActiveStep={setActiveStep}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
