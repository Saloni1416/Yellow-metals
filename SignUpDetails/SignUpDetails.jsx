// order summary
import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import "./SignUpDetails.css";
import write from "./Images/write.jpg";
import upArrow from "./Images/up.jpg";
import downArrow from "./Images/downArrow.jpg";

//signup tab
function SignUpDetails() {
  return (
    <div id="flex">
      <Grid container>
        <Grid item>
          {/*signUp tab*/}
          <div className="signUpTab">
            <img src={write} alt="hola" className="whiteCirle" />
            <p className="Sign">Signup</p>
            <img src={upArrow} alt="hola" className="upArrow" />
          </div>
          <form action="#">
            <div>
              {/*firstName*/}
              <label for="fname" className="subHeadFname" id="flex">
                First name
              </label>
              {/*Last Name*/}
              <p className="subHeadLname" id="flex">
                Last Name
              </p>
              {/*firstName*/}
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter First Name"
                className="firstName"
                style={{ font: "normal normal normal 27px/65px Poppins" }}
              />
              {/*Last Name*/}
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Last Name"
                className="LName"
                style={{ font: "normal normal normal 27px/65px Poppins" }}
              />
            </div>

            {/*email*/}
            <p className="subHeadFname">Email id</p>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter Email id"
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            {/*send otp button*/}
            <Button
              variant="contained"
              className="Button1"
              style={{
                width: "252px",
                height: "86px",
                marginLeft: "45px",
                fontSize: "1.6rem",
                textTransform: "capitalize",
              }}
            >
              Send OTP
            </Button>
            {/*otp*/}
            <p className="subHeadFname">OTP</p>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter OTP"
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            {/*contact*/}
            <p className="subHeadFname">Contact Number</p>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter Contact Number"
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            {/*send otp button*/}
            <Button
              variant="contained"
              className="Button1"
              style={{
                width: "252px",
                height: "86px",
                marginLeft: "45px",
                fontSize: "1.6rem",
                textTransform: "capitalize",
              }}
            >
              Send OTP
            </Button>

            {/*otp*/}
            <p className="subHeadFname">OTP</p>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter OTP"
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />

            <div>
              {/*OTP*/}
              <label for="fname" className="subHeadFname" id="flex">
                OTP
              </label>
              {/*Date of Birth*/}
              <p className="subHeadLname" id="flex">
                Date of Birth{" "}
                <span style={{ color: "#4562DB" }}>(Optional)</span>
              </p>
              {/*OTP*/}
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter OTP"
                className="firstName"
                style={{ font: "normal normal normal 27px/65px Poppins" }}
              />
              {/*Date of Birth*/}
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter Date of Birth"
                className="LName"
                style={{ font: "normal normal normal 27px/65px Poppins" }}
              />
            </div>

            <div>
              {/*Aadhar card*/}
              <p className="subHeadFname" id="flex">
                Aadhar card <span style={{ color: "#4562DB" }}>(Optional)</span>
              </p>
              {/*PAN card*/}
              <p className="subHeadLname" id="flex">
                PAN card <span style={{ color: "#4562DB" }}>(Optional)</span>
              </p>
              {/*Aadhar card*/}
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Upload Aadhar card +"
                className="LName"
                style={{
                  border: "1px dashed #7070709E",
                  paddingLeft: "187px",
                  marginLeft: "113px",
                  font: " normal normal normal 23px/65px Poppins",
                }}
              />
              {/*PAN card*/}
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Upload PAN card +"
                className="LName"
                style={{
                  border: "1px dashed #7070709E",
                  paddingLeft: "187px",
                  font: " normal normal normal 23px/65px Poppins",
                }}
              />
            </div>
            {/*Continue*/}
            <Button
              variant="contained"
              className="Button1"
              style={{
                width: "632px",
                height: "100px",
                marginLeft: "113px",
                marginTop: "74px",
                fontSize: "2.5rem",
                textTransform: "capitalize",
              }}
            >
              Continue
            </Button>
          </form>

          {/*Delivery info tab*/}
          <div className="deliveryTab">
            <img src={write} alt="hola" className="whiteCirle" />
            <p className="SignWidth">Delivery Information</p>
            <img src={downArrow} alt="hola" className="downArrow" />
          </div>
          {/*payment method tab*/}
          <div className="deliveryTab">
            <img src={write} alt="hola" className="whiteCirle" />
            <p className="SignWidth">Payment Method</p>
            <img src={downArrow} alt="hola" className="downArrow" />
          </div>
        </Grid>

        <Grid item>
          {/*Order Summary*/}
          <Card
            className="ordContainer"
            style={{ width: "845px", height: "970px" }}
          >
            <CardContent>
              <h1 className="ordHead" style={{ marginBottom: "22px" }}>
                Order Summary
              </h1>
              <hr />
              <div className="textAndNumber">
                <p className="ordSub">Subtotal</p>
                <span className="numbers1">₹1,09,179</span>
              </div>
              <div className="textAndNumber">
                <p className="ordDel">Delivery Charges</p>
                <span className="numbers2">₹10</span>
              </div>
              <div className="textAndNumber">
                <p className="ordGST">GST</p>
                <span className="numbers3">₹10</span>
              </div>
              <div className="textAndNumber">
                <p className="Total">Total</p>
                <span className="numbers4">₹1,09,199</span>
              </div>

              {/*proceed button*/}
              <Button
                variant="contained"
                className="Button1"
                style={{
                  width: "762px",
                  height: "100px",
                  marginLeft: "30px",
                  marginTop: "8px",
                  fontSize: "2.5rem",
                  textTransform: "capitalize",
                }}
              >
                Proceed to checkout
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignUpDetails;
