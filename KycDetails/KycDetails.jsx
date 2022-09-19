import React from "react";
import { Grid, Button } from "@mui/material";
import user from "./Images/user.jpg";
import history from "./Images/history.jpg";
import insurance from "./Images/insurance.jpg";
import profile from "./Images/profile.jpg";
import customer from "./Images/customerCare.jpg";
import backArrow from "./Images/backArrow.jpg";

function KycDetails() {
  return (
    <Grid container style={{ marginBottom: "206px" }}>
      <Grid
        item
        style={{
          backgroundColor: "#F1F3F68F",
          width: "477px",
          height: "1242px",
          marginTop: "107px",
          marginLeft: "195px",
          border: "1px solid #DEDFE0",
          borderRadius: "9px",
        }}
      >
        {/*user*/}
        <Grid Item style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={user}
            style={{
              width: "77px",
              height: "77px",
              marginTop: "90px",
              marginLeft: "52px",
            }}
          ></img>
          <Grid Item style={{ display: "flex", flexDirection: "column" }}>
            <p
              id="para"
              style={{
                marginTop: "83px",
                marginLeft: "20.5px",
                width: "247px",
              }}
            >
              William Morris
            </p>
            <h6 style={{ marginTop: "-11px", marginLeft: "20.5px" }}>
              91+7345678976
            </h6>
          </Grid>
        </Grid>

        <hr style={{ opacity: "0.5", marginTop: "38px" }} />
        {/*order*/}
        <h6
          className="para"
          style={{ marginLeft: "51.5px", color: "#252525", padding: "4px" }}
        >
          ORDER
        </h6>
        <hr style={{ opacity: "0.5" }} />

        <Grid Item style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={history}
            style={{
              width: "22px",
              height: "19px",
              marginTop: "35px",
              marginLeft: "52px",
            }}
          ></img>
          <h2
            style={{
              marginTop: "30px",
              marginLeft: "20.5px",
              width: "247px",
              fontSize: "23px",
            }}
          >
            Order History
          </h2>
        </Grid>

        <Grid Item style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={insurance}
            style={{
              width: "18px",
              height: "24px",
              marginTop: "35px",
              marginLeft: "52px",
            }}
          ></img>
          <h2
            style={{
              marginTop: "38px",
              marginLeft: "20.5px",
              width: "247px",
              fontSize: "23px",
              marginBottom: "35px",
            }}
          >
            Policies
          </h2>
        </Grid>

        <hr style={{ opacity: "0.5" }} />
        <h6
          className="para"
          style={{ marginLeft: "51.5px", color: "#252525", padding: "4px" }}
        >
          ACCOUNTS
        </h6>
        <hr style={{ opacity: "0.5" }} />

        <Grid Item style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={profile}
            style={{
              width: "18px",
              height: "18px",
              marginTop: "46px",
              marginLeft: "52px",
            }}
          ></img>
          <h2
            style={{
              marginTop: "43px",
              marginLeft: "20.5px",
              width: "247px",
              fontSize: "23px",
              marginBottom: "35px",
            }}
          >
            Profile
          </h2>
        </Grid>

        <hr style={{ opacity: "0.5" }} />
        <h6
          className="para"
          style={{ marginLeft: "51.5px", color: "#252525", padding: "4px" }}
        >
          Help
        </h6>
        <hr style={{ opacity: "0.5" }} />
        <Grid Item></Grid>

        <Grid Item style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={customer}
            style={{
              width: "18px",
              height: "18px",
              marginTop: "46px",
              marginLeft: "52px",
            }}
          ></img>
          <h2
            style={{
              marginTop: "43px",
              marginLeft: "20.5px",
              width: "247px",
              fontSize: "23px",
              marginBottom: "35px",
            }}
          >
            Customer Services
          </h2>
        </Grid>

        <h2
          style={{
            marginTop: "20rem",
            marginLeft: "52px",
            width: "287px",
            fontSize: "23px",
            marginBottom: "35px",
          }}
        >
          Need Help? <span style={{ color: "#4562DB" }}>Chat With Us</span>
        </h2>
      </Grid>

      <Grid
        style={{
          marginTop: "107px",
          marginLeft: "35px",
          width: "1514px",
          height: "1242px",
          border: "1px solid #DEDFE0",
          borderRadius: "9px",
        }}
      >
        {/* Basic Details*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F1F3F68F",
          }}
        >
          <img
            src={backArrow}
            style={{
              width: "35.3px",
              height: "35.3px",
              marginLeft: "65px",
              marginRight: "32px",
            }}
          />
          <p
            id="para"
            style={{
              width: "1514px",
              marginTop: "3px",
              marginLeft: "-44.8px",
              padding: "40px",
            }}
          >
            KYC Details
          </p>
        </div>

        <div>
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                className="label"
                style={{
                  marginTop: "38px",
                  marginLeft: "65px",
                  font: "normal normal medium 29px/65px Poppins",
                }}
              >
                Aadhar Card <span style={{ color: "#4562DB" }}>(Optional)</span>
                <span
                  style={{
                    font: "normal normal normal 22px/57px Poppins",
                    marginLeft: "282px",
                    color: "#4562DB",
                  }}
                >
                  View
                </span>
                <br />
                <input
                  type="text"
                  value="Upload Aadhar card +"
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    font: "normal normal normal 23px/65px Poppins",
                    height: "131px",
                    border: "1px dashed #7070709E",
                    textAlign: "center",
                  }}
                />
              </label>
              <label
                className="label"
                style={{ marginTop: "38px", marginLeft: "45px" }}
              >
                Pan Card <span style={{ color: "#4562DB" }}> (Optional)</span>
                <span
                  style={{
                    font: "normal normal normal 22px/57px Poppins",
                    marginLeft: "338px",
                    color: "#4562DB",
                  }}
                >
                  View
                </span>
                <br />
                <input
                  type="text"
                  value="Pan card"
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    font: "normal normal normal 23px/65px Poppins",
                    height: "131px",
                    border: "1px dashed #7070709E",
                  }}
                />
              </label>
            </div>
          </form>
          <Button
            style={{
              width: "632px",
              height: "87px",
              backgroundColor: "#4562DB",
              fontSize: "2.1rem",
              color: "white",
              marginLeft: "65px",
              marginTop: "63px",
              textTransform: "capitalize",
            }}
          >
            Save Changes
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default KycDetails;
