import React from "react";
import { Grid } from "@mui/material";
import user from "./Images/user.jpg";
import history from "./Images/history.jpg";
import insurance from "./Images/insurance.jpg";
import profile from "./Images/profile.jpg";
import edit from "./Images/edit.jpg";
import card from "./Images/cards.jpg";
import customer from "./Images/customerCare.jpg";
import downArrow from "./Images/downArrow.jpg";
import "./BasicDetails.css";

function BasicDetails() {
  return (
    <Grid container style={{ marginBottom: "206px" }}>
      <Grid
        item
        style={{
          backgroundColor: "#F1F3F68F",
          width: "477px",
          height: "2736px",
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
            marginTop: "110rem",
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
          height: "2736px",
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
          <p
            id="para"
            style={{
              width: "1514px",
              marginTop: "3px",
              marginLeft: "20.5px",
              padding: "40px",
            }}
          >
            Basic Details
          </p>{" "}
          <span
            classname="p"
            style={{
              color: "#4562DB",
              marginLeft: "1032px",
              fontSize: "1.6rem",
            }}
          >
            Edit
          </span>
          <img
            src={edit}
            style={{
              width: "54px",
              height: "54px",
              marginLeft: "21px",
              marginRight: "32px",
            }}
          />
        </div>
        <div>
          <form noValidate autoComplete="off">
            {/* first and last name*/}
            <div
              style={{
                display: "flex ",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <label
                className="label"
                style={{
                  marginTop: "67px",
                  marginLeft: "65px",
                  font: "normal normal medium 29px/65px Poppins",
                }}
              >
                First Name
                <br />
                <input
                  type="text"
                  value="William"
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    font: "normal normal normal 27px/65px Poppins",
                  }}
                />
              </label>
              <label
                className="label"
                style={{ marginTop: "67px", marginLeft: "45px" }}
              >
                Last Name
                <br />
                <input
                  type="text"
                  value="Morris"
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    font: "normal normal normal 27px/65px Poppins",
                  }}
                />
              </label>
            </div>
            {/* email contact*/}
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
                Email id
                <br />
                <input
                  type="text"
                  value="williammorris@gmail.com"
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    font: "normal normal normal 27px/65px Poppins",
                  }}
                />
              </label>
              <label
                className="label"
                style={{ marginTop: "38px", marginLeft: "45px" }}
              >
                Contact Number
                <br />
                <input
                  type="text"
                  value="91+7345678976"
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    font: "normal normal normal 27px/65px Poppins",
                  }}
                />
              </label>
            </div>
            {/* dob*/}
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
                Date of Birth{" "}
                <span style={{ color: "#4562DB" }}>(Optional)</span>
                <br />
                <input
                  type="text"
                  value="12-12-1998"
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    font: "normal normal normal 27px/65px Poppins",
                    marginBottom: "5rem",
                  }}
                />
              </label>
            </div>
          </form>
        </div>
        {/* KYC Details*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F1F3F68F",
            marginBottom: "3rem",
          }}
        >
          <p
            id="para"
            style={{
              width: "1514px",
              marginTop: "3px",
              marginLeft: "20.5px",
              padding: "40px",
            }}
          >
            KYC Details
          </p>{" "}
          <span
            classname="p"
            style={{
              color: "#4562DB",
              marginLeft: "1032px",
              fontSize: "1.6rem",
            }}
          >
            Edit
          </span>
          <img
            src={edit}
            style={{
              width: "54px",
              height: "54px",
              marginLeft: "21px",
              marginRight: "32px",
            }}
          />
        </div>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{marginTop:"2rem"}}>
              {/*Aadhar*/}
              <label
                for="aadhar"
                className="label"
                style={{
                  marginTop: "38px",
                  marginLeft: "65px",
                  font: "normal normal medium 29px/65px Poppins",
                }}
              >
                Aadhar Card<span style={{ color: "#4562DB" }}>(Optional)</span>
                <br />
              </label>

                
              
              <input
              type="text"
              value="Aadhar card"
              style={{
                marginTop: "20px",
                marginLeft:"66px",
                padding: "24px",
                font: "normal normal normal 23px/65px Poppins",
                height: "131px",
                textAlign:"center",
                border: "1px dashed #7070709E",
              }}
              startIcon={<card/>}
            />
            <img
                src={card}
                style={{ marginLeft: "0px" }}
                alt="hola"
              />
            </div>

            <label
              className="label"
              style={{ marginTop: "38px", marginLeft: "45px" }}
            >
              Pan Card<span style={{ color: "#4562DB" }}>(Optional)</span>
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
        {/* Security*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F1F3F68F",
            marginTop: "6rem",
          }}
        >
          <p
            id="para"
            style={{
              width: "1514px",
              marginTop: "3px",
              marginLeft: "20.5px",
              padding: "40px",
            }}
          >
            Security
          </p>{" "}
          <span
            classname="p"
            style={{
              color: "#4562DB",
              marginLeft: "1032px",
              fontSize: "1.6rem",
            }}
          >
            Edit
          </span>
          <img
            src={edit}
            style={{
              width: "54px",
              height: "54px",
              marginLeft: "21px",
              marginRight: "32px",
            }}
          />
        </div>
        {/* login Number*/}
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
              marginTop: "67px",
              marginLeft: "65px",
              font: "normal normal medium 29px/65px Poppins",
            }}
          >
            Login Number
            <br />
            <input
              type="text"
              value="91+7345678976"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
          </label>
        </div>
        {/*Address*/}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F1F3F68F",
            marginTop: "5rem",
            marginBottom: "3rem",
          }}
        >
          <p
            id="para"
            style={{
              width: "1514px",
              marginTop: "3px",
              marginLeft: "20.5px",
              padding: "40px",
            }}
          >
            Address
          </p>{" "}
          <span
            classname="p"
            style={{
              color: "#4562DB",
              marginLeft: "1032px",
              fontSize: "1.6rem",
            }}
          >
            Edit
          </span>
          <img
            src={edit}
            style={{
              width: "54px",
              height: "54px",
              marginLeft: "21px",
              marginRight: "32px",
            }}
          />
        </div>
        {/*House name and Number*/}
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
            House Name
            <br />
            <input
              type="text"
              value="House No 87"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
          </label>
          <label
            className="label"
            style={{ marginTop: "38px", marginLeft: "45px" }}
          >
            Street & house number
            <br />
            <input
              type="text"
              value="1704 WEEKSVILLE ROAD"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
          </label>
        </div>
        {/*additional info and pin code*/}
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
            Additional info <span style={{ color: "#4562DB" }}>(Optional)</span>
            <br />
            <input
              type="text"
              value="Optional"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
          </label>
          <label
            className="label"
            style={{ marginTop: "38px", marginLeft: "45px" }}
          >
            Pincode
            <br />
            <input
              type="text"
              value="27909"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
          </label>
        </div>
        {/*city and nationality*/}
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
            City
            <br />
            <input
              type="text"
              value="Bangalore"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
          </label>
          <label
            className="label"
            style={{ marginTop: "38px", marginLeft: "45px" }}
          >
            Nationality
            <br />
            <input
              type="text"
              value="India"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
            <img
              src={downArrow}
              style={{ marginLeft: "-74px" }}
              alt="hola"
              className="Arrow"
            />
          </label>
        </div>

        {/*state */}
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
            State
            <br />
            <input
              type="text"
              value="Karnataka"
              style={{
                marginTop: "20px",
                padding: "24px",
                font: "normal normal normal 27px/65px Poppins",
              }}
            />
          </label>
        </div>
      </Grid>
    </Grid>
  );
}

export default BasicDetails;
