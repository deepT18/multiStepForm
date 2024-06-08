import React from 'react'

function PlanCard() {
  return (
    <div className="cardContainer">
        <div className="card">
        <div className="card-logo"></div>
        <div>
            <div style={{marginRight:"20px",fontSize:"14px",fontWeight:"bold",color:"#4e5e75"}}>Arcade</div>
            <p style={{fontSize:"12px"}}>$9/month</p>
        </div>
        </div>
    </div>
  )
}

export default PlanCard