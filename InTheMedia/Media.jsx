import React from 'react';
import "./Media.css"
import media from "./images/media.jpg"

function Media() {
  return (
    <div>
    <h1 className="heading" style={{textAlign:"center"}} >In the Media</h1>
    <div>
    <img className='media' style={{margin: "0 auto",
      display: "block",width: "2068px",
      height: "648px"}} src={media} alt="Hola" />
    </div>
    </div>
  )
}

export default Media