import React from "react";
import { Button,Stack } from '@mui/material';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import "./PriceAlert.css";
import priceTag from "./images/price-tag.jpg";
import phone from "./images/phone.jpg";

function PriceAlert() {
   
  return (
    <div className='priceAlert' style={{paddingLeft:"11.2rem",marginTop:"109px"}}>
    <div className="tagAndh1">
      <img 
      src={priceTag} alt="hola" className="dollar" />
      <h1 style={{fontSize:"6.12rem",paddingLeft:"1%",font: "normal normal 600 98px/94px Poppins"}}><strong>Price Alerts</strong></h1>
    </div>

    <div >
    <p className="paragraph">Want to know the best time to purchase gold coins? Leave it with us. We'll keep an eye on the prices and let you know when there's a great deal on your favourite coins</p>
    </div>


    <div className='iconAndPhone' style={{marginTop:"65px"}} >
    <img style={{width:"32px",height:"32px"}} src={phone} alt="Hola" />
    <span style={{paddingLeft:".5%",fontSize:"1.5rem"}}>Mobile No</span>
    </div>
    
    <Stack direction="row" spacing={2} className="EnterphNo" >
    <Button variant="outlined" endIcon={<ArrowDropDown />} style={{width:"118px",height:"57px",borderColor:"#939393",color:"#000000",font: "normal normal normal 26px/43px Open Sans"}} >
      91+
    </Button>
    <input type="tel"  className="TextField" placeholder="Enter Mobile No" style={{font: "normal normal normal 26px/43px Open Sans",paddingLeft:"27px"}}/>
    <Button variant="contained" 
    style={{textTransform:"capitalize",width: "238px",
    height: "60px",fontSize:"2rem"}}>Submit</Button>
  
  </Stack>
    
  </div>
  )
}

export default PriceAlert;
