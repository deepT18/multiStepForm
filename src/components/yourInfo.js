import React from "react";

function YourInfo({ activeStep, setActiveStep }) {
  return (
    <div>
      <div className="heading">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" id="phoneNumber" placeholder="e.g. +1 234 567 890" />
      </div>
      <button onClick={() => setActiveStep(2)}>Next Step</button>
    </div>
  );
}

export default YourInfo;
