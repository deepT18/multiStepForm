import React, { useState } from 'react';
import './components.css';  // Ensure you include your CSS here or within a <style> tag in this file

function Toggle() {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-switch">
      <label style={{fontSize:"13px",padding:"10px"}} htmlFor="toggle">Monthly</label>
      <label className="switch">
        <input type="checkbox" id="toggle" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <label style={{fontSize:"13px",padding:"10px"}} htmlFor="toggle">Yearly</label>
    </div>
  );
}

export default Toggle;