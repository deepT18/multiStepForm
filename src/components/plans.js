import React from "react";
// import PlanCard from "./planCard"
import Toggle from "./toggleButton.js";

function Plans({ activeStep, setActiveStep,billingTerm}) {
  return (
    <div className="planContainer">
      <div className="heading">
        <h2>Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className="cardContainer">
        <div className="card">
          <div className="arcade-logo"></div>
          <div className="planDetails">
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4e5e75",
                margin: 0,
                padding: 0,
              }}
            >
              Arcade
            </div>
            <p style={{ fontSize: "12px", margin: 0, padding: 0 }}>$9/month</p>
          </div>
        </div>
        <div className="card">
          <div className="arcade-logo"></div>
          <div className="planDetails">
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4e5e75",
                margin: 0,
                padding: 0,
              }}
            >
              Arcade
            </div>
            <p style={{ fontSize: "12px", margin: 0, padding: 0 }}>$9/month</p>
          </div>
        </div>
        <div className="card">
          <div className="arcade-logo"></div>
          <div className="planDetails">
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4e5e75",
                margin: 0,
                padding: 0,
              }}
            >
              Arcade
            </div>
            <p style={{ fontSize: "12px", margin: 0, padding: 0 }}>$9/month</p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#f8f9fe",height:"30px",width:"400px",borderRadius:"10px",marginBottom:"20px",marginTop:"20px"}}>
        <Toggle />
      </div>
      <div>
      <button  onClick={() => setActiveStep(2)}>Back</button>
        <button onClick={() => setActiveStep(3)}>Next Step</button>
        </div>
    </div>
  );
}

export default Plans;
