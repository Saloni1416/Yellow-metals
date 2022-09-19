import React from "react";
import "./heroSection.css";
import Button from "@mui/material/Button";

const Maincard = () => {
  return (
    <div>
      <div className="maincard">
        <div className="container1">
          <h2 className="maincardheading" style={{color:"#000000",marginTop:"7rem"}}>
          A few clicks away from <br/>Login into your <span style={{color:"#0D51D2"}}>Yellowmetals Account</span>
          </h2>
          <p style={{color:"#000000",fontSize:"2rem",textAlign:"center"}}>2,768 Transactions in the last 1 hour Start investing in gold <br/> starting as low as ₹10</p>
          <Button
            sx={{ textTransform: "capitalize"}}
            variant="contained"
            className="ViewProductsbtn"
          >
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Maincard;