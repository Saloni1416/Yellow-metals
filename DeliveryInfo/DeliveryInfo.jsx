import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import "./DeliveryInfo.css";
import write from "./Images/write.jpg";
import upArrow from "./Images/up.jpg";
import downArrow from "./Images/downArrow.jpg";
import check from "./Images/check.jpg";

function deliveryInfo() {
  return (
    <div>
      <Grid container className="flex">
        <Grid item>
          {/*signUp tab*/}
          <div className="signUpTab">
            <img src={write} alt="hola" className="whiteCirle" />
            <p className="Sign">Signup</p>
            <img src={check} alt="hola" className="upArrow" />
          </div>
          {/*Delivery info tab*/}
          <div className="deliveryTab">
            <img src={write} alt="hola" className="whiteCirle" />
            <p className="SignWidth">Delivery Information</p>
            <img src={upArrow} alt="hola" className="downArrow" />
          </div>
          <p
            style={{
              marginTop: "65px",
              marginLeft: "113px",
              fontSize: "2.3rem",
              fontWeight: "600",
            }}
          >
            Shipping Address
          </p>

          <div>
            {/*House Name*/}
            <label for="fname" className="subHeadFname" id="flex">
              House Name
            </label>
            {/*Street & house number*/}
            <p className="subHeadLname" id="flex">
              Street & house number
            </p>
            {/*House Name*/}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter House Name"
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            {/*Street & house number*/}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter Street & house number"
              className="LName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
          </div>

          <div>
            {/*Additional info (Optional)*/}
            <label for="fname" className="subHeadFname" id="flex">
              Additional info
              <span style={{ color: "#4562DB" }}>(Optional)</span>
            </label>
            {/*Pincode*/}
            <p className="subHeadLname" id="flex">
              Pincode
            </p>
            {/*Additional info (Optional)*/}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter House Name"
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            {/*Pincode*/}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter Pincode/Zipcode"
              className="LName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
          </div>

          <div>
            {/*City*/}
            <label for="fname" className="subHeadFname" id="flex">
              City
            </label>
            {/*Nationality*/}
            <p className="subHeadLname" id="flex">
              Nationality
            </p>
            {/*city*/}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter City Name"
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            {/*nationality*/}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="India"
              className="LName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            <img
              src={downArrow}
              style={{ marginLeft: "-74px" }}
              alt="hola"
              className="Arrow"
            />
          </div>

          <div>
            {/*State*/}
            <label for="fname" className="subHeadFname" id="flex">
              State
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Select State "
              className="firstName"
              style={{ font: "normal normal normal 27px/65px Poppins" }}
            />
            <img
              src={downArrow}
              style={{ marginLeft: "-74px" }}
              alt="hola"
              className="Arrow"
            />
          </div>

          <div className="flex-Column">
            <p
              style={{
                marginTop: "78px",
                marginLeft: "113px",
                fontSize: "2rem",
                fontWeight: "600",
                marginBottom: "46px",
              }}
            >
              Billing Address
            </p>
            {/*Check box*/}
            <div className="flex">
              <input
                type="radio"
                checked="checked"
                name="radio"
                style={{ marginLeft: "103px", width: "50px", height: "50px" }}
              ></input>
              <span
                class="checkmark"
                style={{ marginLeft: "44px", width: "50px", height: "50px" }}
              ></span>
              <label
                class="checker"
                style={{
                  paddingLeft: "23px",
                  paddingBottom: "0px",
                  font: "normal normal normal 27px/65px Poppins",
                }}
              >
                Use same as Shipping Address
              </label>
              <input
                type="radio"
                name="radio"
                style={{ marginLeft: "135px", width: "50px", height: "50px" }}
              />
              <span
                class="checkmark"
                style={{ width: "50px", height: "50px" }}
              ></span>
              <label
                class="checker"
                style={{
                  paddingLeft: "23px",
                  paddingBottom: "0px",
                  font: "normal normal normal 27px/65px Poppins",
                }}
              >
                Use a Different Address
              </label>
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
            {/*payment method tab*/}
            <div className="paymentTab" style={{ marginLeft: "107px" }}>
              <img
                src={write}
                alt="hola"
                className="whiteCirle"
                style={{ marginLeft: "-766px" }}
              />
              <p className="SignWidth">Payment Method</p>
            </div>
          </div>
        </Grid>

        <Grid item>
          {/*Order Summary*/}
          <Card
            className="ordContainer"
            style={{ width: "845px", height: "1005px" }}
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

export default deliveryInfo;
