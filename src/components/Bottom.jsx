import React from 'react'

function Bottom(props) {
  return (
    <div className="bottom">
       <div className="feels"><p className="bold">65°</p><p>Feels Like</p></div>
       <div className="humidity"><p className="bold">20%</p><p>Humidity</p></div>
       <div className="wind"><p className="bold">12 MPH</p><p>Wind Speed</p></div>
        </div>
  )
}

export default Bottom